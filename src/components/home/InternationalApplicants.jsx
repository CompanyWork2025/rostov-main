import React from "react";

const InternationalApplicants = () => {
  return (
    <section
      className="bg-fixed bg-center bg-cover bg-no-repeat text-white py-10 px-6"
      style={{
        backgroundImage: `url('https://satyamevedu.co.in/wp-content/uploads/2023/04/WhatsApp-Image-2022-05-10-at-12.18.11-AM-1024x683.jpeg')`,
      }}
    >
      <div className="bg-black bg-opacity-80 py-12">
        <div className="container mx-auto max-w-5xl">
          {/* Heading */}
          <h1 className="text-xl lg:text-3xl font-bold mb-6 text-center">
            Information for International Applicants (Entrants)
          </h1>

          {/* Paragraph */}
          <p className="text-lg mb-6 text-center leading-8">
            The Rostov State Medical University has been training specialists
            for foreign countries since 1961.
          </p>

          {/* Degree Programs */}
          <div className="bg-white rounded-lg p-4 lg:p-4 text-black shadow-lg">
            <h2 className="text-xl font-semibold mb-8 text-center">
            The Faculty on Training Foreign Students and Postgraduates is in charge of international students training in the following specialist degree programs
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">«General Medicine»</span> — 6
                years (English Medium)
              </li>
              <li>
                <span className="font-semibold">«General Medicine»</span> — 6
                years (in Russian language)
              </li>
              <li>
                <span className="font-semibold">«Pediatrics»</span> — 6 years
                (in Russian language)
              </li>
              <li>
                <span className="font-semibold">«Pharmacy»</span> — 5 years (in
                Russian language)
              </li>
              <li>
                <span className="font-semibold">«Dentistry»</span> — 5 years (in
                Russian language)
              </li>
              <li>
                <span className="font-semibold">«Preparatory Faculty»</span> —
                8-10 months (Russian language course)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalApplicants;
