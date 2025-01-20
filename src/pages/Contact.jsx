import React, { useState } from 'react';

const ContactForm = () => {
  // Optional: You can add state to handle form data if needed
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    // Add logic to handle form data (e.g., sending to an API)
    console.log({ fullName, email, message });
  };

  return (
    <div className="flex flex-wrap justify-center items-center h-auto p-5 pl-[6%]">
      <div className="w-full md:w-2/5 p-4">
        <h2 className="text-xl md:text-7xl font-semibold mb-5">
          GET IN <span className="text-[#306185]">TOUCH!</span>
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              className="mt-1 p-4 w-full border rounded-md"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-1 p-4 w-full border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="mt-1 p-4 w-full border rounded-md"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-8 py-2 rounded-md bg-[#306185] text-white hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-center">
        <div className="rounded-full overflow-hidden w-[35rem] h-[20rem] lg:w-[35rem] lg:h-[35rem]">
          {/* Embedded Google Map for the specific location */}
          <iframe
            className="w-[35rem] h-[35rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8875864639285!2d77.146888525503!3d28.693009125631736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d023310b12e0f%3A0x644058b28ae94aa4!2sAggarwal%20Cyber%20Plaza-1!5e0!3m2!1sen!2sin!4v1737363887005!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
