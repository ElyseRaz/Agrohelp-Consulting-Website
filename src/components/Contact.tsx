import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Téléphone",
      details: ["+261 32 38 067 07", "+261 38 17 363 42"]
    },
    {
      icon: <Mail className="text-green-600" size={24} />,
      title: "Email",
      details: ["agrohelpconsulting@gmail.com"]
    },
    {
      icon: <MapPin className="text-green-600" size={24} />,
      title: "Adresse",
      details: ["Tsiadana", "101 Antananarivo", "Madagascar"]
    },
    {
      icon: <Clock className="text-green-600" size={24} />,
      title: "Heures d'Ouverture",
      details: ["Lundi - Vendredi: 8h00 - 16h00", "Samedi: 9h00 - 16h00", "Dimanche: Fermé"]
    }
  ];

  return (
    <motion.section
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-gray-50 scroll-mt-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="flex items-center justify-center mb-2">
            <Phone className="text-green-600 mr-2" size={28} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-0">Contactez-Nous</h2>
          </span>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            Prêt à transformer vos opérations agricoles ? Contactez nos experts aujourd'hui pour des solutions personnalisées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <motion.div className="bg-green-100 p-3 rounded-lg" whileHover={{ scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }}>
                      {info.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-green-600 rounded-xl p-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold mb-4">Pourquoi Choisir Agrohelp ?</h3>
              <ul className="space-y-3">
                {[
                  "15+ années d'expérience dans l'industrie",
                  'Historique prouvé avec 30+ projets réussis',
                  "Équipe d'experts spécialistes agricoles",
                  'Support client et consultation 24/7'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-green-300 before:rounded-full before:mr-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: 0.4, delay: 0.05 * idx }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Envoyez-nous un Message</h3>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+261 xx xx xxx xx"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="consulting">Conseil Agricole</option>
                    <option value="products">Demande de Produits</option>
                    <option value="livestock">Développement de l'Élevage</option>
                    <option value="general">Informations Générales</option>
                  </select>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.7 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Parlez-nous de votre projet ou demande..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center group text-base sm:text-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Envoyer le Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;