
import React from 'react';
import { Product } from '../types/Product';
import { X, ExternalLink, ShoppingCart, Eye } from 'lucide-react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
            <span className="font-bold text-blue-600 text-lg">{product.price}</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Fitur Unggulan:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={product.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all"
              >
                <Eye size={20} />
                <span>Lihat Demo</span>
              </a>
              <a
                href={product.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
              >
                <ShoppingCart size={20} />
                <span>Beli Sekarang</span>
              </a>
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 text-center">
                💬 <strong>Butuh bantuan?</strong> Hubungi kami via WhatsApp untuk konsultasi gratis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
