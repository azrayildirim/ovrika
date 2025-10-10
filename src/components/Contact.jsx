import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Contact({ title, description }) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adınız</label>
                  <input
                    type="text"
                    placeholder="Adınız"
                    className="w-full p-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Soyadınız</label>
                  <input
                    type="text"
                    placeholder="Soyadınız"
                    className="w-full p-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Adresiniz</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                <input
                  type="text"
                  placeholder="Proje danışmanlığı"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                <textarea
                  placeholder="Projeniz hakkında detayları paylaşın..."
                  rows="5"
                  className="w-full p-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Mesajı Gönder
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
              <div className="space-y-6">

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <FaEnvelope className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@ovrika.com</p>
                    <p className="text-gray-600">destek@ovrika.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <FaMapMarkerAlt className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Şirketimiz ANKARA Merkezlidir</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <FaClock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Çalışma Saatleri</h4>
                    <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p className="text-gray-600">Cumartesi: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors">
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-sky-500 text-white p-3 rounded-xl hover:bg-sky-600 transition-colors">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-blue-700 text-white p-3 rounded-xl hover:bg-blue-800 transition-colors">
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a href="mailto:info@ovrika.com" className="bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition-colors">
                  <FaEnvelope className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
