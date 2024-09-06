import React from 'react';

const AboutSection = () => {
  return (
    <div className="relative py-16 bg-gray-100 text-center">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="inline-block relative">
          <a
            href="https://www.youtube.com/watch?v=Z3OS4Bn0n-Q"
            className="flex justify-center items-center w-20 h-20 rounded-full bg-blue-500 text-white text-2xl transition-transform transform hover:scale-110 hover:shadow-lg active:scale-95"
            aria-label="Watch Video"
          >
            <i className="fas fa-play"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
