import React from 'react';
import { Helmet } from 'react-helmet';

// Import images
import img1 from '../assets/gallery1.jpeg';
import img2 from '../assets/gallery2.jpeg';
import img3 from '../assets/gallery3.jpeg';
import img4 from '../assets/gallery4.jpeg';
import img5 from '../assets/gallery5.jpeg';
import img6 from '../assets/gallery6.jpeg';
import img7 from '../assets/gallery7.jpeg';
import img8 from '../assets/gallery8.jpeg';
import img9 from '../assets/gallery9.jpeg';
import img10 from '../assets/gallery10.jpeg';
import img11 from '../assets/gallery11.jpeg';
import img12 from '../assets/gallery12.jpeg';
import img13 from '../assets/gallery13.jpeg';
import img14 from '../assets/gallery14.jpeg';
import img15 from '../assets/gallery15.jpeg';
import img16 from '../assets/gallery16.jpeg';
import img17 from '../assets/gallery17.jpeg';

// Create images array
const images = [
  { id: 1, src: img1, alt: 'Image 1 Description', caption: 'Image 1' },
  { id: 2, src: img2, alt: 'Image 2 Description', caption: 'Image 2' },
  { id: 3, src: img3, alt: 'Image 3 Description', caption: 'Image 3' },
  { id: 4, src: img4, alt: 'Image 4 Description', caption: 'Image 4' },
  { id: 5, src: img5, alt: 'Image 5 Description', caption: 'Image 5' },
  { id: 6, src: img6, alt: 'Image 6 Description', caption: 'Image 6' },
  { id: 7, src: img7, alt: 'Image 7 Description', caption: 'Image 7' },
  { id: 8, src: img8, alt: 'Image 8 Description', caption: 'Image 8' },
  { id: 9, src: img9, alt: 'Image 9 Description', caption: 'Image 9' },
  { id: 10, src: img10, alt: 'Image 10 Description', caption: 'Image 10' },
  { id: 11, src: img11, alt: 'Image 11 Description', caption: 'Image 11' },
  { id: 12, src: img12, alt: 'Image 12 Description', caption: 'Image 12' },
  { id: 13, src: img13, alt: 'Image 13 Description', caption: 'Image 13' },
  { id: 14, src: img14, alt: 'Image 14 Description', caption: 'Image 14' },
  { id: 15, src: img15, alt: 'Image 15 Description', caption: 'Image 15' },
  { id: 16, src: img16, alt: 'Image 16 Description', caption: 'Image 16' },
  { id: 17, src: img17, alt: 'Image 17 Description', caption: 'Image 17' },
];

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Photo Gallery | RSMU University</title>
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
            <h1 className="text-2xl lg:text-4xl text-white font-bold">Welcome to Our Photo Gallery</h1>
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
