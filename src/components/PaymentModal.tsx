
import React from 'react';
import { X, CreditCard, Smartphone, Building, Clock } from 'lucide-react';

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal = ({ onClose }: PaymentModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const paymentMethods = [
    {
      icon: <CreditCard size={24} />,
      title: "Transfer Bank",
      description: "BCA, Mandiri, BNI, BRI",
      details: "Transfer ke rekening resmi kami"
    },
    {
      icon: <Smartphone size={24} />,
      title: "E-Wallet",
      description: "GoPay, OVO, DANA, ShopeePay",
      details: "Pembayaran digital cepat & aman"
    },
    {
      icon: <Building size={24} />,
      title: "Virtual Account",
      description: "Alfamart, Indomaret",
      details: "Bayar di mini market terdekat"
    }
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Cara Pembayaran</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Clock size={20} className="text-blue-600" />
              <span className="font-medium text-gray-800">Proses Cepat 24 Jam</span>
            </div>
            <p className="text-gray-600 text-sm">
              Template akan dikirim maksimal 24 jam setelah pembayaran dikonfirmasi
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 mt-1">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 mb-1">{method.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                    <p className="text-xs text-gray-500">{method.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
            <h3 className="font-medium text-gray-800 mb-2">📋 Langkah Pembelian:</h3>
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. Pilih template yang diinginkan</li>
              <li>2. Klik "Beli Sekarang" untuk chat WhatsApp</li>
              <li>3. Konfirmasi pembelian dengan admin</li>
              <li>4. Lakukan pembayaran sesuai instruksi</li>
              <li>5. Kirim bukti transfer</li>
              <li>6. Template dikirim ke email Anda</li>
            </ol>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://wa.me/628123456789?text=Halo,%20saya%20ingin%20bertanya%20tentang%20cara%20pembayaran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
            >
              <Smartphone size={20} />
              <span>Chat Admin WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
