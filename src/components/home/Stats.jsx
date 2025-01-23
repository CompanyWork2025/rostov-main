import React from "react";
import doc from "../../assets/doc.gif";

function StatsGrid() {
  return (
    <>
      <div className="bg-blue-50 flex items-center justify-center p-4 lg:p-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center w-full max-w-[1400px]">
          {/* Left Side Content */}
          <div className="flex flex-col">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
              Facts about our university
            </h1>
            <p className="text-sm lg:text-lg text-gray-600 text-center lg:text-left">
              Rostov State Medical University is one of the most renowned
              medical universities in Russia, offering a rich legacy of academic
              excellence and a high standard of medical education.
            </p>
            <p className="text-sm lg:text-lg mt-4 text-gray-600 text-center lg:text-left">
              At RostSMU, our faculty comprises leading experts in their fields,
              bringing a wealth of experience, knowledge, and dedication to
              education and research.
            </p>
            <p className="text-sm lg:text-lg mt-4 text-gray-600 text-center lg:text-left">
            The Rostov State Medical University is accredited by the Russian Health Ministry for education for the teaching of both Russian and overseas students.
            </p>
          </div>

          {/* Middle PNG/Image */}
          <div className="flex justify-center">
            <img
              src={doc}
              alt="Middle Illustration"
              className="w-32 h-48 lg:w-48 lg:h-96 object-cover"
            />
          </div>

          {/* Right Side Box */}
          <div className="bg-[#306185] border rounded-lg p-10 shadow-lg">
            <h2 className="text-xl lg:text-3xl font-semibold text-red-400 mb-4 text-center lg:text-left">
              Why choose us:
            </h2>
            <ul className="text-white lg:text-lg space-y-10">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                High quality education
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Modern research
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Student experience
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Brilliant knowledge for better healthcare
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-blue-50 flex flex-col items-center justify-center p-4 lg:p-8">
        <div className="grid gap-8 w-full px-4 lg:px-14">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex items-center bg-blue-700 text-white rounded-lg p-6 lg:p-0 w-full lg:w-[60%]">
              <div className="flex-1">
                <h1 className="text-2xl lg:text-6xl lg:ml-4 font-bold">15 000+</h1>
                <p className="mt-2 text-md lg:ml-6 lg:text-xl">students</p>
              </div>
              <img
                src="https://www.pngarts.com/files/7/Group-College-Student-PNG-Image.png"
                alt="Students"
                className="w-3/4 lg:w-3/4 -mr-8 lg:-mr-10 mx-auto"
              />
            </div>
            <div className="flex items-center bg-blue-600 text-white rounded-lg p-6 w-full lg:w-[40%]">
              <div className="flex-1">
                <h1 className="text-2xl lg:text-6xl font-bold">1300+</h1>
                <p className="mt-2 text-md lg:text-lg">international students</p>
              </div>
              <img
                src="https://png.pngtree.com/png-vector/20220725/ourmid/pngtree-happy-friends-group-gathering-png-image_6072378.png"
                alt="International"
                className="hidden lg:block w-1/2 lg:w-3/2 lg:-mb-16"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex items-center bg-red-500 text-white rounded-lg p-6 w-full lg:w-[40%]">
              <div className="flex-1">
                <h1 className="text-2xl lg:text-6xl font-bold">64+</h1>
                <p className="mt-2 text-md lg:text-lg">countries</p>
              </div>
            </div>
            <div className="flex items-center bg-white text-gray-800 border rounded-lg p-6 w-full lg:w-[60%]">
              <div className="flex-1">
                <h1 className="text-2xl lg:text-6xl font-bold">60+</h1>
                <p className="mt-2 text-md lg:text-lg">
                  More than 60 international partners
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex items-center bg-blue-700 text-white rounded-lg p-6 w-full lg:w-[60%]">
              <div className="flex-1">
                <h1 className="text-2xl lg:text-6xl font-bold">30+</h1>
                <p className="mt-2 text-md lg:text-lg">Joint Ph.D. programs</p>
              </div>
            </div>
            <div className="flex items-center bg-blue-900 text-white rounded-lg p-6 w-full lg:w-[40%]">
              <div className="flex-1">
                <h1 className="text-2xl lg:text-6xl font-bold">300+</h1>
                <p className="mt-2 text-md lg:text-lg">
                  More than 300 students take part in exchange programs annually
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatsGrid;
