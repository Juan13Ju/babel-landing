import { useTranslation } from "react-i18next";
import { useState } from "react";
import { uploadEmail } from "../../api/signUpUser";

const CTASection = () => {

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    const email = e.target.value;
    console.log(email);
    setEmail(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !email.includes('@')) {
      alert("Please enter a valid email address.");
      return;
    }
  
    const success = await uploadEmail(email);
  
    if (success) {
      alert("🎉 You're on the waitlist!");
      setEmail(""); // reset form
    } else {
      alert("❌ Something went wrong. Please try again later.");
    }
  };
  
  
  const { t } = useTranslation();
    return (
      <section className="bg-white py-20 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('CTA.title')}
          </h2>
          <p className="text-gray-600 text-base mb-6">
            {t('CTA.subtitle-1')}
            <br />
            {t('CTA.subtitle-2')}
          </p>
  
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white font-medium px-6 py-2 rounded-md hover:bg-indigo-600 transition"
            >
              {t('CTAButton')}
            </button>
          </form>
  
          <p className="text-sm text-gray-400 mb-6">{t('CTA.button-subtitle')}</p>
  
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-500 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-500 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-500 transition">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTASection;
  