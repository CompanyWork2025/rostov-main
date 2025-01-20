import React from "react";

function Timeline() {
  return (
    <div className="bg-gray-800 flex flex-col lg:flex-row items-center justify-center px-6 py-10">
      {/* Left Side Image */}
      <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/007/147/non_2x/3d-character-illustration-of-woman-waving-hand-and-left-hand-on-waist-girl-saying-hello-say-hi-free-png.png"
          alt="Illustration"
          className="w-full max-w-md lg:-ml-24 lg:max-w-xl"
        />
      </div>

      {/* Right Side Timeline */}
      <div className="flex-1 relative w-full max-w-4xl">
        {/* Heading */}
        <h2 className="text-2xl lg:text-4xl lg:ml-16 lg:-mt-4 font-bold text-white mb-8 text-center lg:text-left">
          How to apply
        </h2>

        {/* Vertical Line */}
        <div className="hidden lg:block absolute left-[180px] transform translate-x-1/2 bg-red-500 h-full w-1"></div>

        {/* Timeline Steps */}
        <div className="space-y-20 relative">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-500 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              1
            </div>
            <div className="lg:ml-56 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-white">
                Choose your program
              </h3>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-500 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              2
            </div>
            <div className="lg:-ml-48 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-white">
                Send us initial documents via email
              </h3>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-500 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              3
            </div>
            <div className="lg:ml-56 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-white">
                Get approval and wait for visa invitation
              </h3>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center relative">
            <div className="lg:absolute left-[185px] transform lg:-translate-x-1/2 w-10 h-10 rounded-full bg-red-500 border-4 border-gray-800 text-white flex items-center justify-center text-lg font-bold mb-4 lg:mb-0">
              4
            </div>
            <div className="lg:-ml-80 text-center lg:text-left w-full lg:w-2/3">
              <h3 className="text-lg lg:text-xl font-bold text-white">
                Apply for visa in Russian Embassy at your place of residence
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
