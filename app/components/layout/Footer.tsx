import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-site">
      <div className="footer-container">
        <div className="footer-header">
          <div className="footer-brand">
            {/* NUEVO LOGO EN EL FOOTER */}
            <a href="/" aria-label="Inicio">
              <img
                src="/logo-prensa-obrera.svg"
                alt="Prensa Obrera"
                className="footer-logo-img"
                style={{ height: '35px', width: 'auto', objectFit: 'contain' }}
              />
            </a>
          </div>
          <a href="#" className="footer-home-link">
            Ir a la página principal »
          </a>
        </div>

        <div className="footer-columns-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">SECCIONES</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#">Ambiente</a>
              </li>
              <li>
                <a href="#">Aniversarios</a>
              </li>
              <li>
                <a href="#">Correo de lectores</a>
              </li>
              <li>
                <a href="#">Cultura</a>
              </li>
              <li>
                <a href="#">Discapacidad</a>
              </li>
              <li>
                <a href="#">Editoriales</a>
              </li>
              <li>
                <a href="#">Educación</a>
              </li>
              <li>
                <a href="#">Historia</a>
              </li>
              <li>
                <a href="#">Internacionales</a>
              </li>
              <li>
                <a href="#">Jubilados</a>
              </li>
              <li>
                <a href="#">Juventud</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">SOCIEDAD Y POLÍTICA</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#">Lectura Fácil</a>
              </li>
              <li>
                <a href="#">LGBTI</a>
              </li>
              <li>
                <a href="#">Libros</a>
              </li>
              <li>
                <a href="#">Libertades democráticas</a>
              </li>
              <li>
                <a href="#">Movimiento Piquetero</a>
              </li>
              <li>
                <a href="#">Mujer</a>
              </li>
              <li>
                <a href="#">Música</a>
              </li>
              <li>
                <a href="#">Partido</a>
              </li>
              <li>
                <a href="#">Políticas</a>
              </li>
              <li>
                <a href="#">Provincias</a>
              </li>
              <li>
                <a href="#">Salud</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">MÁS CATEGORÍAS</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#">Sindicales</a>
              </li>
              <li>
                <a href="#">Sociedad</a>
              </li>
              <li>
                <a href="#">Universidad</a>
              </li>
              <li>
                <a href="#">Archivo</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">IDIOMAS</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">Française</a>
              </li>
              <li>
                <a href="#">Italiano</a>
              </li>
              <li>
                <a href="#">Português</a>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-account-col">
            <h4 className="footer-col-title">SUSCRIPCIÓN Y CUENTA</h4>
            <ul className="footer-action-list">
              <li>
                <a href="#" className="footer-action-btn">
                  <i className="ri-user-follow-line"></i> Suscribirme
                </a>
              </li>
              <li>
                <a href="#" className="footer-action-btn">
                  <i className="ri-user-settings-line"></i> Mi Cuenta
                </a>
              </li>
              <li>
                <a href="#" className="footer-action-btn">
                  <i className="ri-newspaper-line"></i> Edición Impresa
                </a>
              </li>
              <li>
                <a href="#" className="footer-action-btn">
                  <i className="ri-mail-send-line"></i> Newsletters
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copy-text">
            © 2026 Prensa Obrera. Distribuido bajo una Licencia Creative Commons
            Atribución 4.0 Internacional.
          </p>
          <ul className="footer-legal-links">
            <li>
              <a href="#">Quiénes somos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Privacidad</a>
            </li>
            <li>
              <a href="#">Mapa del sitio</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
