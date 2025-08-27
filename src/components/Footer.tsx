    import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Conseil Agricole', href: '#services' },
      { name: 'Développement de l\'Élevage', href: '#services' },
      { name: 'Analyse de Marché', href: '#services' },
      { name: 'Développement Rural', href: '#services' }
    ],
    products: [
      { name: 'Semences & Engrais', href: '#products' },
      { name: 'Alimentation du Bétail', href: '#products' },
      { name: 'Équipement Agricole', href: '#products' },
      { name: 'Fournitures Vétérinaires', href: '#products' }
    ],
    company: [
      { name: 'À Propos', href: '#about' },
      { name: 'Notre Équipe', href: '#about' },
      { name: 'Carrières', href: '#' },
      { name: 'Actualités', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/public/logo.jpg" 
                alt="Agrohelp Consulting Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Agrohelp Consulting</h3>
                <p className="text-sm text-gray-400">Solutions de Développement Rural</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Autonomiser les communautés rurales grâce à un conseil agricole expert et des solutions de produits premium depuis plus de 15 ans.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Produits</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informations de Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-green-400 mt-1" size={18} />
                <div className="text-gray-400">
                  <p>123 Voie Agricole</p>
                  <p>Centre de Développement Rural</p>
                  <p>Farmville, ST 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-400" size={18} />
                <div className="text-gray-400">
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-green-400" size={18} />
                <div className="text-gray-400">
                  <p>info@agrohelp.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Agrohelp Consulting. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Politique des Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;