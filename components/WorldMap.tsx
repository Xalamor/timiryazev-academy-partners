// src/components/WorldMap.tsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import "./WorldMap.css";
import Link from "next/link";

const mapProps = {
  center: [20, 0] as [number, number],
  zoom: 2,
  minZoom: 1,
  maxZoom: 6,
  className: "world-map",
  style: { height: "600px", width: "100%" },
};

// Динамически импортируем Leaflet компоненты
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Импортируем данные партнеров
import { PARTNER_DATA, PARTNER_COUNTRIES } from "../app/partners";

interface CountryFeature {
  properties: {
    name: string;
    iso_a2?: string;
    iso_a3?: string;
  };
  geometry: any;
}

interface SelectedCountry {
  name: string;
  code: string;
  partners: string[];
}

const WorldMap = () => {
  const [geoData, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] =
    useState<SelectedCountry | null>(null);
  const [popupPosition, setPopupPosition] = useState<[number, number] | null>(
    null
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const loadGeoData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
        );
        if (!response.ok) throw new Error("Ошибка загрузки данных");
        const data = await response.json();
        setGeoData(data);
      } catch (err) {
        console.error("Error loading GeoJSON:", err);
        setError("Не удалось загрузить карту. Попробуйте обновить страницу.");
      } finally {
        setLoading(false);
      }
    };

    loadGeoData();
  }, [isClient]);

  // Стили для стран
  const getCountryStyle = (feature: CountryFeature) => {
    const countryName = feature.properties.name;
    const isPartner = PARTNER_COUNTRIES.includes(countryName);

    return {
      fillColor: isPartner ? "#007620" : "#E5E7EB",
      weight: 1,
      opacity: 1,
      color: "white",
      fillOpacity: isPartner ? 0.7 : 0.3,
      cursor: "pointer",
      outline: "none",
    };
  };

  // Обработчик клика по стране
  const onEachCountry = (feature: CountryFeature, layer: any) => {
    const countryName = feature.properties.name;
    const countryCode =
      feature.properties.iso_a2 || feature.properties.iso_a3 || "";
    const partners = PARTNER_DATA[countryName] || [];

    layer.on({
      click: (e: any) => {
        const isPartner = PARTNER_COUNTRIES.includes(countryName);
        setSelectedCountry({
          name: countryName,
          code: countryCode,
          partners: partners,
        });
        setPopupPosition([e.latlng.lat, e.latlng.lng]);

        // Убираем черную рамку при клике
        layer.setStyle({
          weight: 1,
          color: "white",
          fillOpacity: isPartner ? 0.7 : 0.3,
        });
      },
      mouseover: () => {
        const isPartner = PARTNER_COUNTRIES.includes(countryName);
        layer.setStyle({
          weight: 2,
          color: "#999",
          fillOpacity: 0.9,
        });
      },
      mouseout: () => {
        const isPartner = PARTNER_COUNTRIES.includes(countryName);
        layer.setStyle({
          weight: 1,
          color: "white",
          fillOpacity: isPartner ? 0.7 : 0.3,
        });
      },
    });

    // Тултип с названием страны
    if (PARTNER_COUNTRIES.includes(countryName)) {
      layer.bindTooltip(`
        <div class="map-tooltip">
          <strong>${countryName}</strong>
          ${
            partners.length > 0
              ? `<br><small>Партнеров: ${partners.length}</small>`
              : ""
          }
        </div>
      `);
    }
  };

  // Компонент информации о стране
  const CountryInfo = ({ country }: { country: SelectedCountry }) => (
    <div className="country-popup">
      <div className="popup-header">
        <h3>{country.name}</h3>
        <span className="country-code">{country.code}</span>
      </div>
      {country.partners.length > 0 ? (
        <>
          <p className="partners-count">Партнеров: {country.partners.length}</p>
          <ul className="partners-list">
            {country.partners.map((partner, index) => (
              <li key={index} className="partner-item">
                <span className="partner-bullet">•</span>
                {partner}
              </li>
            ))}
          </ul>
          <Link
            href={`/partners/${encodeURIComponent(country.name)}`}
            className="view-details-btn"
          >
            Подробнее о сотрудничестве
          </Link>
        </>
      ) : (
        <p className="no-partners">Пока нет зарегистрированных партнеров</p>
      )}
    </div>
  );

  // Легенда карты
  const MapLegend = () => (
    <div className="map-legend">
      <div className="legend-title">Легенда</div>
      <div className="legend-item">
        <span className="legend-color partner"></span>
        <span>Страны-партнеры</span>
      </div>
      <div className="legend-item">
        <span className="legend-color other"></span>
        <span>Другие страны</span>
      </div>
    </div>
  );

  if (!isClient) {
    return (
      <div className="map-loading">
        <div className="spinner"></div>
        <p>Инициализация карты...</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="map-loading">
        <div className="spinner"></div>
        <p>Загрузка карты...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="map-error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Обновить</button>
      </div>
    );
  }

  return (
    <div className="world-map-container">
      <div className="map-header">
        <h2>🌍 Наши международные партнеры</h2>
        <p>
          Нажмите на зеленую страну, чтобы увидеть партнеров Тимирязевской
          академии
        </p>
      </div>

      <div className="map-wrapper">
        <MapContainer {...mapProps}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            {...{
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }}
          />

          {geoData && (
            <GeoJSON
              data={geoData}
              {...{
                style: getCountryStyle,
                onEachFeature: onEachCountry,
              }}
            />
          )}

          {selectedCountry && popupPosition && (
            <Popup
              position={popupPosition}
              {...{
                onClose: () => setSelectedCountry(null),
              }}
            >
              <CountryInfo country={selectedCountry} />
            </Popup>
          )}
        </MapContainer>

        <MapLegend />
      </div>

      <div className="map-stats">
        <div className="stat-item">
          <span className="stat-number">{PARTNER_COUNTRIES.length}</span>
          <span className="stat-label">стран-партнеров</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {Object.values(PARTNER_DATA).flat().length}
          </span>
          <span className="stat-label">учебных заведений</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">1200+</span>
          <span className="stat-label">студентов по обмену</span>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
