import React from 'react';
import { Helmet } from 'react-helmet';

// Replace image data with YouTube video details (ID, title, description)
const videos = [
  {
    id: 1,
    videoId: 'nOnWMqkB1K0',  // YouTube video ID
    title: 'RSMU University Campus Tour',
    description: 'A guided tour of the beautiful RSMU University campus.',
  },
  {
    id: 2,
    videoId: 'ZB_iDVgJR7E',
    title: 'Cultural Festival Highlights',
    description: 'Highlights of the cultural festivals held at RSMU.',
  },
  {
    id: 3,
    videoId: 'CaHIMJU0AWk',
    title: 'Video Title 1',  // Adjust the title as needed
    description: 'Description of video 1.',  // Adjust the description as needed
  },
  {
    id: 4,
    videoId: 'QLKx3wikvv4',
    title: 'Video Title 2',  // Adjust the title as needed
    description: 'Description of video 2.',  // Adjust the description as needed
  },
  {
    id: 5,
    videoId: 'CniULD4Jt0I',
    title: 'Video Title 3',  // Adjust the title as needed
    description: 'Description of video 3.',  // Adjust the description as needed
  },
  {
    id: 6,
    videoId: 'Vei0Ozu-Cz4',
    title: 'Video Title 4',  // Adjust the title as needed
    description: 'Description of video 4.',  // Adjust the description as needed
  },
];

const VideoGallery = () => {
  return (
    <>
      <Helmet>
        <title>Video Gallery | RSMU University</title>
        <meta
          name="description"
          content="Browse the Gallery at RSMU University and explore vibrant YouTube videos of campus events, cultural festivals, academic facilities, and student achievements."
        />
        <meta name="keywords" content="RSMU University Video Gallery, campus videos, cultural events, student life, academic facilities, university celebrations" />
        <meta property="og:title" content="Gallery | RSMU University" />
        <meta
          property="og:description"
          content="Explore our video gallery featuring stunning visuals of campus life, events, and cultural festivals at RSMU University."
        />
        <meta property="og:image" content="https://rostgmu.net/images/g/1.jfif" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rsmu-university.com/gallery" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | RSMU University" />
        <meta
          name="twitter:description"
          content="Discover the vibrant campus life and student achievements through our YouTube video gallery."
        />
        <meta name="twitter:image" content="https://rostgmu.net/images/g/1.jfif" />
        <link rel="canonical" href="https://www.rsmu-university.com/gallery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGallery",
            name: "RSMU University Video Gallery",
            description:
              "Explore vibrant videos showcasing campus life, student activities, and university events at RSMU University.",
            video: videos.map((video) => ({
              "@type": "VideoObject",
              name: video.title,
              description: video.description,
              url: `https://www.youtube.com/watch?v=${video.videoId}`,
            })),
          })}
        </script>
      </Helmet>

      <div className="bg-gray-100">
        <div className="relative w-full h-64">
          <img
            src="https://i.pinimg.com/originals/16/03/fb/1603fb7077abb9093f4af305b4e5ce79.gif"
            alt="RSMU University Banner showcasing the main campus"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-2xl lg:text-4xl text-white font-bold">Welcome to Our Video Gallery</h1>
          </div>
        </div>

        <div className="px-4 py-8 max-w-7xl mx-auto">
          <h2 className="text-2xl text-center font-semibold mb-4">Discover Moments That Define Us</h2>
          <p className="text-gray-700 text-center mb-8">
            Explore RSMU University's vibrant campus life through YouTube videos showcasing events, facilities, and student achievements.
          </p>

          {/* Video Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <figure key={video.id} className="relative rounded-lg overflow-hidden group shadow-md h-64 w-full">
                {/* YouTube Video Embed */}
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  width="100%"
                  height="100%"
                  className="transition-transform duration-300 group-hover:scale-105"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
