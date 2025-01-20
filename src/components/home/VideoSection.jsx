import React, { useState } from 'react';

const CustomComponent = () => {
  const videoUrls = {
    universityTour: 'https://www.youtube.com/embed/v8tiR_kbzfA',
    hostelTour: 'https://www.youtube.com/embed/Nm-Iox9uDdE',
    cityTour: 'https://www.youtube.com/embed/0_osKboyOYU',
    festivalCelebrations: 'https://www.youtube.com/embed/xt-Qb3yFBMc',
  };

  // Set the initial state to display the first video by default
  const [videoUrl, setVideoUrl] = useState(videoUrls.universityTour);

  const handleButtonClick = (url) => {
    setVideoUrl(url);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-stretch lg:p-16 rounded-lg shadow-md max-w-8xl mx-auto bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1530293959042-0aac487c21e3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      {/* Left-side Image */}
      <div className="md:w-1/3 w-full flex-shrink-0 rounded-lg p-2">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/man-studying-on-laptop-while-sitting-books-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--working-male-employee-character-pack-people-illustrations-5559635.png"
          alt="Placeholder"
          className="rounded-lg object-cover h-full w-full"
        />
      </div>

      {/* Right-side Content */}
      <div className="md:w-2/3 w-full md:pl-6 mt-4 md:mt-0 flex flex-col justify-between rounded-lg p-6">
        {/* Heading and Paragraph */}
        <div className="mb-6 text-center md:text-left">
          <h1 className="text-4xl font-semibold text-gray-800 mb-2">Some Videos of RostSMU</h1>
          <p className="text-gray-600 text-lg">
            RSMU is the top rank medical university of Southern Russia and seventh oldest medical university of Russian Federation.
          </p>
        </div>

        {/* Button Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
            onClick={() => handleButtonClick(videoUrls.universityTour)}
          >
            University Tour
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600"
            onClick={() => handleButtonClick(videoUrls.hostelTour)}
          >
            Hostel Tour
          </button>
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded shadow hover:bg-yellow-600"
            onClick={() => handleButtonClick(videoUrls.cityTour)}
          >
            City Tour
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded shadow hover:bg-red-600"
            onClick={() => handleButtonClick(videoUrls.festivalCelebrations)}
          >
            Festival Celebrations
          </button>
        </div>

        {/* Video Section */}
        <div className="flex items-center justify-center">
          {videoUrl ? (
            <iframe
              width="100%"
              height="400"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow"
            ></iframe>
          ) : (
            <p className="text-gray-600">Click a button to play a video.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
