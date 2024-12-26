"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link"; 

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsQuoteVisible(true);
    }, 50); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Header Section with Background Image */}
      <div
        className="w-full min-h-[70vh] md:min-h-[80vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="flex justify-center items-center h-full flex-col text-center z-10 relative">
          <h1
            className={`text-white font-bold transition-opacity mt-52 duration-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Discover the <span className="text-yellow-400">Latest</span> Trends <br />
            in <span className="text-yellow-400">Fashion</span> Your Style, Your Way
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold mt-4 text-yellow-400 transition-opacity duration-700 delay-200 ${
              isQuoteVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {`Chic. Modern. Effortless.`}
          </p>
        </div>
      </div>

      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="w-50 h-12 px-4 mb-4">
              <Image
                src="/image/brand-logo.jpg"
                alt="Brand Logo 1"
                width={50}  
                height={50} 
                className="object-contain"
              />
            </div>
            <div className="w-50 h-12 px-4 mb-4">
              <Image
                src="/image/brand-logo.jpg"
                alt="Brand Logo 2"
                width={50}  
                height={50} 
                className="object-contain"
              />
            </div>
            <div className="w-50 h-12 px-4 mb-4">
              <Image
                src="/image/brand-logo.jpg"
                alt="Brand Logo 3"
                width={50}  
                height={50} 
                className="object-contain"
              />
            </div>
            <div className="w-50 h-12 px-4 mb-4">
              <Image
                src="/image/brand-logo.jpg"
                alt="Brand Logo 4"
                width={50}  
                height={50} 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-10 bg-yellow-400 text-black text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Join Our Fashion Journey
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          {`Be part of the movement that celebrates creativity, quality, and sustainability. Follow
          our journey on social media and shop our latest collections to find the perfect pieces
          that express who you are.`}
        </p>
        <div className="flex justify-center">
          {/* Replace <a> with <Link> */}
          <Link
            href="/product"
            className="bg-black text-yellow-400 py-3 px-8 text-lg font-bold rounded-full transition-transform transform hover:scale-105"
          >
            Explore Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
