import React from 'react';
import rector1 from '../../assets/rector1.jpeg';

const Rector = () => {
  return (
    <div className="bg-gradient-to-b from-[#306185] to-[#2d4f6b] text-white p-8 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 px-4 lg:px-24 h-auto lg:h-[500px]">

      {/* Content Section */}
      <div className="w-full lg:w-[800px] space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
          Vice Rector of University
        </h1>
        <p className="text-lg bg-white text-black rounded-md p-4">
          "Dear students, welcome to study medicine at RostSMU, Russia. RostSMU is an International university and has been training specialists for foreign countries since 1961. In 1964 the Dean’s office of Faculty on Training Foreign Students and Postgraduates was organized. Foreign students are trained at the faculties of General Medicine, Dentistry, Pharmacy, and Pediatrics. Annually, the university produces about 100-120 foreign specialists from about 100 countries of Asia, Africa, and Latin America."
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start">
          <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm">
            Gyuzal Shamilevna Gafiyatullina
          </span>
          <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm">
            Head of the Department of Normal Physiology
          </span>
          <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm">
            Acting Vice-Rector for Foreign Citizens Education and International Cooperation
          </span>
          <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm">
            Doctor of Medical Sciences
          </span>
          <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm">
            Professor
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[250px] flex justify-center">
        <img
          src={rector1}
          alt="Rector"
          className="rounded-lg lg:ml-48 max-w-full lg:w-auto"
        />
      </div>
    </div>
  );
};

export default Rector;
