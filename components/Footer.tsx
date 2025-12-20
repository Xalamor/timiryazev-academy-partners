// components/Footer.tsx
import React from "react";
import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  const menuItems = [
    { name: "Партнеры", href: "/partners" },
    { name: "Университет", href: "/university" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Логотип и название */}
          <div className="footer-logo-section">
            <div className="footer-logo-circle">
              <span className="footer-logo-text">
                <img src="/logo.svg" alt="" />
              </span>
            </div>
            <div>
              <h3 className="footer-title">Тимирязевская академия</h3>
              <p className="footer-subtitle">Международное сотрудничество</p>
            </div>
          </div>

          {/* Меню */}
          <nav className="footer-nav">
            <ul className="footer-menu-list">
              {menuItems.map((item) => (
                <li key={item.name} className="footer-menu-item">
                  <Link href={item.href} className="footer-menu-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Контактная информация */}
          <div className="footer-contact-info">
            <p className="footer-address">
              127550, Москва, ул. Тимирязевская, 49
            </p>
            <p className="footer-phone">+7 (499) 977-00-00</p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Тимирязевская академия
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
