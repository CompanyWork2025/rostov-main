import React from "react";

function Contact() {
  return (
    <div className="bg-gray-100 px-4 lg:px-8 py-12">
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
        Contact our official representative of Indians & International students
      </h2>

      {/* Two Boxes */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Side Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Contact Us"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - WhatsApp and Mail */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
          <div className="space-y-4">
            {/* WhatsApp */}
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp Icon"
                className="w-10 h-10"
              />
              <p className="text-lg font-medium text-gray-700">+1 234 567 890</p>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Mail Icon"
                className="w-10 h-10"
              />
              <p className="text-lg font-medium text-gray-700">contact@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Address Box */}
      <div className="bg-white shadow-lg rounded-lg mt-12 p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Address</h3>
        <p className="text-lg text-gray-600">
        Office 608, 6th floor, Aggarwal Cyber Plaza-1, Netaji Subhash Place, Pitampura - 110034 
        New Delhi (India)
        </p>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <iframe
          className="w-full h-64 lg:h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0927260783724!2d-122.41941628467853!3d37.7749297797595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e3f0cdcb%3A0xe0c34653f8161a0b!2s1234%20Main%20St%2C%20San%20Francisco%2C%20CA%2094123%2C%20USA!5e0!3m2!1sen!2s!4v1617311877186!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          title="Google Map Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
