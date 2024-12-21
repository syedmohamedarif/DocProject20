import { useState } from 'react';
import Button from '../ui/Button';
import { db } from '../../config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const saveAppointment = async () => {
    try {
      setLoading(true);
      setSubmitStatus('idle');
      
      // Add a new document to the 'appointments' collection
      const docRef = await addDoc(collection(db, 'appointments'), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      console.log("Appointment added with ID:", docRef.id);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: '',
      });
    } catch (error) {
      console.error("Error saving appointment:", error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveAppointment();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Book an Appointment</h3>
      
      {submitStatus === 'success' && (
        <p className="mb-4 text-green-600">Appointment booked successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mb-4 text-red-600">Error booking appointment. Please try again.</p>
      )}
      
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full p-3 mb-3 border rounded-lg"
        rows={4}
      ></textarea>
      <Button type="submit" disabled={loading}>
        {loading ? 'Booking...' : 'Book Appointment'}
      </Button>
    </form>
  );
}
