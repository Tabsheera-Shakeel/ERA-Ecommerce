"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

// Product type definition
type Product = {
    id: number;
    name: string;
    image: string;
    description: string;
    price?: string;
    specifications?: string;
    reviews?: string[];
};

type CartItem = {
    product: Product;
    quantity: number;
};

const productDetails: Product[] = [
    {
        id: 1,
        name: "Elegant Dress",
        image: "https://i.pinimg.com/474x/b2/1e/1a/b21e1a095fd715c470ad7140f247cbc2.jpg",
        description: "A stunning dress for special occasions.",
        price: "$199.99",
        specifications: "Material: Silk, Color: Red, Size: M",
        reviews: ["Beautiful dress, highly recommend!", "Perfect for a wedding."]
    },
    {
        id: 2,
        name: "Casual Shirt",
        image: "https://i.pinimg.com/736x/df/0e/2d/df0e2df13cd1dcb446ed29730c0478f0.jpg",
        description: "Perfect for everyday wear.",
        price: "$39.99",
        specifications: "Material: Cotton, Color: Blue, Size: L",
        reviews: ["Comfortable and stylish.", "Great for casual outings."]
    },
    {
        id: 3,
        name: "Stylish Jacket",
        image: "https://i.pinimg.com/474x/64/a7/90/64a790c64e73c164b4735f7aefd33be3.jpg",
        description: "Stay warm and trendy.",
        price: "$149.99",
        specifications: "Material: Leather, Color: Black, Size: XL",
        reviews: ["Fits well, looks great.", "Stylish and warm."]
    },
    {
        id: 4,
        name: "Chic Pants",
        image: "https://i.pinimg.com/564x/32/16/8c/32168c3effddb0c7854781477f4a70d3.jpg",
        description: "Comfort meets style.",
        price: "$59.99",
        specifications: "Material: Denim, Color: Grey, Size: S",
        reviews: ["Very comfortable.", "Fits perfectly."]
    },
    {
        id: 5,
        name: "Trendy Skirt",
        image: "https://i.pinimg.com/474x/f1/03/07/f10307d3b60262d6a5b12d1d8c40a3e1.jpg",
        description: "A versatile skirt for any occasion.",
        price: "$49.99",
        specifications: "Material: Wool, Color: Navy, Size: M",
        reviews: ["Lovely skirt.", "Very stylish and comfortable."]
    },
    {
        id: 6,
        name: "Classic T-Shirt",
        image: "https://i.pinimg.com/736x/fe/f3/2e/fef32e640e39ff393cd45096eebf9ed8.jpg",
        description: "Essential for every wardrobe.",
        price: "$19.99",
        specifications: "Material: Cotton, Color: White, Size: L",
        reviews: ["Soft and comfortable.", "Great basic shirt."]
    },
    {
        id: 7,
        name: "Fashionable Blazer",
        image: "https://i.pinimg.com/564x/8d/2c/21/8d2c2156d0a5d6146684f147306a6cf6.jpg",
        description: "Elevate your look with this blazer.",
        price: "$199.99",
        specifications: "Material: Wool, Color: Black, Size: M",
        reviews: ["Great quality blazer.", "Fits like a glove."]
    },
    {
        id: 8,
        name: "Comfortable Sweatpants",
        image: "https://i.pinimg.com/236x/7e/be/08/7ebe08d38d47dabd10ce31aaa87e4637.jpg",
        description: "Perfect for lounging or workouts.",
        price: "$39.99",
        specifications: "Material: Polyester, Color: Grey, Size: L",
        reviews: ["Very comfortable.", "Perfect for lazy days."]
    },
];

function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const { id } = params;
        if (id) {
            // Ensure `id` is a string before passing to `parseInt()`
            const productId = Array.isArray(id) ? id[0] : id;
            const selectedProduct = productDetails.find((item) => item.id === parseInt(productId));
            setProduct(selectedProduct || null);
        }
    }, [params]);

    // Add product to the cart
    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex((item) => item.product.id === product.id);
            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += 1;
                return updatedCart;
            }
            return [...prevCart, { product, quantity: 1 }];
        });
    };

    // Remove product from the cart
    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
    };

    // Increase the quantity of a product in the cart
    const increaseQuantity = (productId: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.product.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease the quantity of a product in the cart
    const decreaseQuantity = (productId: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.product.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    if (!product) return <p>{`Loading...`}</p>;

    return (
        <div>
            {/* Product details */}
            <section className="bg-white text-black p-10">
                <div className="flex flex-col lg:flex-row items-center text-center lg:text-left space-y-8 lg:space-y-0">
                    <div className="lg:w-1/2 flex justify-center">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0 space-y-6">
                        <h2 className="text-3xl font-bold text-black">{product.name}</h2>
                        <p className="text-lg text-gray-700">{product.description}</p>
                        {product.price && <p className="text-xl text-yellow-500 font-semibold">{product.price}</p>}
                        {product.specifications && (
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">{`Specifications:`}</h3>
                                <p className="text-gray-700">{product.specifications}</p>
                            </div>
                        )}
                        {product.reviews && product.reviews.length > 0 && (
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">{`Reviews:`}</h3>
                                <ul className="text-gray-700 space-y-1">
                                    {product.reviews.map((review, index) => (
                                        <li key={index}>{`"${review}"`}</li> 
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div>
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-yellow-500 text-white py-3 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300 text-lg"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cart button */}
            <div className="fixed bottom-6 right-6 bg-yellow-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-yellow-600 transition-colors duration-300">
                <button
                    onClick={() => setIsCartOpen((prev) => !prev)}
                    className="flex items-center space-x-2 text-lg"
                >
                    <FiShoppingCart size={24} />
                    <span>Cart ({cart.length})</span>
                </button>
            </div>

            {/* Cart Modal */}
            {isCartOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                        <ul className="space-y-4">
                            {cart.map((item) => (
                                <li key={item.product.id} className="flex justify-between items-center">
                                    <span>{item.product.name}</span>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => decreaseQuantity(item.product.id)}
                                            className="bg-gray-200 px-2 py-1 rounded-full"
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => increaseQuantity(item.product.id)}
                                            className="bg-gray-200 px-2 py-1 rounded-full"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.product.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;
