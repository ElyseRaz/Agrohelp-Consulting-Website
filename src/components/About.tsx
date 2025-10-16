import { motion } from 'framer-motion';
import { Target, Eye, Heart, BookOpen, User } from 'lucide-react'; // Ajout de User

const About = () => {
  const values = [
    {
      icon: <Target className="text-green-600" size={32} />,
      title: "Mission",
      description: "Autonomiser les communautés rurales grâce à des solutions agricoles innovantes et des pratiques de développement durable."
    },
    {
      icon: <Eye className="text-green-600" size={32} />,
      title: "Vision",
      description: "Un monde où chaque communauté rurale prospère avec accès aux connaissances et ressources agricoles modernes."
    },
    {
      icon: <Heart className="text-green-600" size={32} />,
      title: "Valeurs",
      description: "Intégrité, durabilité, innovation et engagement à améliorer les vies grâce à l'excellence agricole."
    }
  ];

  const team = [
    {
      name: "ANDRIATSARAFARA Sandratriniaina Ramanoelina",
      role: "Responsable Administratif",
      image: "",
    },
    {
      name: "RAOELINARIVO Holy Harinoro",
      role: "Fondateur & Gérante d'Agrohelp Consulting",
      image: "/holy.jpg",
    },
    {
      name: "RANDRIAMIARANTSOA Mariniva Eliah Brinly",
      role: "Responsable Marketing et Commercial",
      image: "",
    }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-white scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre principal */}
        <motion.div
          className="text-center mb-12 flex flex-col items-center px-2 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="flex items-center justify-center mb-2 flex-wrap">
            <BookOpen className="text-green-600 mr-2" size={32} />
            <h2 className="text-2xl sm:text-4xl font-bold text-green-700 mb-0">À Propos d'Agrohelp Consulting</h2>
          </span>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Avec plus de 15 ans d'expérience, nous nous consacrons à transformer les communautés rurales 
            grâce à un conseil agricole expert et des solutions de produits premium.
          </p>
        </motion.div>

        {/* Notre Histoire + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <motion.div
            className="bg-gray-50 rounded-2xl p-4 sm:p-8 shadow-md"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Notre Histoire</h3>
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                AGROHELP CONSULTING est une entreprise pionnière dans le secteur agricole, spéciaisée dans la promotion des pratiques agroécologiques et biologiques. 
                Grâce à une expertise éprouvée et à un engangement fort en faveur du développement durable,
                nous accompagnons les agriculteurs , les entreprises et les institutions dans leur transition vers une agriculture plus respectueuse de l'environnement.
              </p>
              <p>
                Au fil des années, nous avons évolué d'une petite firme de conseil à un fournisseur complet 
                de solutions agricoles, servant plus de 1 000 agriculteurs et complétant plus 
                de 500 projets réussis à travers la région.
              </p>
              <p>
                Aujourd'hui, nous continuons d'innover et de nous adapter, en veillant à ce que nos clients aient accès 
                aux dernières technologies agricoles, pratiques durables et insights de marché 
                qui génèrent de vrais résultats.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative flex justify-center mt-6 lg:mt-0" 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img 
              src="logo.jpg" 
              alt="Notre équipe en action"
              className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm object-cover"
            />
            <motion.div
              className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-green-600 text-white p-4 sm:p-6 rounded-xl shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-lg sm:text-2xl font-bold">15+</div>
              <div className="text-xs sm:text-sm">Années d'Excellence</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Nos Valeurs */}
        <div className="bg-green-50 rounded-2xl py-8 sm:py-12 px-2 sm:px-6 mb-16 shadow-inner">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-700 text-center mb-6 sm:mb-10">Nos Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-xl shadow p-6 sm:p-8 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {value.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Équipe */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Rencontrez Notre Équipe d'Experts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center group bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="relative mb-4 sm:mb-6 flex justify-center">
                  {member.image ? (
                    <motion.img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-green-100 group-hover:scale-105 transition-transform duration-200 shadow"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  ) : (
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-100 flex items-center justify-center border-4 border-green-100 shadow">
                      <User className="text-green-600" size={48} />
                    </div>
                  )}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{member.name}</h4>
                <p className="text-green-600 font-medium mb-1 sm:mb-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;