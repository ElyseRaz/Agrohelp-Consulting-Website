import { Menu, X, Home,  Briefcase, ShoppingBag, Phone, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react'

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentHash, setCurrentHash] = useState(
        typeof window !== "undefined" ? window.location.hash : ""
    );

    useEffect(() => {
        const onHashChange = () => setCurrentHash(window.location.hash);
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    const navigation = [
        { name: 'Accueil', href: '#home', icon: <Home size={18} className="inline mr-2" /> },
        { name: 'A propos', href: '#about', icon: <BookOpen size={18} className="inline mr-2" /> },
        { name: 'Nos services', href: '#services', icon: <Briefcase size={18} className="inline mr-2" /> },
        { name: 'Nos produits', href: '#products', icon: <ShoppingBag size={18} className="inline mr-2" /> },
        { name: 'Contact', href: '#contact', icon: <Phone size={18} className="inline mr-2" /> },
    ]
    useEffect(() => {
        const handleScroll = () => {
            const offsets = navigation.map(item => {
                const section = document.getElementById(item.href.replace('#', ''));
                if (!section) return { href: item.href, top: Infinity };
                const rect = section.getBoundingClientRect();
                return { href: item.href, top: Math.abs(rect.top) };
            });
            // Trouve la section la plus proche du haut de la page
            const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
            setCurrentHash(closest.href);
        };

        window.addEventListener("scroll", handleScroll);
        // Appel initial pour le cas où la page n'est pas tout en haut
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [navigation]);
    return (
        <>
            <header className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center py-4'>
                        {/*Logo */}
                        <div className='flex items-center space-x-3'>
                            <img src="/public/logo.jpg"
                                alt="Agrohelp Consulting Logo"
                                className="h-15 w-15 object-contain" />
                            <div>
                                <h1 className="text-xl font-bold text-green-800">Agrohelp Consulting</h1>
                                <p className="text-sm text-green-600">Solutions de Développement Rural</p>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <nav className='custom-md:hidden space-x-6'>
                            {navigation.map((item) => {
                                const isActive = currentHash === item.href;
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`text-gray-700 hover:text-green-600 transition duration-300 font-medium flex items-center px-3 py-2 rounded 
                                            hover:bg-green-100
                                            ${isActive ? 'bg-green-200 text-green-800 font-bold' : ''}
                                        `}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </a>
                                )
                            })}
                        </nav>
                        {/* Mobile menu button */}
                        <button
                            className="custom-md:flex p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="custom-md:flex py-4 border-t border-gray-200">
                            <nav className="flex flex-col space-y-4">
                                {navigation.map((item) => {
                                    const isActive = currentHash === item.href;
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={`text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 flex items-center px-3 py-2 rounded
                                              hover:bg-green-100
                                              ${isActive ? 'bg-green-200 text-green-800 font-bold' : ''}
                                            `}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </a>
                                    )
                                })}
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header