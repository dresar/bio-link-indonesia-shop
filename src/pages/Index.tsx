
import React, { useState } from 'react';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import ProductGrid from '../components/ProductGrid';
import ProductModal from '../components/ProductModal';
import PaymentModal from '../components/PaymentModal';
import AuthModal from '../components/AuthModal';
import Footer from '../components/Footer';
import { Product } from '../types/Product';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header onAuthClick={handleAuthClick} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <ProfileSection onPaymentClick={() => setShowPaymentModal(true)} />
        <ProductGrid onProductClick={handleProductClick} />
      </main>

      <Footer />

      {/* Modals */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseProductModal} 
        />
      )}
      
      {showPaymentModal && (
        <PaymentModal onClose={() => setShowPaymentModal(false)} />
      )}
      
      {showAuthModal && (
        <AuthModal 
          mode={authMode}
          onClose={() => setShowAuthModal(false)} 
        />
      )}
    </div>
  );
};

export default Index;
