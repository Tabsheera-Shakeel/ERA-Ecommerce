"use client";  

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function ThankYou() {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [price, setPrice] = useState<string | undefined>(undefined);

  useEffect(() => {
    const usernameParam = searchParams.get('username');
    const priceParam = searchParams.get('price');

    if (usernameParam && priceParam) {
      setUsername(usernameParam);
      setPrice(priceParam);
    }
  }, [searchParams]);

  if (!username || !price) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-10">
      {/* Brand Logo */}
      <div className="mb-8">
        <Image
          src="/image/brand-logo.jpg" 
          alt="Brand Logo"
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>

 
      <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
        {/* Thank You Message */}
        <h2 className="text-4xl font-semibold mb-6">Thank You for Your Order!</h2>
        
      
        <p className="text-xl mb-4">
          Dear <span className="font-bold text-yellow-400">{username}</span>,
        </p>
        <p className="text-lg mb-6">
          {`Your order has been placed successfully! We appreciate your business and are excited to process your order.`}
        </p>

       
        <p className="text-2xl font-semibold text-yellow-400 mb-8">
          Total Price: <span className="text-black">${price}</span>
        </p>

        <p className="mt-6 text-lg font-light">
          {`Thank you for shopping with us! We hope you enjoy your purchase.`}
        </p>

        <div className="mt-10">
          <button
            className="bg-yellow-400 text-black py-3 px-8 rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
            onClick={() => window.location.href = '/'}>
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
}

const ThankYouPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYou />
    </Suspense>
  );
};

export default ThankYouPage;
