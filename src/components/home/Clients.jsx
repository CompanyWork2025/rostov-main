import React from "react";

const Clients = () => {
  const gridItems = [
    { id: 1, image: "https://via.placeholder.com/150", title: "Course 1" },
    { id: 2, image: "https://via.placeholder.com/150", title: "Course 2" },
    { id: 3, image: "https://via.placeholder.com/150", title: "Course 3" },
    { id: 4, image: "https://via.placeholder.com/150", title: "Course 4" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[650px] bg-gray-100 p-6 lg:px-24">
      {/* Main Heading */}
      <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-12 text-center">
        Rostov University is recognized by WHO and is prominently represented in both international and domestic rankings.
      </h1>


      {/* Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover mb-4"
            />
            {/* Heading */}
            <h2 className="text-xl font-semibold">{item.title}</h2>
          </div>
        ))}
      </div>

      {/* Apply Now Button */}
      <button className="mt-8 px-6 py-3 bg-[#306185] text-white font-semibold rounded-md shadow hover:bg-green-600">
        Apply Now
      </button>
    </div>
  );
};

export default Clients;
