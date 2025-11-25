"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  text: string;
  subtitle: string;
  image: string;
}

const testimonials: Testimonial[] = [
  { name: "Aliza", text: "All of the staff are excellent...", subtitle: "Stayed with family", image: "/user1.png" },
  { name: "Asim", text: "The entire staff is outstanding...", subtitle: "Stayed with family", image: "/user2.png" },
  { name: "Zaib", text: "All of the staff are excellent", subtitle: "Stayed with family", image: "/user3.png" },
  { name: "Asim2", text: "Great service...", subtitle: "Stayed with family", image: "/user3.png" },
  { name: "Maaz", text: "Very polite staff...", subtitle: "Stayed with family", image: "/user3.png" },
  { name: "Adam", text: "Good experience...", subtitle: "Stayed with family", image: "/user3.png" },
];

export default function Review() {
  const ITEMS_PER_SLIDE = 3;
  const groups: Testimonial[][] = [];

  // Create groups of ITEMS_PER_SLIDE
  for (let i = 0; i < testimonials.length; i += ITEMS_PER_SLIDE) {
    groups.push(testimonials.slice(i, i + ITEMS_PER_SLIDE));
  }

  const totalSlides = groups.length;
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  const handleNext = () => setIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <div className="w-full py-10 bg-gray-100 flex flex-col items-center">
      <div className="relative w-full max-w-6xl px-6">
        {/* Only the slides are hidden — not arrows */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {groups.map((group, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full flex justify-between items-stretch"
              >
                {group.map((item, i) => (
                  <div key={i} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-6 flex">
                    <div className="bg-white shadow rounded-xl p-6 w-full flex flex-col justify-between">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {item.text}
                      </p>

                      <div className="flex mt-3 text-yellow-400 mb-3">★★★★★</div>
                      <hr className="my-3" />

                      <div className="flex items-center gap-3 mt-auto">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Fill empty slots for last slide */}
                {group.length < ITEMS_PER_SLIDE &&
                  Array.from({ length: ITEMS_PER_SLIDE - group.length }).map((_, k) => (
                    <div key={k} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-6" />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 border border-gray-300 transition"
          aria-label="Previous"
        >
          <span className="text-xl">‹</span>
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 border border-gray-300 transition"
          aria-label="Next"
        >
          <span className="text-xl">›</span>
        </button>
      </div>
    </div>
  );
}
