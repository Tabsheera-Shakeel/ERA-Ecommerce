import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full bg-black text-white py-10 px-6 sm:px-12">
      {/* Mission Section */}
      <section className="py-5 bg-yellow-400 text-black text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
          Our Mission
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          {`At Era by Tabsheera, our mission is to empower individuals to express their true selves
          through fashion. We believe that style is a form of self-expression, and we are committed
          to offering timeless, high-quality pieces that help our customers feel confident and unique.`}
        </p>
      </section>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 mt-11 text-yellow-400">
        Meet the Founder
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Founder Image */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-6 md:mb-0 relative">
          <Image
            src="https://i.pinimg.com/564x/80/68/ce/8068ce8f02097283c45c97f91d65381a.jpg"
            alt="Founder"
            width={300}
            height={400}
            className="rounded-full object-cover border-4 ml-0 md:ml-12 border-yellow-400 shadow-lg"
          />
        </div>

        {/* Founder Description */}
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-6">
           {` Meet Tabsheera Shakeel, the founder of Era by Tabsheera. Tabsheera is a visionary in
            the fashion industry, dedicated to bringing unique designs that resonate with
            individuals. With a passion for style and quality, she founded the brand to empower
            others to express themselves through fashion.`}
          </p>
          <blockquote className="text-yellow-400 italic text-lg sm:text-xl lg:text-2xl">
            {`Fashion is not just about what you wear; it's about how you express who you are.`}
          </blockquote>
        </div>
      </div>

      {/* Our Values Section */}
      <section className="py-10 text-black text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 mb-6">
          Our Values
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12">
          {/* Creativity Card */}
          <div className="max-w-xs sm:max-w-sm bg-white p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-bold text-yellow-400 mb-2">Creativity</h4>
            <p className="text-lg">
             {` We believe in innovative designs that push boundaries, helping our customers stand
              out and feel confident.`}
            </p>
          </div>

          {/* Sustainability Card */}
          <div className="max-w-xs sm:max-w-sm bg-white p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-bold text-yellow-400 mb-2">Sustainability</h4>
            <p className="text-lg">
             {` Our commitment to the environment drives us to choose sustainable materials and
              ethical production processes.`}
            </p>
          </div>

          {/* Quality Card */}
          <div className="max-w-xs sm:max-w-sm bg-white p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-bold text-yellow-400 mb-2">Quality</h4>
            <p className="text-lg">
              {`We ensure that every piece of clothing is made with the highest quality materials
              to last and provide comfort.`}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
