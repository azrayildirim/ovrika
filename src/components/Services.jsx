import { CommandLineIcon, ChatBubbleBottomCenterTextIcon, AcademicCapIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import { useTranslation } from '../hooks/useTranslation';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: CommandLineIcon,
      title: t("softwareDevelopment"),
      description: t("softwareDevelopmentDesc"),
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: t("itConsulting"),
      description: t("itConsultingDesc"),
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: AcademicCapIcon,
      title: t("technicalTraining"),
      description: t("technicalTrainingDesc"),
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: t("maintenanceSupport"),
      description: t("maintenanceSupportDesc"),
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {t("servicesTitle")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("servicesSubtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${service.bgColor} border ${service.borderColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
