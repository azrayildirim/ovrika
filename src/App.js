import { CommandLineIcon, ChatBubbleBottomCenterTextIcon, AcademicCapIcon, WrenchScrewdriverIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { FaEnvelope, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useTranslation } from "./hooks/useTranslation";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Process from "./components/Process";

function AppContent() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header
        id="hero"
        className="relative flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white text-center p-8 pt-24 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <img src="/images/ovrika-logo.jpg" alt="Ovrika Logo" className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl border-4 border-white/20" />
            <p className="text-xl md:text-2xl mb-2 text-blue-100 font-light">
              {t("heroSubtitle")}
            </p>
            <p className="text-2xl md:text-3xl font-semibold mb-8 text-white">
              {t("heroTitle")}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              {t("freeConsultation")}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              {t("exploreServices")}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">100%</div>
              <div className="text-sm text-blue-200">{t("customerSatisfaction")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">24/7</div>
              <div className="text-sm text-blue-200">{t("support")}</div>
            </div>
          </div>

        </div>
      </header>
      
      {/* Services Section */}
      <Services />

      {/* Process Section */}
      <Process />

      {/* Contact Section */}
      <section id="contact">
        <Contact
          title={t("contactTitle")}
          description={t("contactSubtitle")}
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/images/OvrikaLogo.png" alt="Ovrika" className="w-10 h-10 rounded-full" />
              <h3 className="text-2xl font-bold text-white">Ovrika</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t("companyDescription")}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@OvrikaSoftware" target="_blank" rel="noreferrer" className="bg-gray-800 p-3 rounded-xl hover:bg-red-600 transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/ovrikasoftware" target="_blank" rel="noreferrer" className="bg-gray-800 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/ovrika" target="_blank" rel="noreferrer" className="bg-gray-800 p-3 rounded-xl hover:bg-blue-700 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/ovrika" target="_blank" rel="noreferrer" className="bg-gray-800 p-3 rounded-xl hover:bg-black transition-colors">
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a href="mailto:info@ovrika.com" className="bg-gray-800 p-3 rounded-xl hover:bg-gray-600 transition-colors">
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">{t("ourServices")}</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t("softwareDevelopment")}</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t("itConsulting")}</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t("technicalTraining")}</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t("maintenanceSupport")}</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Proje Yönetimi</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">{t("quickLinks")}</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">{t("home")}</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t("services")}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t("contact")}</a></li>
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">{t("aboutUs")}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t("blog")}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">{t("contact")}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">{t("companyLocation")}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-blue-400" />
                <p className="text-gray-400">info@ovrika.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0">
              {t("copyright")}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t("privacyPolicy")}</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t("termsOfUse")}</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t("cookiePolicy")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
