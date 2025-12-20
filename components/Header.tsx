// components/Header.tsx (с inline стилями)
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Партнеры", href: "/partners" },
    { name: "Университет", href: "/university" },
  ];

  return (
    <header
      style={{
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Логотип и название */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#006915",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.125rem",
                }}
              >
                <img src="/logo.svg" alt="" />
              </span>
            </div>
            <span
              style={{
                color: "#006915",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              Тимирязевская академия
            </span>
          </Link>

          {/* Десктопное меню */}
          <nav
            style={{
              display: "none",
            }}
            className="desktop-menu"
          >
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    color: "#374151",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Мобильное меню кнопка */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#374151",
              display: "block",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню (раскрывающееся) */}
        {isMenuOpen && (
          <div
            style={{
              marginTop: "1rem",
              paddingBottom: "1rem",
              borderTop: "1px solid #f3f4f6",
              paddingTop: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    color: "#374151",
                    textDecoration: "none",
                    padding: "0.5rem 0",
                    fontSize: "1rem",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          button {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
