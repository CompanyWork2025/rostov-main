import React from 'react';

const Steps = () => {
    return (
        <div
            className="relative bg-cover bg-center mt-4 h-auto z-10"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1530293959042-0aac487c21e3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')",
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-4 sm:px-6 md:px-20">
                {/* Step 1 */}
                <div className="flex flex-col sm:flex-row items-center space-x-4 p-4 sm:p-6 lg:p-12 border border-2 bg-white rounded-md shadow-lg">
                    <div className="flex-shrink-0 order-1 sm:order-0">
                        <img
                            src="https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-simple-emoji-of-someone-teaching-computer-software-png-image_12780864.png"
                            alt="Step 1"
                            className="w-40 mt-4 lg:mt-0 h-40 lg:w-64 lg:h-64 object-cover"
                        />
                    </div>
                    <div className="flex flex-col order-0 sm:order-1">
                        <h3 className="text-xl font-semibold mb-4">Step 1 — Initial application</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            <br />
                            Eligibility Criteria:
                            <br />
                            <br />
                            To study at RSMU, there is no need to provide an English language certificate. However, applicants with poor English skills may not be eligible for studies in RSMU.
                            <br />
                            <br />
                            Student need to prepare and send the following documents via email or for the same student can contact our official Rep. RREC:
                            <br />
                            <br />
                            1. Copy of the international passport (pages with the photo, date of expiration, place of birth, etc.)
                            <br />
                            <br />
                            2. Certificates of Higher & Secondary School.
                            <br />
                            <br />
                            3. NEET Qualified Result (For Indian Students Only).
                            <br />
                            <br />
                            4. Health fitness certificate (including vaccination information).
                            <br />
                            <br />
                            Please fill out the application form provided by our Rep. RREC, invitation form, and application form, and send them via the form below or email to the University’s Rep. office: rostsmu@gmail.com
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col sm:flex-row items-center space-x-4 p-4 sm:p-6 lg:p-12 bg-white border border-2 rounded-md shadow-lg">
                    <div className="flex-shrink-0 order-1 sm:order-0">
                        <img
                            src="https://imgproxy.attic.sh/unsafe/rs:fit:768:768:1:1/t:1:FF00FF:false:false/pngo:false:true:256/aHR0cHM6Ly9hdHRp/Yy5zaC8yYjB3dXJu/eTJiNWpmd3Fjamsx/YmxodHZpNTV6.png"
                            alt="Step 2"
                            className="w-40 mt-4 lg:mt-0 h-40 lg:w-64 lg:h-64 object-cover"
                        />

                    </div>
                    <div className="flex flex-col order-0 sm:order-1">
                        <h3 className="text-xl font-semibold mb-4">Step 2 — Receive Admission Provisional Letter & Receive a student's invitation (takes about 25-30 days) and can apply for a visa
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            After verification of docs and eligibility check, the student will receive a provisional letter of admission within 3-5 working days. 
                            <br /><br />
                            After your application is processed, you will receive a student's invitation via email in about 25-30 days. Once you receive your invitation, you can apply for a visa to enter Russia.
                            <br /><br />
                            Note: Receiving an invitation from the university is not enough to enter the Russian Federation. The visa approval process is essential; the student or representative needs to take care of the process.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col sm:flex-row items-center space-x-4 p-4 sm:p-6 lg:p-12 bg-white border border-2 rounded-md shadow-lg">
                    <div className="flex-shrink-0 order-1 sm:order-0">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/047/492/159/non_2x/a-exciting-happy-man-3d-photo-free-png.png"
                            alt="Step 3"
                            className="w-40 mt-4 lg:mt-0 h-40 lg:w-64 lg:h-64 object-cover"
                        />
                    </div>
                    <div className="flex flex-col order-0 sm:order-1">
                        <h3 className="text-xl font-semibold mb-4">Step 3 — Arrival in Russia</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Upon your arrival in Russia, make sure that you have all necessary original docs from your country to complete the migration card provided at the airport and have it stamped by Border Control.
                            <br /><br />
                            You need to submit your migration card to the university registration & visa department as proof of entry with other documents. 
                            <br /><br />
                            Visit the Dean’s Office of International Students on the day or next day of arrival, bringing your passport and migration card. Additionally, complete the registration within 3 days to avoid fines.
                        </p>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col sm:flex-row items-center space-x-4 p-4 sm:p-6 lg:p-12 bg-white border border-2 rounded-md shadow-lg">
                    <div className="flex-shrink-0 order-1 sm:order-0">
                        <img
                            src="https://imgproxy.attic.sh/unsafe/rs:fit:768:768:1:1/t:1:FF00FF:false:false/pngo:false:true:256/aHR0cHM6Ly9hdHRp/Yy5zaC9jM245dmJ3/dTk1ZG10dGI4cWE4/NDhsbWJzNXZo.png"
                            alt="Step 4"
                            className="w-40 mt-4 lg:mt-0 h-40 lg:w-64 lg:h-64 object-cover"
                        />
                    </div>
                    <div className="flex flex-col order-0 sm:order-1">
                        <h3 className="text-xl font-semibold mb-4">Step 4 — Medical check-up & vaccinations (Before entry to Dormitories)</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                        Upon your arrival, you will undergo a medical check-up to assess your fitness for study. If any vaccinations are missed, you will need to get the required vaccines.
                            <br /><br />
                            Note: All international students must have health insurance.
                        </p>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col sm:flex-row items-center space-x-4 p-4 sm:p-6 lg:p-12 bg-white border border-2 rounded-md shadow-lg">
                    <div className="flex-shrink-0 order-1 sm:order-0">
                        <img
                            src="https://imgproxy.attic.sh/PEYVBT6d-gxAhralUlZ3D4vmDmKDcar0LvSYlvsAhEI/rs:fit:768:768:1:1/t:1:FF00FF:false:false/pngo:false:true:256/aHR0cHM6Ly9hdHRp/Yy5zaC85dzd4OGxj/dWJmcHJyanBsZmQ3/dmdyZGRxOG1m.png"
                            alt="Step 5"
                            className="w-40 mt-4 lg:mt-0 h-40 lg:w-64 lg:h-64 object-cover"
                        />
                    </div>
                    <div className="flex flex-col order-0 sm:order-1">
                        <h3 className="text-xl font-semibold mb-4">Step 5 — Entrance examinations</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                        After the medical check-up, international students must take an entrance examination. This will include testing your knowledge of chemistry and biology to ensure eligibility for further studies as a first-year student at RostSMU.
                        </p>
                    </div>
                </div>

                {/* Step 6 */}
                <div className="flex flex-col sm:flex-row items-center space-x-4 p-4 sm:p-6 lg:p-12 bg-white border border-2 rounded-md shadow-lg">
                    <div className="flex-shrink-0 order-1 sm:order-0">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5873/5873467.png"
                            alt="Step 6"
                            className="w-40 mt-4 lg:mt-0 h-40 lg:w-64 lg:h-64 object-cover"
                        />
                    </div>
                    <div className="flex flex-col order-0 sm:order-1">
                        <h3 className="text-xl font-semibold mb-4">Step 6 — Pay fees & sign contract</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                        After passing all the required steps and entrance exams, you will need to pay the university tuition and hostel fees and sign the contract. This officially makes you a student of RSMU.
                            <br /><br />
                            If you have any questions regarding the admission process, feel free to contact the university staff or student Rep. at any time.
                        </p>
                    </div>
                </div>

                {/* Step 7 */}
                <div className="flex flex-col sm:flex-row items-center space-x-4 p-4 sm:p-6 lg:p-12 bg-white border border-2 rounded-md shadow-lg">
                    <div className="flex-shrink-0 order-1 sm:order-0">
                        <img
                            src="https://pixcap.com/cdn/library/templates/a2bebd9a-1cae-4c36-93a9-b04ad87f85d1/thumbnail/e442707d-13ff-43b6-a8c7-4c3bcc468f32_transparent_400_400.webp"
                            alt="Step 7"
                            className="w-40 mt-4 lg:mt-0 h-40 lg:w-64 lg:h-64 object-cover"
                        />
                    </div>
                    <div className="flex flex-col order-0 sm:order-1">
                        <h3 className="text-xl font-semibold mb-4">Step 7 — The procedure for passing a medical examination and mandatory fingerprinting</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                        According to Federal Law No. 272-FZ of 01.01.2921, from December 29, 2021; foreign citizens who arrive in RF must go through ma edical examination and get report results within 90 days of his/her arrival to RF and also need to do mandatory Biometrics.
                            <br /><br />
                            If you have any questions regarding the admission process, feel free to contact the university staff or student Rep. at any time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
