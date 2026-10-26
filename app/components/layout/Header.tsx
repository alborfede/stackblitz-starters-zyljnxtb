'use client';

import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerTopElement = document.querySelector('.header-top');
      const threshold = headerTopElement
        ? headerTopElement.getBoundingClientRect().bottom + window.scrollY
        : 70;

      if (window.scrollY >= threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="header-container">
      <div className="nyt-top-line"></div>

      <div className="header-top">
        <div className="header-left-actions">
          <button className="icon-btn" title="Menú" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </button>

          <div
            className="search-container-inline"
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <button className="icon-btn" title="Buscar" onClick={toggleSearch}>
              <i className="ri-search-line"></i>
            </button>

            {isSearchOpen && (
              <form
                className="search-dropdown-form"
                onSubmit={(e) => e.preventDefault()}
                style={{
                  marginLeft: '35px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <input
                  type="text"
                  placeholder="Buscar"
                  className="search-input-nyt"
                  autoFocus
                />
                <button type="submit" className="search-submit-btn">
                  IR
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 1. AQUÍ CAMBIAMOS EL LOGO PRINCIPAL (ARRIBA) */}
        <div className="brand-logo-container">
          <a href="/" aria-label="Inicio">
            <img
              src="/logo-prensa-obrera.svg"
              alt="Prensa Obrera"
              className="brand-logo-svg"
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
            />
          </a>
        </div>

        <div className="header-right-actions" style={{ position: 'relative' }}>
          <button className="btn-suscribite-nyt">SUSCRIBITE</button>
          <button className="btn-account-nyt" onClick={toggleProfileMenu}>
            Ingresar <i className="ri-user-3-line"></i>
          </button>

          {isProfileMenuOpen && (
            <div className="profile-dropdown-menu">
              <div className="profile-dropdown-header">
                <span className="profile-email">alborfede@gmail.com</span>
                <button
                  className="profile-close-btn"
                  onClick={toggleProfileMenu}
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>

              <div className="profile-dropdown-body">
                <div className="profile-greeting-section">
                  <div className="profile-avatar">
                    <i className="ri-user-3-fill"></i>
                  </div>
                  <h2>Hola</h2>
                  <a href="#" className="profile-setup-link">
                    Configurar tu perfil
                  </a>
                </div>

                <p className="profile-sub-status">
                  El correo con el que ingresaste no está asociado a una cuenta
                  y tiene acceso limitado.
                </p>

                <button className="profile-subscribe-btn">
                  Ingresá o creá tu cuenta
                </button>

                <p className="profile-alt-email">
                  ¿Ya tenés cuenta? <a href="#">Usa otro correo</a>
                </p>

                <ul className="profile-nav-list">
                  <li>
                    <a href="#">
                      Configuración de cuenta{' '}
                      <i className="ri-arrow-right-s-line"></i>
                    </a>
                  </li>
                  <li className="profile-nav-section">TU CONTENIDO</li>
                  <li>
                    <a href="#">
                      Artículos guardados{' '}
                      <i className="ri-arrow-right-s-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Newsletters <i className="ri-arrow-right-s-line"></i>
                    </a>
                  </li>
                  <li className="profile-nav-section"> SOPORTE</li>
                  <li>
                    <a href="#">
                      Centro de ayuda <i className="ri-arrow-right-s-line"></i>
                    </a>
                  </li>
                </ul>

                <a href="#" className="profile-logout">
                  Cerrar sesión
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <nav className={`sub-navbar ${isSticky ? 'is-sticky' : ''}`}>
        <div className="sub-nav-container">
          {isSticky && (
            /* 2. AQUÍ CAMBIAMOS EL LOGO STICKY (CUANDO HACES SCROLL) */
            <a href="/" className="sticky-logo-web" aria-label="Inicio">
              <img
                src="/isologo-po.svg"
                alt="Prensa Obrera"
                style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
              />
            </a>
          )}

          <ul className="sub-nav-links">
            <li className="highlight-topic">
              <span className="live-tag">● ESPECIAL</span>
              <a href="#">Encuentro de Mujeres</a>
            </li>
            <span className="sub-nav-divider">|</span>
            <li>
              <a href="#">Últimas</a>
            </li>
            <li>
              <a href="#">Editorial</a>
            </li>
            <li>
              <a href="#">Fate</a>
            </li>
            <li>
              <a href="#">Bolivia</a>
            </li>
            <li>
              <a href="#">Palestina</a>
            </li>
            <li>
              <a href="#">Irán</a>
            </li>
          </ul>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="drawer-overlay" onClick={toggleMenu}>
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <button
                className="drawer-close-btn"
                onClick={toggleMenu}
                title="Cerrar menú"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>

            <div className="drawer-search-wrapper">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toggleMenu();
                }}
                className="drawer-search-form"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="drawer-search-input"
                />
                <button type="submit" className="drawer-search-btn">
                  IR
                </button>
              </form>
            </div>

            <div className="drawer-scrollable-body">
              <div className="drawer-section-group">
                <a href="#" className="drawer-item with-arrow">
                  <span>HOME</span>
                  <i className="ri-arrow-right-s-line"></i>
                </a>
                <a href="#" className="drawer-item with-arrow">
                  <span>Editorial</span>
                  <i className="ri-arrow-right-s-line"></i>
                </a>
                <a href="#" className="drawer-item with-arrow">
                  <span>Fate</span>
                  <i className="ri-arrow-right-s-line"></i>
                </a>
                <a href="#" className="drawer-item with-arrow">
                  <span>Políticas</span>
                  <i className="ri-arrow-right-s-line"></i>
                </a>
                <a href="#" className="drawer-item with-arrow">
                  <span>Sindicales</span>
                  <i className="ri-arrow-right-s-line"></i>
                </a>
                <a href="#" className="drawer-item with-arrow">
                  <span>Movimiento Piquetero</span>
                  <i className="ri-arrow-right-s-line"></i>
                </a>
                <a href="#" className="drawer-item with-arrow">
                  <span>Internacionales</span>
                  <i className="ri-arrow-right-s-line"></i>
                </a>
                <a href="#" className="drawer-item with-arrow">
                  <span>Juventud</span>
                  <i className="ri-arrow-right-s-line"></i>
                </a>
                <a href="#" className="drawer-item with-arrow">
                  <span>Cultura</span>
                  <i className="ri-arrow-right-s-line"></i>
                </a>
              </div>

              <div
                className="drawer-section-group drawer-secondary-links"
                style={{
                  borderTop: '1px solid #e2e2e2',
                  marginTop: '16px',
                  paddingTop: '16px',
                }}
              >
                <a
                  href="#"
                  className="drawer-item"
                  style={{
                    fontSize: '0.875rem',
                    color: '#666666',
                    padding: '6px 0',
                  }}
                >
                  <span>Podcasts</span>
                </a>
                <a
                  href="#"
                  className="drawer-item"
                  style={{
                    fontSize: '0.875rem',
                    color: '#666666',
                    padding: '6px 0',
                  }}
                >
                  <span>Youtube</span>
                </a>
                <a
                  href="#"
                  className="drawer-item"
                  style={{
                    fontSize: '0.875rem',
                    color: '#666666',
                    padding: '6px 0',
                  }}
                >
                  <span>Newsletters</span>
                </a>
                <a
                  href="#"
                  className="drawer-item"
                  style={{
                    fontSize: '0.875rem',
                    color: '#666666',
                    padding: '6px 0',
                  }}
                >
                  <span>Revista EDM</span>
                </a>
                <a
                  href="#"
                  className="drawer-item"
                  style={{
                    fontSize: '0.875rem',
                    color: '#666666',
                    padding: '6px 0',
                  }}
                >
                  <span>Edición impresa</span>
                </a>
                <a
                  href="#"
                  className="drawer-item"
                  style={{
                    fontSize: '0.875rem',
                    color: '#666666',
                    padding: '6px 0',
                  }}
                >
                  <span>Contactanos</span>
                </a>
                <a
                  href="#"
                  className="drawer-item"
                  style={{
                    fontSize: '0.875rem',
                    color: '#666666',
                    padding: '6px 0',
                  }}
                >
                  <span>English</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
