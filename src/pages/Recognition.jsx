import React from 'react';

const Recognition = () => {
  const recognitions = [
    {
      title: 'Accreditation by Russian Ministry of Education',
      description:
        'Our university is officially recognized and accredited by the Ministry of Education and Science of the Russian Federation.',
      link: 'https://www.russianeducationministry.gov/recognition',
    },
    {
      title: 'International Ranking',
      description:
        'We are consistently ranked among the top universities globally in multiple fields, demonstrating our commitment to high academic standards.',
      link: 'https://www.internationalranking.com/rostovuniversity',
    },
    {
      title: 'Best Campus Facility Award',
      description:
        'Awarded for exceptional infrastructure, dormitory facilities, and campus support services, ensuring a world-class student experience.',
      link: 'https://campusfacilitiesaward.com/rostovuniversity',
    },
    {
      title: 'Research Excellence in Medical Sciences',
      description:
        'We have been acknowledged for groundbreaking research in various medical fields, contributing globally to healthcare advancements.',
      link: 'https://www.researchawards.org/rostov-university-medical-sciences',
    },
  ];

  const externalLinks = [
    { title: 'National Medical Commission India', link: 'http://www.nmc.org.in/' },
    { title: 'World Health Organization', link: 'http://www.who.int/en/' },
    { title: 'Educational Commission for Foreign Medical Graduates, USA', link: 'http://www.ecfmg.org/' },
    { title: 'Foundation For Advancement Of International Medical Education & Research, USA', link: 'http://www.faimer.org/' },
    { title: 'Education Ministry of Russia', link: 'http://mon.gov.ru/' },
    { title: 'Health Ministry of Russia', link: 'https://minzdrav.gov.ru/en' },
    { title: 'Medical & Dental Council of Nigeria', link: 'http://www.mdcn.gov.ng/' },
    { title: 'Medical Council of Malaysia', link: 'http://www.mma.org.my/' },
    { title: 'Bangladesh Dental & Medical Council', link: 'http://www.bmdc.org.bd/' },
    { title: 'Lebanese Orders of Physicians', link: 'https://lopbeirut.org/en/homepage-en/' },
    { title: 'Pakistan Medical & Dental Council', link: 'https://www.pmc.gov.pk/' },
    { title: 'Medical & Dental Council Ghana', link: 'https://www.mdcghana.org/' },
    { title: 'The Medical Council of Thailand', link: 'https://tmc.or.th/En/' },
    { title: 'Nepal Medical Council', link: 'https://www.nmc.org.np/' },
  ];

  return (
    <div className="container mx-auto px-6 lg:px-20 mt-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#306185]">University Recognitions</h1>
        <p className="text-gray-600 mt-4">
          RSMU is approved by the following Medical regulatory bodies of the world as a medical university-it permits medical students to apply for getting the license to practice and get the benefit of various scholarships.
        </p>
      </div>

      {/* Recognitions List */}
      <section className="space-y-8">
        {recognitions.map((recognition, index) => (
          <div key={index} className="bg-white border border-2 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#306185]">{recognition.title}</h3>
            <p className="text-gray-500 mt-2">{recognition.description}</p>
            <div className="mt-4">
              <a
                href={recognition.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#306185] text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition duration-300"
              >
                Visit Link
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* External Links Grid */}
      <section className="mt-12 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {externalLinks.map((link, index) => (
          <div key={index} className="bg-white border border-2 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#306185] mb-4">{link.title}</h3>
            <ul>
              <li>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#306185] hover:text-blue-700 transition duration-300"
                >
                  Visit Website
                </a>
              </li>
            </ul>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Recognition;
