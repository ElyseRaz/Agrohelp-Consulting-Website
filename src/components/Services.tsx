import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, BarChart3, Shield, Lightbulb, Globe, Briefcase } from 'lucide-react'; // Ajout de Briefcase

const Services = () => {
  const services = [
    {
      icon: <Leaf className="text-green-600" size={32} />,
      title: "Conseil Agricole",
      description: "Conseils d'experts sur la gestion des cultures, la santé des sols et les pratiques agricoles durables pour maximiser votre productivité agricole."
    },
    {
      icon: <Users className="text-green-600" size={32} />,
      title: "Développement de l'Élevage",
      description: "Solutions complètes de gestion du bétail incluant programmes de reproduction, planification nutritionnelle et systèmes de gestion sanitaire."
    },
    {
      icon: <BarChart3 className="text-green-600" size={32} />,
      title: "Analyse de Marché",
      description: "Recherche et analyse de marché approfondies pour vous aider à prendre des décisions éclairées sur la sélection des cultures et les investissements en élevage."
    },
    {
      icon: <Shield className="text-green-600" size={32} />,
      title: "Gestion des Risques",
      description: "Développer des stratégies pour atténuer les risques agricoles incluant météo, parasites, maladies et fluctuations du marché."
    },
    {
      icon: <Lightbulb className="text-green-600" size={32} />,
      title: "Solutions d'Innovation",
      description: "Mise en œuvre de technologies agricoles modernes et techniques d'agriculture innovantes pour une efficacité améliorée."
    },
    {
      icon: <Globe className="text-green-600" size={32} />,
      title: "Développement Rural",
      description: "Programmes complets de développement rural axés sur l'autonomisation communautaire et la croissance économique durable."
    }
  ];

  return (
    <motion.section
      id="services"
      className="py-12 sm:py-16 md:py-20 bg-white scroll-mt-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="flex items-center justify-center mb-2">
            <Briefcase className="text-green-600 mr-2" size={32} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-0">Nos Services</h2>
          </span>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            Solutions complètes pour le développement agricole et l'autonomisation des communautés rurales
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-200"
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;