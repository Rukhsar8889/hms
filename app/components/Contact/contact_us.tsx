"use client";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    prefix: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-white py-12">
      {/* SAME container width as navbar (logo ↔ Sign In) */}
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Description */}
        <p className="text-center text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
          Conatct Our Expert Team for the best hotel deals in Makkah and Madinah.
        </p>
        <p className="text-center text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
          Get Personalized Assistance and Guaranteed best Rates.
        </p>

        {/* Three Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="border border-teal-900 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-700 font-medium text-lg">
              marketing@alrefaa.co
            </p>
            <p className="text-gray-500 text-base">
              Response within 2 hours
            </p>
          </div>

          <div className="border border-teal-900 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-700 font-medium text-lg">
              +966 9200 10417
            </p>
            <p className="text-gray-500 text-base">
              24/7 Customer Support
            </p>
          </div>

          <div className="border border-teal-900 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold">Office Location</h3>
            <p className="text-gray-700 font-medium text-lg">
              Al Azzizyah, Makkah, Saudi Arabia
            </p>
            <p className="text-gray-500 text-base">
              Visit our local office
            </p>
          </div>

        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Get in Touch with Us!
          </h2>

          <form className="space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <select
                  name="prefix"
                  value={form.prefix}
                  onChange={handleChange}
                  required
                  className={`w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 appearance-none
                   ${form.prefix ? "text-gray-900" : "text-gray-400"}`}
                >
                  <option value="">Prefix</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Miss">Miss</option>
                </select>

                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                  ▼
                </span>
              </div>


              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your first name"
                className="border border-gray-300 rounded-lg px-4 py-3"
              />

              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
                className="border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your Email"
                className="border border-gray-300 rounded-lg px-4 py-3"
              />

              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                placeholder="Enter your Phone Number"
                className="border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="How can we help you?"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full"
              />
            </div>

            {/* Button */}
            <button
              type="button"
              className="bg-linear-to-r from-[#1F8593] to-[#052E39] text-white px-8 py-4 rounded-lg text-lg w-full md:w-56"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
