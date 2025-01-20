import React from 'react';
import rector from '../../assets/rector.jpeg';

const Intro = () => {
  return (
    <div className="bg-gradient-to-b from-[#306185] to-[#2d4f6b] text-white p-8 mt-4 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 px-4 lg:px-24 h-auto lg:h-[500px]">
      {/* Image Section */}
      <div className="w-full lg:w-[400px] flex justify-center">
        <img
          src={rector}
          alt="Rector"
          className="rounded-lg max-w-full lg:w-auto"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[800px] space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
           Acting Rector of University
        </h1>
        <p className="text-lg bg-white text-black rounded-md p-4">
          "I am glad to welcome you to study at RostSMU. Today, Rostov State Medical University is the leading higher educational institution in the Rostov region for training medical personnel, the largest basic educational, scientific, and medical center in the South of Russia, and one of the oldest universities in our country."
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start space-x-2 space-y-2 lg:space-y-0">
          <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm">
             Olesya Borisovna Starzhinskaya
          </span>
          <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm">
             Acting Rector
          </span>
          <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm">
          Candidate of Medical Sciences
          </span>
          <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm">
          surgeon
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
