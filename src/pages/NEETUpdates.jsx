import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const NEETUpdates = () => {
  const [activeTab, setActiveTab] = useState('latest');

  const latestUpdates = [
    'NEET 2025 exam date officially announced: May 5th, 2025.',
    'NTA opens NEET application form correction window from February 1st to February 10th, 2025.',
    'Revised NEET 2025 syllabus announced by NMC.',
    'Free mock test series for NEET now available on the official NTA portal.',
    'Top coaching institutes share their new study plans for NEET aspirants.',
    'Notification: Last date to apply for NEET 2025 without late fee is January 31st, 2025.',
    'Top 100 rankers of NEET 2024 featured in motivational videos.',
    'AIIMS announces updated criteria for UG medical admissions via NEET.',
    'NEET 2025 admit cards to be released on April 10th, 2025.',
    'Students achieve record success rates using AI-driven NEET practice platforms.',
  ];

  const upcomingEvents = [
    'Biology rapid-fire quiz session on February 20th, 2025.',
    'NEET 2025 All-India mock exam on March 1st, 2025 (free registration).',
    'Physics crash course begins February 18th, 2025, with top faculty.',
    'AIIMS career counseling webinar on March 10th, 2025.',
    'Time management strategies for NEET by Dr. P. Menon on February 22nd, 2025.',
    'NEET UG seat matrix breakdown session on February 28th, 2025.',
    'State-level NEET pre-counseling event for Maharashtra students on March 15th, 2025.',
    'Stress management seminar for NEET aspirants on March 5th, 2025.',
    'Online counseling FAQ live session on April 5th, 2025.',
    'Post-NEET roadmap to top medical colleges webinar on April 15th, 2025.',
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 via-white to-gray-100 min-h-screen">
      {/* SEO Helmet */}
      <Helmet>
        <title>NEET Updates 2025 | Latest News, Dates & Events</title>
        <meta
          name="description"
          content="Stay updated with NEET 2025 announcements, important dates, mock tests, webinars, and syllabus changes. Designed for NEET aspirants."
        />
        <meta
          name="keywords"
          content="NEET updates, NEET 2025, medical entrance exam, NEET preparation, NTA announcements, NEET mock tests"
        />
        <meta property="og:title" content="NEET Updates 2025 - Latest News & Events" />
        <meta
          property="og:description"
          content="Get the latest NEET 2025 news, including exam schedules, webinars, mock tests, and updates for aspiring medical students."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rostgmu.com" />
        <meta property="og:image" content="https://www.rostgmu.com/logo.png?v=2" />
        <meta property="og:locale" content="en_US" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
        <meta name="author" content="NEET Updates Team" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Page Header */}
      <h1
        className="text-2xl lg:text-4xl font-extrabold text-center text-green-800 mb-6"
        aria-label="NEET 2025 Updates and Events"
      >
        NEET 2025 Updates & Events
      </h1>

      {/* Tabs Section */}
      <div className="flex justify-center gap-6 mb-6" role="tablist" aria-label="Tab navigation">
        <button
          role="tab"
          aria-selected={activeTab === 'latest'}
          onClick={() => setActiveTab('latest')}
          className={`py-2 px-2 lg:px-6 lg:py-3 rounded-lg shadow-lg text-lg font-semibold transition-all ${
            activeTab === 'latest'
              ? 'bg-green-700 text-white hover:bg-green-800'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          Latest Updates
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'upcoming'}
          onClick={() => setActiveTab('upcoming')}
          className={`py-2 px-2 lg:px-6 lg:py-3 rounded-lg shadow-lg text-lg font-semibold transition-all ${
            activeTab === 'upcoming'
              ? 'bg-green-700 text-white hover:bg-green-800'
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          Upcoming Events
        </button>
      </div>

      {/* Content Section */}
      <div
        className="bg-white shadow-lg rounded-lg p-6"
        aria-live="polite"
        role="tabpanel"
        aria-labelledby={activeTab}
      >
        {activeTab === 'latest' && (
          <section>
            <h2 className="text-2xl lg:text-3xl text-center lg:text-left font-semibold text-green-600 mb-4">Latest NEET Updates</h2>
            <ul className="max-h-64 overflow-y-auto space-y-4">
              {latestUpdates.map((update, index) => (
                <li
                  key={index}
                  className="bg-gray-50 shadow-md p-4 rounded-lg hover:shadow-lg transition"
                >
                  {update}
                </li>
              ))}
            </ul>
          </section>
        )}
        {activeTab === 'upcoming' && (
          <section>
            <h2 className="text-2xl lg:text-3xl text-center lg:text-left font-semibold text-green-600 mb-4">Upcoming NEET Events</h2>
            <ul className="max-h-64 overflow-y-auto space-y-4">
              {upcomingEvents.map((event, index) => (
                <li
                  key={index}
                  className="bg-gray-50 shadow-md p-4 rounded-lg hover:shadow-lg transition"
                >
                  {event}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default NEETUpdates;
