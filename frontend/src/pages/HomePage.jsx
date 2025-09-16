import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomePage({ isLoggedIn }) {
  const [showHireOptions, setShowHireOptions] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative flex flex-col sm:flex-col items-start sm:items-center justify-start sm:justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden py-20 sm:py-32 md:py-48">
  <h1 className="absolute text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] font-extrabold text-gray-300 tracking-widest select-none text-center w-full z-0">
    FREELANCER
  </h1>

  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mt-0 sm:mt-7 w-full">
    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug">
      Hire Freelancers. <span className="text-indigo-600">Get Work Done Easily.</span>
    </h2>
    <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto px-2">
      Find trusted freelancers for <span className="text-indigo-600 font-semibold">technical</span> and <span className="text-indigo-600 font-semibold">non-technical</span> tasks with <span className="text-indigo-600 font-semibold">lowest fees</span> and <span className="text-indigo-600 font-semibold">quick booking</span>.
    </p>

    {/* Buttons */}
    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/services"
                  className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
                >
                  Find a Freelancer
                </Link>
                <Link
                  to="/categories"
                  className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition transform hover:-translate-y-1"
                >
                  Explore Services
                </Link>
              </>
            ) : showHireOptions ? (
              <>
                <Link
                  to="/services"
                  className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
                >
                  Find a Freelancer
                </Link>
                <Link
                  to="/categories"
                  className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition transform hover:-translate-y-1"
                >
                  Explore Services
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowHireOptions(true)}
                  className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition transform hover:-translate-y-1"
                >
                  Hire a Freelancer
                </button>
                <Link
                  to="/freelancer-signup"
                  className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition transform hover:-translate-y-1"
                >
                  Become a Freelancer
                </Link>
              </>
            )}
          </div>
  </div>
</section>

     

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Popular Services</h2>
          <p className="mt-2 text-gray-600">Choose from skilled freelancers across fields</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {["Web Development", "Content Writing", "Digital Marketing"].map((service, idx) => (
              <div key={idx} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition">
                <h3 className="text-lg font-semibold">{service}</h3>
                <p className="mt-2 text-gray-600">
                  {service === "Web Development" && "Hire developers for websites, apps & platforms."}
                  {service === "Content Writing" && "Get blogs, scripts, resumes & more done quickly."}
                  {service === "Digital Marketing" && "Boost your brand with SEO & social marketing."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Recent Works by Our Freelancers</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-1 transition">
                <img
                  src="https://via.placeholder.com/400x250"
                  alt="Project"
                  className="rounded-md w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">{item === 1 ? "E-commerce Website" : item === 2 ? "Mobile App Design" : "Marketing Campaign"}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Clients Say</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {[
              { text: "I hired a developer within minutes. Super affordable and smooth process.", author: "Priya, Business Owner" },
              { text: "FreelanceHub helped me get a writer at a fraction of the cost of other sites.", author: "Rahul, Startup Founder" }
            ].map((t, idx) => (
              <blockquote key={idx} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                <p className="text-gray-600">“{t.text}”</p>
                <footer className="mt-4 text-sm font-semibold">– {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-gray-600">Need help hiring? Reach out anytime.</p>
          <form className="mt-6 grid gap-4">
            <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
            <textarea placeholder="Your Message" className="textarea textarea-bordered w-full"></textarea>
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition transform hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2025 FreelanceHub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
