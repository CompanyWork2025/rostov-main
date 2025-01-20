import React from "react";

function Contact() {
  return (
    <div className="bg-gradient-to-b from-[#306185] to-[#2d4f6b] px-4 mt-8 lg:px-24 py-8">
      {/* Heading */}
      <h2 className="text-xl lg:text-4xl font-bold text-white text-center lg:text-start">
        Contact our official representative of Indians & International students
      </h2>

      {/* Two Boxes */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Side Image */}


        {/* Right Side - WhatsApp and Mail */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* WhatsApp Box */}
          <div className="flex items-center bg-white shadow-lg rounded-lg p-4 space-x-4">
            {/* WhatsApp Logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-12 h-12 flex-shrink-0"
            />

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/79515173719" // Removed unnecessary characters in the link
              target="_blank"
              rel="noopener noreferrer" // Added security attributes for external links
              className="text-lg sm:text-xl font-medium text-[#306185] hover:underline break-words"
            >
              WhatsApp
            </a>
          </div>

          {/* Email Box */}
          <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://icon-library.com/images/red-email-icon-png/red-email-icon-png-27.jpg"
              alt="Email"
              className="w-12 h-12 mr-4 flex-shrink-0"
            />
            <a
              href="mailto:rostsmu@gmail.com"
              className="text-lg sm:text-xl font-medium text-[#306185] hover:underline break-words"
            >
              rostsmu@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Address Box */}
      <div className="bg-white shadow-lg rounded-lg mt-4 p-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Address</h3>
        <p className="text-lg text-gray-600">
          Office 608, 6th floor, Aggarwal Cyber Plaza-1, Netaji Subhash Place, Pitampura - 110034
          New Delhi (India)
        </p>
      </div>

      {/* Google Map */}
      <div className="mt-4">
        <iframe
          className="w-full h-64 lg:h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8875864639285!2d77.146888525503!3d28.693009125631736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d023310b12e0f%3A0x644058b28ae94aa4!2sAggarwal%20Cyber%20Plaza-1!5e0!3m2!1sen!2sin!4v1737363887005!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Office Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
