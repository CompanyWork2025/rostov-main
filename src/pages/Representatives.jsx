import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Importing Link from React Router

const Representatives = () => {
    return (
        <>
            <Helmet>
                <title>RSMU Representatives | RSMU University</title>
                <meta
                    name="description"
                    content="Learn about the Representatives of RSMU University. From its inception to becoming a leader in education."
                />
            </Helmet>

            {/* Top Banner Image */}
            <div className="relative w-full lg:h-80">
                <img
                    src="https://rostgmu.net/images/representative-of-foreign-students.webp"
                    alt="RSMU University Representatives"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Main Content Section */}
            <div className="px-6 py-10 max-w-7xl mx-auto">
                {/* Heading Section */}
                <div className="text-center lg:text-left mb-10">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">RSMU's Representatives: The Bridge Between Cultures and Knowledge</h2>
                    <p className="lg:text-lg text-gray-600">
                        The representatives at RSMU play a pivotal role in fostering global ties, ensuring smooth academic operations, and acting as mediators between RSMU and prospective students around the world.
                    </p>
                </div>

                {/* Multiple Paragraphs Section */}
                <div className="space-y-8 text-center lg:text-left ">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Facilitating Global Outreach</h3>
                        <p className="text-gray-600 mt-4">
                            RSMU’s representatives play a vital role in extending the University’s presence internationally. They bridge cultural and academic gaps, helping to attract students from diverse backgrounds, particularly those from outside Russia.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">A Platform for Academic Collaboration</h3>
                        <p className="text-gray-600 mt-4">
                            These representatives also participate in building collaborative research initiatives with international institutions. By facilitating educational partnerships, they enhance the quality and reach of RSMU’s academic programs.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Providing Critical Guidance to Students</h3>
                        <p className="text-gray-600 mt-4">
                            RSMU’s representatives guide prospective students through the application process, explaining the nuances of studying in Russia, visa regulations, and facilitating a smooth transition for new students coming to RSMU.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Cultural and Social Integration</h3>
                        <p className="text-gray-600 mt-4">
                            Beyond academics, they help students integrate socially and culturally into their new environment. The representatives act as important figures for community-building among international students, hosting events and maintaining a supportive environment.
                        </p>
                    </div>
                </div>


                {/* Call to Action Section */}
                <div className="mt-16 bg-[#669d3f] py-8 p-8 rounded-xl text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">WELCOME TO STUDY MEDICINE IN ROSTSMU, RUSSIA - ADMISSIONS ARE OPEN FOR 2025.</h2>
                    <p className="text-md lg:text-lg text-white mb-8">
                        Take the first step in becoming part of RSMU’s international student community. Reach out to our representatives and discover how RSMU can help you achieve your academic and professional goals.
                    </p>
                    {/* Using Link instead of href */}
                    <Link to="/contact" className="inline-block px-8 py-3 text-white bg-[#306185] rounded-lg shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                        Contact a Representative
                    </Link>
                </div>

            </div>
        </>
    );
};

export default Representatives;
