
import React from 'react';
import { MapPin, Users, Star, CreditCard } from 'lucide-react';

interface ProfileSectionProps {
  onPaymentClick: () => void;
}

const ProfileSection = ({ onPaymentClick }: ProfileSectionProps) => {
  return (
    <section className="text-center mb-12">
      <div className="relative inline-block mb-6">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto border-4 border-white shadow-lg"
        />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      </div>
      
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        Template Website Store
      </h2>
      <p className="text-gray-600 mb-4 max-w-md mx-auto px-4">
        🚀 Jual Template Website Premium & Modern<br/>
        ✨ Responsive, SEO Friendly, Fast Loading
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          <MapPin size={16} />
          <span>Indonesia</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users size={16} />
          <span>500+ Customers</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star size={16} className="text-yellow-500" />
          <span>4.9/5 Rating</span>
        </div>
      </div>

      <button
        onClick={onPaymentClick}
        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105 mb-8"
      >
        <CreditCard size={20} />
        <span>Cara Pembayaran</span>
      </button>
    </section>
  );
};

export default ProfileSection;
