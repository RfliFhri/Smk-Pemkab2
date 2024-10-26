import Logo from '../../public/Logo.png'
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <header className={`bg-transparent top-0 left-0 w-full flex items-center z-10 ${isScrolled ? 'fixed z-[999] bg-white bg-opacity-70 backdrop-blur-sm box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)' : ' absolute'}`}>
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="flex items-center">
                <img src={Logo} alt="School Logo" className="h-12 w-12 mr-3"/>
                <span className="text-xl font-bold text-blue-700">SMK PEMKAB</span>
            </div>
            <nav className="flex space-x-4">
                <a href="#" className="text-gray-700 font-['Nunito'] hover:text-blue-700">Beranda</a>
                <a href="#Aboutme" className="text-gray-700 hover:text-blue-700">Aboutme</a>
                <a href="#" className="text-gray-700 hover:text-blue-700">Beranda</a>
                <a href="#" className="text-gray-700 hover:text-blue-700">Beranda</a>
                <a href="#" className="text-gray-700 hover:text-blue-700">Beranda</a>
                <a href="#" className="text-gray-700 hover:text-blue-700">Beranda</a>
                <a href="#" className="text-gray-700 hover:text-blue-700">Beranda</a>
            </nav>
        </div>
    </header>
    
    );
}