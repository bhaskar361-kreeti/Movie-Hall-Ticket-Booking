import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate()

  const handlePayment = (e) => {
    e.preventDefault();
    // 🚨 This is just dummy
    alert("Payment Successful 💳✅");
    navigate('./ticket')
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br">
      <form
        onSubmit={handlePayment}
        className="w-96 bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl space-y-6 border border-gray-700"
      >
        <h2 className="text-2xl font-bold text-center text-white">Payment Portal</h2>
        <p className="text-gray-400 text-center text-sm">Secure checkout 🔒</p>

        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-300">Name on Card</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                       border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-300">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength={16}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                       border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex flex-col w-1/2 space-y-2">
            <label className="text-sm text-gray-300">Expiry</label>
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              maxLength={5}
              className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col w-1/2 space-y-2">
            <label className="text-sm text-gray-300">CVV</label>
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              maxLength={3}
              className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                         border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                     hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;