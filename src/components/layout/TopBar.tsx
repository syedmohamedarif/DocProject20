import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import Container from '../ui/Container';
import { CONTACT_INFO } from '../../utils/constants';

export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white py-2">
      <Container>
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="shrink-0" />
              <span className="text-sm lg:text-base">{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="shrink-0" />
              <span className="text-sm lg:text-base">{CONTACT_INFO.hours}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="shrink-0" />
            <span className="text-sm lg:text-base">{CONTACT_INFO.address}</span>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-1 text-xs sm:text-sm">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} className="shrink-0" />
              <span>{CONTACT_INFO.hours}</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}