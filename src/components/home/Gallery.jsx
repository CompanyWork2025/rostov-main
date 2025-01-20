import React from 'react';

const images = [
  {
    id: 1,
    src: 'https://satyamevedu.co.in/wp-content/uploads/2023/04/WhatsApp-Image-2022-05-10-at-12.18.11-AM-1024x683.jpeg',
    alt: 'Image 1',
    caption: 'University Campus',
    cols: 'col-span-2',
    rows: 'row-span-2',
  },
  {
    id: 2,
    src: 'https://rostgmu.net/images/g/1.jfif',
    alt: 'Image 2',
    caption: 'Classrooms',
    cols: 'col-span-1',
    rows: 'row-span-1',
  },
  {
    id: 3,
    src: 'https://rostgmu.ru/wp-content/uploads/2024/04/IMG-20240417-WA0009-1.jpg',
    alt: 'Image 3',
    caption: 'Hostels',
    cols: 'col-span-1',
    rows: 'row-span-2',
  },
  {
    id: 4,
    src: 'https://rostgmu.ru/wp-content/uploads/2024/04/PHOTO-2024-04-25-19-34-31.jpg',
    alt: 'Image 4',
    caption: 'Laboratories',
    cols: 'col-span-2',
    rows: 'row-span-1',
  },
  {
    id: 5,
    src: 'https://rostgmu.ru/wp-content/uploads/2024/06/4-photo_2024-05-30_14-19-13.jpg',
    alt: 'Image 5',
    caption: 'Cafeteria',
    cols: 'col-span-1',
    rows: 'row-span-1',
  },
  {
    id: 6,
    src: 'https://kk-tehnikum.ru/images/foto_news/cher/1k.jpg',
    alt: 'Image 6',
    caption: 'Library',
    cols: 'col-span-1',
    rows: 'row-span-2',
  },
];

const Gallery = () => {
  return (
    <div className="px-4 py-8 bg-gray-100">
      <div className="grid grid-cols-3 grid-rows-3 gap-6 max-w-6xl mx-auto">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-lg shadow-lg group ${image.cols} ${image.rows}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-medium">
                {image.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
