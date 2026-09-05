
import React from 'react';
import { User, LogIn } from 'lucide-react';

interface HeaderProps {
  onAuthClick: (mode: 'login' | 'register') => void;
}

const Header = ({ onAuthClick }: HeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-4xl">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TW</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Template Website
          </h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onAuthClick('login')}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            <LogIn size={16} />
            <span className="hidden sm:inline">Masuk</span>
          </button>
          <button
            onClick={() => onAuthClick('register')}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all transform hover:scale-105"
          >
            <User size={16} />
            <span className="hidden sm:inline">Daftar</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
