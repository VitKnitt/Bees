import { useState } from "react";
import g1 from '../../img/bees/g1.jpg'
import g2 from '../../img/bees/g2.jpg'
import g3 from '../../img/bees/g3.jpg'

const images = [
  g1,
  g2,
  g3
];

export default function GalleryPhoto() {
 const [current, setCurrent] = useState(0);

  return (
    <div className="relative bg-primary w-full max-w-2xl mx-auto">
      {/* wrapper s pevnou výškou */}
      <div className="relative w-full h-[40rem] overflow-hidden rounded-lg shadow-lg">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* tečky */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? "bg-blue-500 scale-125"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
