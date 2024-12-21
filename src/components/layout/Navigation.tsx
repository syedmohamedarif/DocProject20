import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import MobileMenu from '../ui/MobileMenu';
import { NAV_LINKS } from '../../utils/constants';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScheduleClick = () => {
    const element = document.getElementById('book-appointment');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <Container>
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-900">Dr. Abdul Syed</div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="text-gray-600 hover:text-blue-900"
                >
                  {link.label}
                </a>
              ))}
              <Button onClick={handleScheduleClick}>Schedule Consultation</Button>
            </div>
          </div>
        </Container>
      </nav>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        onScheduleClick={handleScheduleClick}
      />
    </>
  );
}