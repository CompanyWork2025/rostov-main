import React from 'react';

const Fee = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <header className="bg-[#306185] text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <h1 className="text-xl">Rostov State Medical University - Fee Structure</h1>
        </div>
      </header>

      <main className="mt-8 px-6">
        <section className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl text-center lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            Overview of the Fee Structure for International Students
          </h2>
          <p className="text-gray-600 text-center mb-6">
          Tuition fee under the contract for the first 2025-2026 academic year at the Faculty on Training Foreign Students and Postgraduates is as follows:
          </p>

          {/* Tuition Fee Table */}
          <table className="min-w-full table-auto bg-gray-50 shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-200">
                <th className="py-2 px-4 border-b text-left text-blue-800">Program</th>
                <th className="py-2 px-4 border-b text-left text-blue-800">Annual Fee (Rubles)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-gray-800">General Medicine (English Medium)</td>
                <td className="py-2 px-4 border-b text-gray-800"> 326, 000 Rubles</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-gray-800">Preparatory Faculty (Russian Language Course)</td>
                <td className="py-2 px-4 border-b text-gray-800">194, 000 Rubles</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-gray-800">General Medicine (Russian medium)</td>
                <td className="py-2 px-4 border-b text-gray-800">224, 700 Rubles</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-gray-800">Pediatrics (Russian medium)</td>
                <td className="py-2 px-4 border-b text-gray-800">224, 700 Rubles</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-gray-800">Pharmacy (Russian medium)</td>
                <td className="py-2 px-4 border-b text-gray-800">224, 700 Rubles</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-gray-800">Dentistry (Russian medium)</td>
                <td className="py-2 px-4 border-b text-gray-800">257, 100 Rubles</td>
              </tr>
            </tbody>
          </table>

          <section className="mt-8">
            <p className="text-gray-600">
               Tuition fees can increase by 8-10% per year according to the annual inflation rate.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Fee;
