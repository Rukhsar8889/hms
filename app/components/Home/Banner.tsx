"use client";
import { useState, useRef, useEffect, useState as useReactState } from "react";
import { useRouter } from "next/navigation";

type GuestDetails = {
  room: number;
  adult: number;
  children: number;
};

export default function Banner() {
  const router = useRouter();
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guestDetails, setGuestDetails] = useState<GuestDetails>({
    room: 0,
    adult: 0,
    children: 0,
  });
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const [headerHeight, setHeaderHeight] = useReactState(0);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleSearch = () => {
    const city = "Makkah";
    router.push(
      `/search?city=${encodeURIComponent(city)}&arrival=${encodeURIComponent(
        arrival
      )}&departure=${encodeURIComponent(
        departure
      )}&rooms=${guestDetails.room}&adults=${guestDetails.adult}&children=${guestDetails.children}`
    );
  };

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    const handleResize = () => {
      if (header) setHeaderHeight(header.offsetHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowGuestPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeDetail = (key: keyof GuestDetails, delta: number) => {
    setGuestDetails((prev) => {
      const next = { ...prev };
      next[key] = Math.max(0, prev[key] + delta);
      return next;
    });
  };

  return (
    <section
      className="relative h-[420px] w-full flex items-center justify-center overflow-hidden transition-all duration-300"
      style={{ marginTop: `${headerHeight}px` }}
    >
      <img
        src="/banner.jpg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 text-center text-white max-w-6xl w-full px-3 scale-90">
        <h1 className="text-2xl md:text-5xl font-semibold mb-2">
          Book Your Hotel With Ease Today.
        </h1>
        <p className="mb-3 text-sm md:text-base">
          Let us help you find the perfect stay for your Hajj and Umrah journey.
        </p>

        {/* Search Form */}
        <div className="flex flex-col md:flex-row gap-2 justify-center items-stretch rounded-lg p-2 shadow-md text-black">
          {/* City */}
          <div className="relative flex-1 bg-white flex items-center rounded border border-gray-300 min-h-12 px-3 pt-5 pb-1">
            <label className="absolute left-3 top-2.5 text-gray-500 text-xs">
              City
            </label>
            <span className="text-gray-700 text-ms mt-0.5">Makkah</span>
          </div>

          {/* Arrival Date */}
          <div className="relative flex-1 bg-white flex items-center rounded border border-gray-300 min-h-12">
            <div className="w-full relative">
              <input
                type="date"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                className="peer px-3 pt-5 pb-1 w-full text-ms rounded focus:outline-none"
              />
              <label className="absolute left-3 top-2.5 text-gray-500 text-xs">
                Arrival Date
              </label>
            </div>
          </div>

          {/* Departure Date */}
          <div className="relative flex-1 bg-white flex items-center rounded border border-gray-300 min-h-12">
            <div className="w-full relative">
              <input
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="peer px-3 pt-5 pb-1 w-full text-ms rounded focus:outline-none"
              />
              <label className="absolute left-3 top-2.5 text-gray-500 text-xs">
                Departure Date
              </label>
            </div>
          </div>

          {/* Guests & Rooms */}
          <div
            className="relative flex-1 bg-white flex items-center rounded border border-gray-300 min-h-12"
            ref={popupRef}
          >
            <div className="w-full relative">
              <button
                type="button"
                onClick={() => setShowGuestPopup((s) => !s)}
                className="peer w-full text-left px-3 pt-5 pb-1 rounded focus:outline-none"
              >
                <label className="absolute left-3 top-2.5 text-gray-500 text-xs">
                  Guests & Rooms
                </label>
                <div className="text-black text-xs mt-0.5 truncate">
                  {guestDetails.room} Room{guestDetails.room !== 1 ? "s" : ""},{" "}
                  {guestDetails.adult} Adult{guestDetails.adult !== 1 ? "s" : ""},{" "}
                  {guestDetails.children} Child
                  {guestDetails.children !== 1 ? "ren" : ""}
                </div>
              </button>

              {showGuestPopup && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-full p-2 text-xs z-20">
                  {(
                    [
                      { label: "Room", key: "room" },
                      { label: "Adult", key: "adult" },
                      { label: "Children", key: "children" },
                    ] as { label: string; key: keyof GuestDetails }[]
                  ).map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between mb-1.5 last:mb-0"
                    >
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <div className="flex items-center space-x-1">
                        <button
                          type="button"
                          onClick={() => changeDetail(item.key, -1)}
                          className="px-1.5 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="w-4 text-center">
                          {guestDetails[item.key]}
                        </span>
                        <button
                          type="button"
                          onClick={() => changeDetail(item.key, 1)}
                          className="px-1.5 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between mt-2">
                    <button
                      type="button"
                      onClick={() =>
                        setGuestDetails({ room: 0, adult: 0, children: 0 })
                      }
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-xs font-medium"
                    >
                      Reset
                    </button>
                    <div className="space-x-2">
                      <button
                        type="button"
                        onClick={() => setShowGuestPopup(false)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-xs font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowGuestPopup(false)}
                        className="px-3 py-1 bg-gray-500 text-white rounded text-xs font-medium"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Button */}
          <div className="flex flex-col justify-end">
            <button
              onClick={handleSearch}
              className="bg-[#EF4050] hover:bg-[#d93848] text-white px-10 py-1.5 rounded transition w-full md:w-auto h-full text-ms font-medium"
            >
              Search Hotels
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
