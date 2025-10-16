import { motion } from 'framer-motion';
import { Package, Truck, Award, CheckCircle, ShoppingBag } from 'lucide-react'; // Ajout de ShoppingBag

const Products = () => {
  const productCategories = [
    {
      title: "Semences & Engrais",
      image: "engrais.jpg",
      description: "Semences de haute qualité et engrais biologiques pour une croissance optimale des cultures",
      features: ["Certifié biologique", "Taux de germination élevé", "Résistant aux maladies"]
    },
    {
      title: "Alimentation du Bétail",
      image: "alimentation.jpg",
      description: "Solutions d'alimentation équilibrée nutritionnellement pour tous types de bétail",
      features: ["Nutrition équilibrée", "Favorise la croissance", "Économique"]
    },
    {
      title: "Équipement Agricole",
      image: "equipements.jpg",
      description: "Machines agricoles modernes et outils pour une agriculture efficace",
      features: ["Technologie de pointe", "Design durable", "Maintenance facile"]
    },
    {
      title: "Fournitures Vétérinaires",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      description: "Gamme complète de médicaments vétérinaires et produits de santé",
      features: ["Approuvé FDA", "Recommandé par experts", "Action rapide"]
    }
  ];

  return (
    <motion.section
      id="products"
      className="py-10 sm:py-16 md:py-20 bg-gray-50 scroll-mt-20"
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
            <ShoppingBag className="text-green-600 mr-2" size={28} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-0">Nos Produits</h2>
          </span>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            Produits agricoles et d'élevage premium provenant de fournisseurs de confiance dans le monde entier
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
                <motion.img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-2 sm:mb-4">{category.description}</p>
                <ul className="space-y-1 sm:space-y-2 mt-auto">
                  {category.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{ duration: 0.4, delay: 0.05 * idx }}
                    >
                      <CheckCircle className="text-green-600 mr-2" size={16} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-green-600 rounded-2xl p-4 sm:p-8 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            {[{
              icon: <Package className="mx-auto mb-2 sm:mb-4" size={36} />,
              title: 'Qualité Assurée',
              desc: 'Tous les produits subissent des tests de qualité rigoureux'
            }, {
              icon: <Truck className="mx-auto mb-2 sm:mb-4" size={36} />,
              title: 'Livraison Rapide',
              desc: 'Livraison nationale sous 48 heures'
            }, {
              icon: <Award className="mx-auto mb-2 sm:mb-4" size={36} />,
              title: 'Support Expert',
              desc: 'Support technique 24/7 de nos experts'
            }].map((item, idx) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-green-100 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Products;