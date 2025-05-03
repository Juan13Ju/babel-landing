import './navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg primary-background px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src="/logo192.png" alt="Logo" style={{ height: '32px', marginRight: '8px' }} />
          <span className="navbar-brand mb-0 h1 text-white">LangLink</span>
        </div>

        <div className="d-flex">
          <button
            className="btn btn-outline-light btn-sm me-2"
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => changeLanguage('es')}
          >
            ES
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
