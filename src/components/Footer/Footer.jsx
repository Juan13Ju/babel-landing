import { useTranslation } from "react-i18next";

const Footer = () => {

    const {t} = useTranslation();
    return (
      <footer className="bg-gray-100 border-t border-gray-200 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <p className="text-gray-600 text-sm">
            {t('Footer.main')}
          </p>
          <a
            href="https://discord.gg/your-invite-code" // replace with actual invite
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 mr-2"
            >
              <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.078.037c-.211.375-.444.864-.608 1.249a18.568 18.568 0 00-5.545 0 12.244 12.244 0 00-.617-1.249.077.077 0 00-.078-.037A19.736 19.736 0 003.685 4.369a.07.07 0 00-.032.027C.533 9.1-.32 13.723.099 18.283a.082.082 0 00.031.054c2.073 1.523 4.084 2.448 6.026 3.056a.078.078 0 00.084-.027c.464-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.105c-.652-.247-1.273-.558-1.872-.925a.077.077 0 01-.008-.127c.126-.094.252-.19.37-.287a.074.074 0 01.077-.01c3.927 1.79 8.18 1.79 12.061 0a.074.074 0 01.078.009c.118.097.243.193.37.288a.077.077 0 01-.006.127 11.858 11.858 0 01-1.873.924.076.076 0 00-.04.106c.36.698.77 1.363 1.225 1.993a.077.077 0 00.084.028c1.944-.609 3.955-1.533 6.03-3.056a.076.076 0 00.03-.054c.5-5.177-.838-9.747-3.284-13.887a.061.061 0 00-.031-.027zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.419 0 1.333-.955 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.419 0 1.333-.947 2.418-2.157 2.418z" />
            </svg>
            {t('Footer.button')}
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  