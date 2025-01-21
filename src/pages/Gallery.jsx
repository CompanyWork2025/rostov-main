import React from 'react';
import { Helmet } from 'react-helmet';

const images = [
  {
    id: 1,
    src: 'https://satyamevedu.co.in/wp-content/uploads/2023/04/WhatsApp-Image-2022-05-10-at-12.18.11-AM-1024x683.jpeg',
    alt: 'RSMU University Campus building with a lush green field in the foreground',
    caption: 'University Campus',
  },
  {
    id: 2,
    src: 'https://rostgmu.net/images/g/1.jfif',
    alt: 'Students celebrating during a university function',
    caption: 'University Function',
  },
  {
    id: 3,
    src: 'https://rostgmu.ru/wp-content/uploads/2024/04/IMG-20240417-WA0009-1.jpg',
    alt: 'Cultural festival with students performing on stage',
    caption: 'Cultural Festival',
  },
  {
    id: 4,
    src: 'https://rostgmu.ru/wp-content/uploads/2024/04/PHOTO-2024-04-25-19-34-31.jpg',
    alt: 'Flags representing various countries at an international event',
    caption: 'Celebrating Diversity',
  },
  {
    id: 5,
    src: 'https://rostgmu.ru/wp-content/uploads/2024/06/4-photo_2024-05-30_14-19-13.jpg',
    alt: 'Students studying at the well-equipped RSMU Library',
    caption: 'Library and Resources',
  },
  {
    id: 6,
    src: 'https://kk-tehnikum.ru/images/foto_news/cher/1k.jpg',
    alt: 'A classroom with a teacher delivering a lecture',
    caption: 'Interactive Classrooms',
  },
  {
    id: 7,
    src: 'https://www.rostgmu.net/images/g/2.jfif',
    alt: 'Students performing a traditional dance at a university event',
    caption: 'Traditional Dance Performance',
  },
];

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | RSMU University</title>
        <meta
          name="description"
          content="Browse the Gallery at RSMU University and explore vibrant images of campus events, cultural festivals, academic facilities, and student achievements."
        />
        <meta name="keywords" content="RSMU University Gallery, campus photos, cultural events, student life, academic facilities, university celebrations" />
        <meta property="og:title" content="Gallery | RSMU University" />
        <meta
          property="og:description"
          content="Explore our gallery featuring stunning visuals of campus life, events, and cultural festivals at RSMU University."
        />
        <meta property="og:image" content="https://rostgmu.net/images/g/1.jfif" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rsmu-university.com/gallery" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | RSMU University" />
        <meta
          name="twitter:description"
          content="Discover the vibrant campus life and student achievements through our photo gallery."
        />
        <meta name="twitter:image" content="https://rostgmu.net/images/g/1.jfif" />
        <link rel="canonical" href="https://www.rsmu-university.com/gallery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "RSMU University Gallery",
            description:
              "Explore vibrant images showcasing campus life, student activities, and university events at RSMU University.",
            image: images.map((img) => img.src),
          })}
        </script>
      </Helmet>

      <div className="bg-gray-100">
        <div className="relative w-full h-64">
          <img
            src="https://gmfadmission.in/wp-content/uploads/2022/08/rostov-state-medical-university.jpeg"
            alt="RSMU University Banner showcasing the main campus"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl lg:text-4xl text-white font-bold">Welcome to Our Gallery</h1>
          </div>
        </div>

        <div className="px-4 py-8 max-w-6xl mx-auto">
          <h2 className="text-2xl text-center font-semibold mb-4">Discover Moments That Define Us</h2>
          <p className="text-gray-700 text-center mb-8">
            Explore RSMU University's vibrant campus life through stunning visuals showcasing events, facilities, and student
            achievements.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <figure key={image.id} className="relative rounded-lg overflow-hidden group shadow-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-center font-medium transition-opacity duration-300 p-4">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
