import { FaLightbulb, FaCode, FaRocket, FaCogs, FaCheckCircle, FaHandshake } from "react-icons/fa";

export default function Process() {
  const processSteps = [
    {
      step: 1,
      title: "Keşif & Analiz",
      icon: FaLightbulb,
      description: "İhtiyaçlarınızı analiz ediyor, proje hedeflerini belirliyoruz",
      duration: "1-2 Hafta",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      step: 2,
      title: "Tasarım & Planlama",
      icon: FaCode,
      description: "Kullanıcı deneyimini ön planda tutarak detaylı tasarım oluşturuyoruz",
      duration: "2-3 Hafta",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      step: 3,
      title: "Geliştirme",
      icon: FaCogs,
      description: "Agile metodoloji ile düzenli güncellemelerle projenizi geliştiriyoruz",
      duration: "4-12 Hafta",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      step: 4,
      title: "Test & Optimizasyon",
      icon: FaCheckCircle,
      description: "Kapsamlı testler yaparak performansı optimize ediyoruz",
      duration: "1-2 Hafta",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200"
    },
    {
      step: 5,
      title: "Lansman & Destek",
      icon: FaRocket,
      description: "Projenizi canlıya alıyor ve sürekli destek sağlıyoruz",
      duration: "Sürekli",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200"
    },
    {
      step: 6,
      title: "İşbirliği",
      icon: FaHandshake,
      description: "Uzun vadeli işbirliği ile sürekli gelişimi destekliyoruz",
      duration: "Uzun Vadeli",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Çalışma Sürecimiz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projelerinizi adım adım başarıya taşıyan metodolojimiz
          </p>
        </div>

        {/* Compact Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
              <img src="/images/ovrika-logo.jpg" alt="Ovrika" className="w-20 h-20 rounded-full object-cover" />
            </div>
          </div>

          {/* Steps Container with Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 rounded-full z-0"></div>

            {/* Steps */}
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-6' : 'lg:pl-6'}`}>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 relative z-10">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 ${step.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          
                          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                            {step.description}
                          </p>
                          
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {step.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className={`w-10 h-10 ${step.iconBg} rounded-full flex items-center justify-center ${step.iconColor} font-bold text-sm shadow-md`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Projenizi Birlikte Başlatalım
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ücretsiz danışmanlık alarak projenizi hayata geçirelim
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Ücretsiz Danışmanlık Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
