"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Define a type for the cart item
interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

function Cart() {
  // Use the CartItem type for the state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const router = useRouter();

  const handlePlaceOrder = () => {
    router.push(`/thank-you?username=${username}&price=${totalPrice}`);
  };

  return (
    <section className="min-h-screen bg-black text-white p-10 flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-8 text-yellow-400">Your Cart</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {cart.length === 0 ? (
          <p className="text-center col-span-3 text-xl">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="border-2 border-yellow-400 rounded-lg overflow-hidden shadow-lg p-4 bg-white text-black"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={item.image} 
                  alt={item.name}
                  width={100} 
                  height={100}
                  className="rounded-lg object-cover mr-4"
                />
                <h3 className="font-semibold text-xl">{item.name}</h3>
              </div>

              <p className="text-gray-700 mb-4">{item.description}</p>

              <p className="font-bold text-yellow-400 text-lg">${item.price}</p>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="mt-8 flex flex-col items-center w-full max-w-md">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="border-2 border-yellow-400 p-3 rounded-lg mb-4 w-full text-black"
          />
          <button
            onClick={handlePlaceOrder}
            className="bg-yellow-400 text-black py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Place Order
          </button>
        </div>
      )}

      {/* Total Price */}
      {cart.length > 0 && (
        <div className="mt-6 text-2xl font-bold text-yellow-400">
          <p>{`Total Price: $`}{totalPrice}</p>
        </div>
      )}
    </section>
  );
}

export default Cart;
