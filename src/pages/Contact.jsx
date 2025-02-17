import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  // Set state for form data
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [pcbMarks, setPcbMarks] = useState('');
  const [neetMarks, setNeetMarks] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  
  // Use useRef for form reference
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(''); // Clear previous errors

    // Validate fields
    if (!fullName || !phone || !city || !state || !email || !pcbMarks || !neetMarks || !message) {
      setFormError('All fields are required!');
      return;
    }

    // Prepare email parameters
    const templateParams = {
      fullName,
      phone,
      city,
      state,
      email,
      pcbMarks,
      neetMarks,
      message,
    };

    // Send email using EmailJS and formRef
    emailjs.sendForm('service_nqcxku8', 'template_61kbbwr', formRef.current, 'VJBeG2pqOFep9BD36')
      .then(
        (result) => {
          console.log('Message sent: ', result.text);
          alert('Message sent successfully!');
          // Reset form fields after successful submission
          setFullName('');
          setPhone('');
          setCity('');
          setState('');
          setEmail('');
          setPcbMarks('');
          setNeetMarks('');
          setMessage('');
        },
        (error) => {
          console.error('Error sending message: ', error.text);
          alert('Error sending message. Please try again.');
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | RSMU University</title>
        <meta name="description" content="Reach out to RSMU University for admissions, programs, campus queries, or general inquiries. Submit your message and we'll get back to you soon." />
        <meta name="keywords" content="RSMU contact, university support, admissions inquiry, contact form, RSMU University contact details" />
        <meta property="og:title" content="Contact Us | RSMU University" />
        <meta property="og:description" content="Get in touch with RSMU University for inquiries about admissions, programs, or services. We are here to assist you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rostgmu.com/contact" />
        <meta property="og:image" content="https://example.com/contact-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | RSMU University" />
        <meta name="twitter:description" content="Contact RSMU University for any inquiries. Let us help you with admissions, campus life, and support." />
        <link rel="canonical" href="https://www.rostgmu.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us - RSMU University",
            description: "Contact page for RSMU University to inquire about admissions, campus services, and academic programs.",
            url: "https://www.rostgmu.com/contact",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-800-555-5555",
              email: "support@rsmu-university.com",
              contactType: "Customer Service",
              areaServed: "Worldwide",
              availableLanguage: ["English", "Russian"]
            },
          })}
        </script>
      </Helmet>

      <div className="flex flex-wrap justify-center items-center h-auto p-5">
        <div className="w-full text-center mb-6">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4">
            Get in <span className="text-[#306185]">Touch!</span>
          </h1>
          <p className="text-gray-600">
            Have questions or need assistance? Fill out the form below, and we will get back to you promptly.
          </p>
        </div>

        <div className="w-full md:w-2/5 p-4">
          {formError && <p className="text-red-500">{formError}</p>}

          {/* Form */}
          <form className="space-y-4" ref={formRef} onSubmit={handleSubmit} noValidate>
            {/* Personal Information */}
            <div className="flex space-x-4">
              <div className="w-1/2">
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
              <div className="w-1/2">
                <label htmlFor="phone" className="text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  aria-label="Phone"
                  placeholder="Enter your phone number"
                  className="mt-1 p-3 w-full border rounded-lg"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Location Details */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="city" className="text-gray-700">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  aria-label="City"
                  placeholder="Enter your city"
                  className="mt-1 p-3 w-full border rounded-lg"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="state" className="text-gray-700">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  aria-label="State"
                  placeholder="Enter your state"
                  className="mt-1 p-3 w-full border rounded-lg"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Educational Details */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="pcbMarks" className="text-gray-700">
                  PCB% (12th Class) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="pcbMarks"
                  name="pcbMarks"
                  aria-label="PCB% (12th Class)"
                  placeholder="Enter your PCB% in 12th Class"
                  className="mt-1 p-3 w-full border rounded-lg"
                  value={pcbMarks}
                  onChange={(e) => setPcbMarks(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="neetMarks" className="text-gray-700">
                  NEET Marks <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="neetMarks"
                  name="neetMarks"
                  aria-label="NEET Marks"
                  placeholder="Enter your NEET Marks"
                  className="mt-1 p-3 w-full border rounded-lg"
                  value={neetMarks}
                  onChange={(e) => setNeetMarks(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Contact Information */}
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

            {/* Message Input */}
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
              className="px-6 py-3 bg-[#306185] w-full text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map Display */}
        <div className="w-full mt-4 md:mt-0 md:w-1/2 lg:p-20 flex justify-center">
          <div className="rounded-lg overflow-hidden w-full h-[550px]">
            <h1 className='text-lg text-center text-[#306185] lg:text-left lg:text-xl font-semibold mb-10'>Our official representative registered address in India 👇🏻</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8652879979413!2d77.1475991755031!3d28.693676075631423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d92f45f1bb%3A0xf2fcd5bfa7590c08!2sThe%20RREC%20Team-MBBS%20in%20Russia%20%7C%20Direct%20Official%20Admission%20Partners%20%7C%20Top%20Medical%2C%20Technical%2C%20Federal%20Universities%20of%20Russia.!5e0!3m2!1sen!2sin!4v1737455159513!5m2!1sen!2sin"
              width="600"
              height="400"
              style={{ border: "0" }}
              allowFullScreen="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Call to Action Section with adjusted margins */}
      <div className="mx-4 md:mx-28 bg-[#306185] mb-8 py-8 p-8 rounded-xl text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
          OUR INTERNATIONAL PARTNER
        </h2>
        <p className="text-md lg:text-lg text-white mb-8">
          ♦ Reliable Russian Educational Consultants Pvt. Ltd ♦
        </p>
        <div className="flex items-center justify-between">
          <div className="flex-1 text-left">
            <p className="text-md lg:text-lg text-white mb-8">
              Registered office address: Office no. 608, 6th floor, Aggarwal Cyber Plaza-1 Netaji Subhash Place, Pitampura, New Delhi - 110034 Delhi, India
            </p>
          </div>
          <div className="flex-1 text-left">
            {/* Centered Content (Empty for now) */}
          </div>
          <div className="flex-1 text-right">
            <p className="text-md lg:text-lg text-white mb-8">
              Corporate office address: Office no. 709-710, 7th floor, P.P. Trade Center Netaji Subhash Place, Pitampura, New Delhi - 110034 Delhi, INDIA
            </p>
          </div>
        </div>

        {/* Centered Text below the flexbox */}
        <div className="mt-8 text-center lg:px-14">
          <p className="text-md lg:text-lg text-white">
            Contacts: For Indian Students: +91-7669533991, +91-7042284508 / 509 Landline: +91-1143215827, Toll-free: 1800-572-5827 For International Students: +7-9515173719, +7-9515190376 E-mail: contact@rrecrostov.com, contact@rrecrussia.com, rrec.educonsultants@gmail.com Website: www.rrecrostov.com
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
