import React from "react";

const NMCRegulations = () => {
  const regulations = [
    {
      title: "Eligibility Criteria",
      description:
        "Students must meet the eligibility criteria set by the National Medical Commission (NMC), including passing 10+2 with a minimum of 50% in Physics, Chemistry, and Biology.",
    },
    {
      title: "Duration of the Course",
      description:
        "The MBBS program must be a minimum of 54 months (4.5 years), followed by a 12-month internship to meet NMC standards.",
    },
    {
      title: "Foreign Medical Graduate Examination (FMGE)",
      description:
        "Indian students graduating from foreign medical universities must pass the FMGE or NEXT (as applicable) to practice in India.",
    },
    {
      title: "Curriculum Guidelines",
      description:
        "The medical curriculum must align with NMC guidelines, ensuring the inclusion of necessary clinical rotations and theoretical knowledge.",
    },
    {
      title: "Recognition of Degree",
      description:
        "The degree obtained from Rostov State Medical University is valid in India, provided the course complies with NMC regulations.",
    },
    {
      title: "Annual Attendance",
      description:
        "Students must maintain at least 75% attendance to be eligible for exams and to comply with university and NMC policies.",
    },
  ];

  return (
    <div className="bg-gray-50 p-8 max-w-6xl mx-auto rounded-md">
      <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">
        NMC Regulations for MBBS at Rostov State Medical University
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Here are the key regulations as per the National Medical Commission
        (NMC) for Indian students pursuing MBBS abroad.
      </p>
      <div className="space-y-6">
        {regulations.map((regulation, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-md hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {regulation.title}
            </h2>
            <p className="text-gray-600 mt-2">{regulation.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NMCRegulations;
