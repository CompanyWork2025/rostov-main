import React from "react";

function Timeline() {
  return (
    <div className="bg-[#87CEEB] flex flex-col lg:flex-row items-center justify-center px-6 py-10">
      {/* Left Side Image */}
      <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
        <img
          src="https://pngimg.com/d/question_mark_PNG134.png"
          alt="Illustration"
          className="w-full max-w-md lg:-ml-24 lg:max-w-md"
        />
      </div>

      {/* Right Side Timeline */}
      <div className="flex-1 relative w-full lg:-mt-10 lg:ml-28 max-w-4xl">
        {/* Heading */}
        <h2 className="text-2xl lg:text-4xl lg:ml-16 lg:-mt-4 font-bold text-red-600 mb-8 text-center lg:text-left">
          How to apply
        </h2>

        {/* Vertical Line */}
        <div className="hidden lg:block absolute left-[180px] transform translate-x-1/2 bg-red-500 h-full w-1"></div>

        {/* Timeline Steps */}
        <div className="space-y-6 relative">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              1
            </div>
            <div className="lg:ml-56 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-blue-800">
                Choose your program
              </h3>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              2
            </div>
            <div className="lg:-ml-48 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-blue-800">
                Send us initial documents via email
              </h3>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              3
            </div>
            <div className="lg:ml-56 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-blue-800">
                Get approval and wait for visa invitation
              </h3>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              4
            </div>
            <div className="lg:-ml-80 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-blue-800">
                Apply for visa in Russian Embassy in your country
              </h3>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              5
            </div>
            <div className="lg:ml-56 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-blue-800">
                Get visa and inform us your travel date
              </h3>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              6
            </div>
            <div className="lg:-ml-80 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-blue-800">
                Arrival to Russia, do medical check-up with the help of Rep.
              </h3>
            </div>
          </div>

          {/* Step 7 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              7
            </div>
            <div className="lg:ml-56 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-blue-800">
                ⁠Pass entrance exam.
              </h3>
            </div>
          </div>

          {/* Step 8 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              8
            </div>
            <div className="lg:-ml-80 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-blue-800">
                Pay tuition fee and sign the educational contract
              </h3>
            </div>
          </div>

          {/* Step 9 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-600 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              9
            </div>
            <div className="lg:ml-56 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-blue-800">
                ⁠Join the RostSMU, Russia
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
