import React, { useState } from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "What programs are available at Rostov State Medical University?",
            answer:
                "Rostov State Medical University offers various programs in Medicine, Dentistry, Pharmacy, Nursing, and postgraduate specialties, catering to the needs of both national and international students.",
        },
        {
            question: "Is the medium of instruction in English?",
            answer:
                "Yes, General Medicine program at Rostov state medical university is taught in English, making it convenient for international students, and it fulfill their countries medical councils norms of studying Medical in Abroad.",
        },
        {
            question: "What are the admission requirements?",
            answer:
                "Higher secondary school certificate On the place of high school diploma",
        },
        {
            question: "Does the university provide hostel facilities?",
            answer:
                "Yes, the university offers affordable, comfortable, and secure hostel facilities to accommodate both local and international students.",
        },
        {
            question: "What are the tuition fees at Rostov State Medical University?",
            answer:
                "Tuition fees vary by program, but they are generally affordable, making it an attractive option for international students seeking quality education in medicine.",
        },
        {
            question: "What career opportunities are available after graduation?",
            answer:
                "Graduates from Rostov State Medical University are recognized globally and can pursue careers in medicine, healthcare, and research. Many alumni successfully work in top hospitals and institutions worldwide.",
        },
        {
            question: "How safe is the campus for international students?",
            answer:
                "The university takes student safety seriously and provides a secure environment with 24/7 security services and support for international students.",
        },
        {
            question: "Are there cultural activities and student organizations?",
            answer:
                "Yes, the university hosts numerous cultural events, sports activities, and has student organizations to help students connect and grow socially.",
        },
        {
            question: "How can I apply to Rostov State Medical University?",
            answer:
                "You can apply by submitting your documents online or through authorized representatives. The application process includes document verification and interviews, if required.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 p-8 rounded-md max-w-6xl mx-auto">
            <h1 className="text-2xl lg:text-4xl font-bold text-blue-800 text-center mb-6">
                Rostov State Medical University, Russia - FAQs
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Find answers to some of the most frequently asked questions about Rostov State Medical University.
            </p>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md">
                        <button
                            className="w-full flex justify-between items-center p-4 text-gray-800 font-medium focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            <span>{openIndex === index ? '-' : '+'}</span>
                        </button>
                        {openIndex === index && (
                            <div className="p-4 border-t border-gray-200 text-gray-700">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
