
import React from 'react';
import { Product } from '../types/Product';
import { ExternalLink, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
          <span className="text-sm font-bold text-blue-600">{product.price}</span>
        </div>
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs">
          {product.category}
        </div>
      </div>
      
      <div className="p-4" onClick={onClick}>
        <h4 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
          {product.title}
        </h4>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className="text-sm text-gray-600">4.8</span>
          </div>
          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
            <span>Lihat Detail</span>
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
