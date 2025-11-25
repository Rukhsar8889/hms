"use client";

export default function FAQ() {
  return (
    <div className="w-full bg-[#0F7C8F] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-white rounded-2xl p-10 w-full shadow-md">
          <h1 className="text-4xl font-bold mb-2">FAQs</h1>
          <p className="text-gray-600 mb-8">
            FAQs for The Ritz-Carlton Residences, Waikiki Beach
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg">
                What are the check-in and check-out times at The Ritz-Carlton
                Residences, Waikiki Beach?
              </h3>
              <p className="text-gray-700 mt-1">
                Check-in is from 3:00 PM, and check-out is until 12:00 PM.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Where is the The Ritz-Carlton Residences, Waikiki Beach
                property located?
              </h3>
              <p className="text-gray-700 mt-1">
                The property is located in Waikiki Beach, Honolulu.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                What are the dining options available at the hotel?
              </h3>
              <p className="text-gray-700 mt-1">
                Guests can enjoy a range of dining options including local
                cuisine, fine dining, and casual cafes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                What are the top amenities available at the hotel?
              </h3>
              <p className="text-gray-700 mt-1">
                Amenities include a rooftop pool, spa, fitness center, and free
                Wi-Fi.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Are there rooms designated for smoking or non-smoking?
              </h3>
              <p className="text-gray-700 mt-1">
                Yes, the hotel provides both smoking and non-smoking rooms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
