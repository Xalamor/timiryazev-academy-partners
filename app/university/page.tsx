// src/app/university/page.tsx
import React from "react";
import Link from "next/link";
import "./university.css";

export default function UniversityPage() {
  return (
    <div className="university-page">
      <div className="university-header">
        <h1>Тимирязевская академия</h1>
        <p>
          Старейший аграрный университет России с богатой историей и традициями
        </p>
      </div>

      <div className="university-content">
        <div className="university-info">
          <div className="info-section">
            <h2>История и достижения</h2>
            <p>
              Российский государственный аграрный университет — МСХА имени К.А.
              Тимирязева (Тимирязевская академия) — старейшее и всемирно
              известное высшее аграрное учебное заведение России, ведущий
              учебный, научный, методический и консультационный центр системы
              аграрного образования России.
            </p>
            <p>
              Основана в 1865 году. За свою историю академия подготовила более
              200 тысяч специалистов высшей квалификации для сельского хозяйства
              и связанных с ним отраслей экономики.
            </p>
          </div>

          <div className="info-section">
            <h2>Международное сотрудничество</h2>
            <p>
              Академия активно развивает международные связи с ведущими
              университетами мира. Мы участвуем в программах студенческого
              обмена, совместных исследовательских проектах и научных
              конференциях.
            </p>
            <Link href="/partners" className="partners-link">
              Смотреть всех партнеров →
            </Link>
          </div>

          <div className="info-section">
            <h2>Факультеты и направления</h2>
            <ul className="faculties-list">
              <li>Агрономический факультет</li>
              <li>Факультет зоотехнии и биологии</li>
              <li>Факультет почвоведения, агрохимии и экологии</li>
              <li>Факультет садоводства и ландшафтной архитектуры</li>
              <li>Инженерный факультет</li>
              <li>Экономический факультет</li>
              <li>Факультет гуманитарно-педагогический</li>
              <li>Факультет заочного образования</li>
            </ul>
          </div>

          <div className="info-section">
            <h2>Карта партнеров Тимирязевской Академии</h2>
            <img
              className="partners-map"
              src="/partners-map.svg"
              alt="Карта партнеров Тимирязевской Академии"
            />
          </div>
        </div>

        <div className="university-stats">
          <div className="university-stat">
            <div className="university-stat-number">150+</div>
            <div className="university-stat-label">Лет истории</div>
          </div>
          <div className="university-stat">
            <div className="university-stat-number">50+</div>
            <div className="university-stat-label">Стран партнеров</div>
          </div>
          <div className="university-stat">
            <div className="university-stat-number">12000+</div>
            <div className="university-stat-label">Студентов</div>
          </div>
          <div className="university-stat">
            <div className="university-stat-number">1000+</div>
            <div className="university-stat-label">Преподавателей</div>
          </div>
        </div>
      </div>

      <div className="university-contact">
        <div className="contact-section">
          <h2>Контактная информация</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Адрес</h3>
              <p>127550, Москва, ул. Тимирязевская, 49</p>
            </div>
            <div className="contact-item">
              <h3>Телефон</h3>
              <p>+7 (499) 977-00-00</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@timacad.ru">info@timacad.ru</a>
              </p>
            </div>
            <div className="contact-item">
              <h3>Официальный сайт</h3>
              <p>
                <a
                  href="https://www.timacad.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.timacad.ru
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
