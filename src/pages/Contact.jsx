import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, message });
    // TODO: Add API integration for submitting form data
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | RSMU University</title>
        <meta
          name="description"
          content="Reach out to RSMU University for admissions, programs, campus queries, or general inquiries. Submit your message and we'll get back to you soon."
        />
        <meta name="keywords" content="RSMU contact, university support, admissions inquiry, contact form, RSMU University contact details" />
        <meta property="og:title" content="Contact Us | RSMU University" />
        <meta
          property="og:description"
          content="Get in touch with RSMU University for inquiries about admissions, programs, or services. We are here to assist you."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rsmu-university.com/contact" />
        <meta property="og:image" content="https://example.com/contact-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | RSMU University" />
        <meta
          name="twitter:description"
          content="Contact RSMU University for any inquiries. Let us help you with admissions, campus life, and support."
        />
        <link rel="canonical" href="https://www.rsmu-university.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us - RSMU University",
            description:
              "Contact page for RSMU University to inquire about admissions, campus services, and academic programs.",
            url: "https://www.rsmu-university.com/contact",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-800-555-5555",
              email: "support@rsmu-university.com",
              contactType: "Customer Service",
              areaServed: "Worldwide",
              availableLanguage: ["English", "Russian"],
            },
          })}
        </script>
      </Helmet>

      <div className="flex flex-wrap justify-center items-center h-auto p-5">
        <div className="w-full md:w-2/5 p-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in <span className="text-blue-600">Touch!</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Have questions or need assistance? Fill out the form below, and we will get back to you promptly.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="fullName" className="text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                aria-label="Full Name"
                placeholder="Enter your full name"
                className="mt-1 p-3 w-full border rounded-lg"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                aria-label="Email Address"
                placeholder="Enter your email"
                className="mt-1 p-3 w-full border rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                aria-label="Message"
                placeholder="Write your message here"
                className="mt-1 p-3 w-full border rounded-lg"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8875864639285!2d77.146888525503!3d28.693009125631736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d023310b12e0f%3A0x644058b28ae94aa4!2sAggarwal%20Cyber%20Plaza-1!5e0!3m2!1sen!2sin!4v1737363887005!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Aggarwal Cyber Plaza-1"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
