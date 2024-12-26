"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

// Define the type for clothing items
interface ClothingItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

function ClothesSection() {
  const [cart, setCart] = useState<ClothingItem[]>([]);

  const clothes: ClothingItem[] = [
    { id: 1, name: "Elegant Dress", image: "https://i.pinimg.com/474x/b2/1e/1a/b21e1a095fd715c470ad7140f247cbc2.jpg", description: "A stunning dress for special occasions.", price: 50 },
    { id: 2, name: "Casual Shirt", image: "https://i.pinimg.com/736x/df/0e/2d/df0e2df13cd1dcb446ed29730c0478f0.jpg", description: "Perfect for everyday wear.", price: 25 },
    { id: 3, name: "Stylish Jacket", image: "https://i.pinimg.com/474x/64/a7/90/64a790c64e73c164b4735f7aefd33be3.jpg", description: "Stay warm and trendy.", price: 100 },
    { id: 4, name: "Chic Pants", image: "https://i.pinimg.com/564x/32/16/8c/32168c3effddb0c7854781477f4a70d3.jpg", description: "Comfort meets style.", price: 60 },
    { id: 5, name: "Trendy Skirt", image: "https://i.pinimg.com/474x/f1/03/07/f10307d3b60262d6a5b12d1d8c40a3e1.jpg", description: "A versatile skirt for any occasion.", price: 40 },
    { id: 6, name: "Classic T-Shirt", image: "https://i.pinimg.com/736x/fe/f3/2e/fef32e640e39ff393cd45096eebf9ed8.jpg", description: "Essential for every wardrobe.", price: 20 },
    { id: 7, name: "Fashionable Blazer", image: "https://i.pinimg.com/564x/8d/2c/21/8d2c2156d0a5d6146684f147306a6cf6.jpg", description: "Elevate your look with this blazer.", price: 120 },
    { id: 8, name: "Comfortable Sweatpants", image: "https://i.pinimg.com/236x/7e/be/08/7ebe08d38d47dabd10ce31aaa87e4637.jpg", description: "Perfect for lounging or workouts.", price: 35 },
  ];

  const handleAddToCart = (item: ClothingItem) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <section id="Clothes" className="bg-white text-black p-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">Our Collection</h2>
        <p className="text-center mb-8">
          {`Explore our curated selection of clothing that blends style and comfort.`}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clothes.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-700">{item.description}</p>
                <div className="mt-4">
                  <Link href={`/product/${item.id}`}>
                    <button className="bg-yellow-400 text-white py-2 px-4 rounded">
                      View Detail
                    </button>
                  </Link>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-white text-black border-2 border-black py-2 px-4 rounded ml-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/cart">
          <button className="mt-6 bg-black flex text-white py-4 px-10 rounded">
            <FiShoppingCart size={24} color="yellow" />
            View Cart ({cart.length})
          </button>
        </Link>
        <p className="text-center mt-4 text-xl font-semibold">{`Total: `}${totalPrice}</p>
      </section>
    </>
  );
}

export default ClothesSection;
