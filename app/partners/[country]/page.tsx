// src/app/partners/[country]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PARTNERS, getPartnersByCountry } from "../../partners";
import "../partners.css";

export default function CountryPartnersPage() {
  const params = useParams();
  const [country, setCountry] = useState<string>("");
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    if (params?.country) {
      const decodedCountry = decodeURIComponent(params.country as string);
      setCountry(decodedCountry);
      setPartners(getPartnersByCountry(decodedCountry));
    }
  }, [params]);

  useEffect(() => {
    // Прокрутка к конкретному партнеру если есть hash
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  if (!country) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div className="country-partners-page">
      <div className="country-header">
        <Link href="/partners" className="back-link">
          ← Все партнеры
        </Link>
        <h1>Партнеры в {country}</h1>
        <p>Университеты и программы сотрудничества в {country}</p>
      </div>

      <div className="country-stats">
        <div className="country-stat">
          <span className="stat-number">{partners.length}</span>
          <span className="stat-label">университетов</span>
        </div>
        <div className="country-stat">
          <span className="stat-number">
            {partners.reduce((acc, p) => acc + (p.studentsCount || 0), 0)}
          </span>
          <span className="stat-label">студентов по обмену</span>
        </div>
        <div className="country-stat">
          <span className="stat-number">
            {Math.min(...partners.map((p) => p.year))}
          </span>
          <span className="stat-label">год начала сотрудничества</span>
        </div>
      </div>

      <div className="partners-list">
        {partners.map((partner) => (
          <div key={partner.id} id={partner.id} className="partner-detail-card">
            <div className="partner-detail-header">
              <div className="partner-main-info">
                <h2>{partner.name}</h2>
                <p className="partner-location-detail">
                  {partner.city}, {partner.country}
                </p>
              </div>
              <div className="partner-badge">
                <span>Сотрудничество с {partner.year} года</span>
              </div>
            </div>

            <div className="partner-content">
              <div className="partner-description-full">
                <h3>О сотрудничестве</h3>
                <p>{partner.description}</p>
              </div>

              <div className="partner-programs">
                <h3>Программы сотрудничества</h3>
                <ul className="programs-list">
                  {partner.programs.map((program: string, index: number) => (
                    <li key={index} className="program-item">
                      <span className="program-bullet">✓</span>
                      {program}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="partner-stats">
                <div className="partner-stat">
                  <span className="partner-stat-number">
                    {partner.studentsCount || 0}
                  </span>
                  <span className="partner-stat-label">студентов</span>
                </div>
                <div className="partner-stat">
                  <span className="partner-stat-number">
                    {partner.programs.length}
                  </span>
                  <span className="partner-stat-label">программ</span>
                </div>
                <div className="partner-stat">
                  <span className="partner-stat-number">
                    {new Date().getFullYear() - partner.year}
                  </span>
                  <span className="partner-stat-label">лет сотрудничества</span>
                </div>
              </div>

              {partner.website && (
                <div className="partner-website">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website-link"
                  >
                    🌐 Официальный сайт партнера
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
