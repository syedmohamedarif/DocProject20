import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="mt-1">
            <MapPin className="w-6 h-6 text-blue-900" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Address</h4>
            <p className="text-gray-600">
              Spire Wellesley Hospital<br />
              Eastern Avenue<br />
              Southend-on-Sea SS2 4XH
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="mt-1">
            <Phone className="w-6 h-6 text-blue-900" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Phone</h4>
            <p className="text-gray-600">01245 400993</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="mt-1">
            <Mail className="w-6 h-6 text-blue-900" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Email</h4>
            <p className="text-gray-600">privatemedicalsecretary@btconnect.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="mt-1">
            <Clock className="w-6 h-6 text-blue-900" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Medical Secretary</h4>
            <p className="text-gray-600">Lynne Richards</p>
          </div>
        </div>
      </div>
    </div>
  );
}