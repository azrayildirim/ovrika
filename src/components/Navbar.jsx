import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "../hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const LINKS = [
    { id: "hero", label: t("home") },
    { id: "features", label: t("services") },
  ];

  const handleLink = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleLink("hero"); }} className="flex items-center gap-3 group">
            <img src="/images/OvrikaLogo.png" alt="Ovrika" className="w-12 h-12 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300" />
            <div>
              <span className="font-bold text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">Ovrika</span>
              <p className="text-xs text-gray-500 -mt-1">Software Solutions</p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-4">
            {LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => handleLink(link.id)}
                className="inline-flex items-center px-5 py-2 rounded-full border border-gray-200 bg-white text-gray-700 font-medium shadow-sm hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
            <LanguageSwitcher />
            <button 
              onClick={() => handleLink("contact")}
              className="ml-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t("contact")}
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setOpen(!open)} 
              className="relative p-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {LINKS.map(link => (
              <button key={link.id} onClick={() => handleLink(link.id)} className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-xl transition-colors duration-300 font-medium text-gray-700 hover:text-blue-600">
                {link.label}
              </button>
            ))}
            <div className="flex space-x-2">
              <LanguageSwitcher />
              <button 
                onClick={() => handleLink("contact")}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                {t("contactButton")}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
