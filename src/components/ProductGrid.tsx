
import React from 'react';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

const ProductGrid = ({ onProductClick }: ProductGridProps) => {
  const products: Product[] = [
    {
      id: 1,
      title: "Template E-Commerce Modern",
      description: "Template toko online lengkap dengan sistem pembayaran dan admin panel",
      price: "Rp 299.000",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      features: ["Responsive Design", "Admin Panel", "Payment Gateway", "SEO Optimized"],
      demoLink: "https://demo.ecommerce.com",
      buyLink: "https://wa.me/628123456789?text=Saya%20ingin%20membeli%20Template%20E-Commerce",
      category: "E-Commerce"
    },
    {
      id: 2,
      title: "Template Landing Page Bisnis",
      description: "Landing page profesional untuk bisnis dan perusahaan",
      price: "Rp 199.000",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      features: ["Modern Design", "Contact Forms", "Gallery", "Fast Loading"],
      demoLink: "https://demo.business.com",
      buyLink: "https://wa.me/628123456789?text=Saya%20ingin%20membeli%20Template%20Landing%20Page",
      category: "Landing Page"
    },
    {
      id: 3,
      title: "Template Portfolio Kreatif",
      description: "Showcase karya dan portfolio dengan design yang menarik",
      price: "Rp 149.000",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      features: ["Creative Layout", "Portfolio Gallery", "Animation Effects", "Mobile First"],
      demoLink: "https://demo.portfolio.com",
      buyLink: "https://wa.me/628123456789?text=Saya%20ingin%20membeli%20Template%20Portfolio",
      category: "Portfolio"
    },
    {
      id: 4,
      title: "Template Restaurant & Cafe",
      description: "Website untuk restaurant dan cafe dengan menu online",
      price: "Rp 249.000",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      features: ["Menu Management", "Online Reservation", "Location Map", "Review System"],
      demoLink: "https://demo.restaurant.com",
      buyLink: "https://wa.me/628123456789?text=Saya%20ingin%20membeli%20Template%20Restaurant",
      category: "Restaurant"
    }
  ];

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Template Premium Tersedia
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
