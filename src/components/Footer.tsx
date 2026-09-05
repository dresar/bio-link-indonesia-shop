
import React from 'react';
import { MessageCircle, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <MessageCircle size={20} />,
      label: "WhatsApp",
      url: "https://wa.me/628123456789",
      color: "hover:text-green-600"
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      url: "https://instagram.com/templatestore",
      color: "hover:text-pink-600"
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      url: "mailto:info@templatestore.com",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Hubungi Kami</h3>
          <p className="text-gray-600 mb-4">
            Siap membantu Anda mendapatkan template website terbaik
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 text-gray-600 ${link.color} transition-all hover:scale-105`}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-600">
            <div>
              <p className="font-medium mb-1">📞 Customer Service</p>
              <p>Senin - Sabtu, 09:00 - 21:00 WIB</p>
            </div>
            <div>
              <p className="font-medium mb-1">⚡ Pengerjaan Cepat</p>
              <p>Template dikirim maksimal 24 jam</p>
            </div>
            <div>
              <p className="font-medium mb-1">🔒 Garansi 100%</p>
              <p>Uang kembali jika tidak sesuai</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Template Website Store. Made with ❤️ in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
