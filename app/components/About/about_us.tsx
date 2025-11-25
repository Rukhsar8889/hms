export default function AboutUs() {
  return (
    <section className="w-full bg-white py-12">
      {/* 👇 Match this container to your navbar: max-w + px */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Top Description */}
        <p className="text-center text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          AL-Riffa Is A Dedicated Online Platform Designed To Help Umrah Pilgrims
          Discover And Book The Best Hotels Near Al-Masjid An-Nabawi In Madinah
          And The Grand Mosque In Makkah. Whether You're Performing Umrah Or
          Visiting Saudi Arabia For A Spiritual Journey, Tazamun Makes Finding
          And Reserving Your Ideal Accommodation Simple, Trustworthy, And
          Affordable.
        </p>

        {/* Three Stats Boxes */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-teal-900 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold">Worldwide</h3>
            <p className="text-gray-700 font-medium">Happy Customers</p>
            <p className="text-gray-500 text-sm">Pilgrims served worldwide</p>
          </div>

          <div className="border border-teal-900 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold">4.9/5</h3>
            <p className="text-gray-700 font-medium">Customer Rating</p>
            <p className="text-gray-500 text-sm">Based on verified reviews</p>
          </div>

          <div className="border border-teal-900 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold">100+</h3>
            <p className="text-gray-700 font-medium">Partner Hotels</p>
            <p className="text-gray-500 text-sm">
              Across Makkah and Madinah
            </p>
          </div>
        </div>

        {/* Goals – Mission – Vision */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Our Goals */}
          <div className="border rounded-xl p-6 text-center">
            <h3 className="text-teal-900 font-semibold text-lg mb-2">
              Our Goals
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              AL-Riffa offers pilgrims verified hotels near Al-Masjid al-Haram
              and Al-Masjid an-Nabawi with transparent pricing, reliable
              service, and a seamless booking experience, ensuring comfort and
              peace of mind so they can focus on their spiritual journey.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-teal-900 text-white rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Mission</h3>
            <p className="text-sm leading-relaxed">
              To simplify and enhance the spiritual journey of Umrah pilgrims by
              providing a seamless, trustworthy, and affordable hotel booking
              experience near the holy sites of Makkah and Madinah.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-black text-white rounded-xl p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Vision</h3>
            <p className="text-sm leading-relaxed">
              To become the most trusted and preferred online platform for
              pilgrims worldwide, connecting them with quality accommodations
              and exceptional hospitality that complement their sacred journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
