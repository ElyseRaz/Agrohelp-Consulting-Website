import { motion } from 'framer-motion';
import { ArrowRight, Sprout, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-[60vh] sm:min-h-screen flex items-start sm:items-center bg-gradient-to-br from-green-50 to-emerald-100 scroll-mt-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="space-y-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Soutenir 
                <span className="text-green-600 block">le développement du monde rural</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Conseil expert et produits agricoles premium pour un développement rural durable. 
                Autonomiser les agriculteurs et éleveurs avec des solutions innovantes.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center sm:justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.button
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Commencer
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </motion.button>
              <motion.button
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                En Savoir Plus
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pt-8 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {[{
                icon: <Sprout className="text-green-600" size={24} />,
                value: '30+',
                label: 'Formation Réalisés'
              }, {
                icon: <Users className="text-green-600" size={24} />,
                value: '50+',
                label: 'Associations Bénéficiaires'
              }, {
                icon: <TrendingUp className="text-green-600" size={24} />,
                value: '15+',
                label: "Années d'Expérience"
              }].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
            >
              <img 
                src="/public/slogan.png" 
                alt="Agricultural consulting" 
                className="w-full h-52 sm:h-64 md:h-80 object-cover rounded-lg"
              />
              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Conseil Professionnel</h3>
                <p className="text-gray-600 text-sm sm:text-base">Solutions sur mesure pour vos besoins agricoles</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;