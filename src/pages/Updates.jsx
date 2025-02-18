import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Updates = () => {
  const [activeTab, setActiveTab] = useState('latest');

  const latestUpdates = [
    'New state-of-the-art medical simulation center inaugurated.',
    'Research paper by the Department of Oncology accepted in an international journal.',
    'Registration for the spring semester begins next week.',
    'New clinical training program announced for cardiology students.',
    'University ranked top in clinical research innovation in Russia.',
    'Annual health screening camp conducted for over 500 students.',
    'Upgrade to laboratory equipment completed successfully.',
    'Professor Dr. Ivanov receives national award for contributions to neuroscience.',
    'Updated curriculum to include advanced telemedicine techniques.',
    'New library resources: Over 1,000 eBooks on public health added.',
  ];

  const upcomingEvents = [
    'International Medical Research Conference on March 15th.',
    'Guest lecture on "Future of Neurosurgery" by Dr. Sergey Petrov on February 25th.',
    'Free medical camp for local communities on March 10th.',
    'Workshop on mental health awareness for students on March 20th.',
    'Annual convocation ceremony on April 5th.',
    'Blood donation drive in collaboration with Red Cross on April 18th.',
    'Hands-on training session for laparoscopic surgery techniques on April 25th.',
    'Symposium on "Global Pandemic Preparedness" scheduled for May 10th.',
    'Ethics in Medical Practice: Seminar by Dr. Anastasia Klimov on May 20th.',
    'Graduation ceremony for senior batch on June 1st.',
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 min-h-screen">
      {/* SEO Helmet */}
      <Helmet>
        <title>Updates - Rostov Medical University</title>
        <meta
          name="description"
          content="Stay updated with the latest announcements and events from Rostov Medical University. Discover academic updates, conferences, workshops, and more."
        />
        <meta
          name="keywords"
          content="Rostov Medical University, medical news, events, clinical updates, student announcements, medical research"
        />
        <meta property="og:title" content="Updates - Rostov Medical University" />
        <meta
          property="og:description"
          content="Explore the latest news and upcoming events at Rostov Medical University, the leading medical university in Russia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rostgmu.com/logo.png?v=2" />
        <meta property="og:image" content="https://www.rostgmu.com/logo.png?v=2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
      </Helmet>

      {/* Title */}
      <h1 className="text-2xl lg:text-4xl font-bold text-center text-[#306185] mb-6">
        Rostov Medical University Updates
      </h1>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-6 mb-6">
        {['latest', 'upcoming'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-2 lg:px-6 lg:py-3 rounded-lg shadow-lg text-lg font-semibold transition-all ${
              activeTab === tab
                ? 'bg-[#306185] text-white hover:bg-[#306185]'
                : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
            }`}
          >
            {tab === 'latest' ? 'Latest Updates' : 'Upcoming Events'}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow-lg rounded-lg p-6 transition-all">
        {activeTab === 'latest' && (
          <div>
           
            <ul className="max-h-96 overflow-y-auto space-y-4">
              {latestUpdates.map((update, index) => (
                <li
                  key={index}
                  className="bg-gray-50 shadow-md p-4 rounded-lg hover:shadow-lg transition"
                >
                  {update}
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'upcoming' && (
          <div>
           
            <ul className="max-h-96 overflow-y-auto space-y-4">
              {upcomingEvents.map((event, index) => (
                <li
                  key={index}
                  className="bg-gray-50 shadow-md p-4 rounded-lg hover:shadow-lg transition"
                >
                  {event}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Updates;
