import { useLanguage } from '../contexts/LanguageContext';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
      title={language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}
    >
      <GlobeAltIcon className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === 'tr' ? 'EN' : 'TR'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
