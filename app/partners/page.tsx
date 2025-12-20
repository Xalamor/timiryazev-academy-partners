// src/app/partners/page.tsx
import React from "react";
import Link from "next/link";
import {
  PARTNERS,
  PARTNER_COUNTRIES,
  getCountryPartnersCount,
} from "../partners";
import "./partners.css";

export default function PartnersPage() {
  const countriesWithPartners = PARTNER_COUNTRIES.map((country) => ({
    name: country,
    count: getCountryPartnersCount(country),
  }));

  return (
    <div className="partners-page">
      <div className="partners-header">
        <h1>Наши международные партнеры</h1>
        <p>
          Тимирязевская академия сотрудничает с ведущими университетами мира
        </p>
      </div>

      <div className="partners-stats">
        <div className="stat-card">
          <div className="stat-number">{PARTNER_COUNTRIES.length}</div>
          <div className="stat-label">Стран-партнеров</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{PARTNERS.length}</div>
          <div className="stat-label">Университетов</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">1200+</div>
          <div className="stat-label">Студентов по обмену</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">15+</div>
          <div className="stat-label">Лет сотрудничества</div>
        </div>
      </div>

      <div className="partners-content">
        <div className="countries-section">
          <h2>Страны-партнеры</h2>
          <div className="countries-grid">
            {countriesWithPartners.map((country) => (
              <Link
                key={country.name}
                href={`/partners/${encodeURIComponent(country.name)}`}
                className="country-card"
              >
                <div className="country-card-header">
                  <h3>{country.name}</h3>
                  <span className="country-partners-count">
                    {country.count} партнеров
                  </span>
                </div>
                <div className="country-card-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="all-partners-section">
          <h2>Все партнеры</h2>
          <div className="partners-grid">
            {PARTNERS.map((partner) => (
              <Link
                key={partner.id}
                href={`/partners/${encodeURIComponent(partner.country)}#${
                  partner.id
                }`}
                className="partner-card"
              >
                <div className="partner-card-header">
                  <div className="partner-country-flag">
                    {partner.country.charAt(0)}
                  </div>
                  <div>
                    <h3>{partner.name}</h3>
                    <p className="partner-location">
                      {partner.city}, {partner.country}
                    </p>
                  </div>
                </div>
                <p className="partner-description">{partner.description}</p>
                <div className="partner-footer">
                  <span className="partner-year">С {partner.year} года</span>
                  <span className="partner-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
