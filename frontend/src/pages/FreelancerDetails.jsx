import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const freelancers = [
  { id: 1, name: "Arjun Kumar", price: "₹500", category: "Web Development" },
  { id: 2, name: "Priya Sharma", price: "₹400", category: "Graphic Design" },
  { id: 3, name: "Ravi Patel", price: "₹350", category: "Content Writing" },
];

export default function FreelancerDetails() {
  const { id } = useParams();
  const freelancer = freelancers.find((f) => f.id === parseInt(id));
  const [showBooking, setShowBooking] = useState(false);
  const [booked, setBooked] = useState(false);
  const [isNewClient, setIsNewClient] = useState(true);

  useEffect(() => {
    const clientStatus = localStorage.getItem("isReturningClient");
    if (clientStatus === "true") setIsNewClient(false);
  }, []);

  if (!freelancer)
    return <p className="text-center mt-20 text-gray-600">Freelancer not found.</p>;

  const handleBooking = (e) => {
    e.preventDefault();
    localStorage.setItem("isReturningClient", "true");
    setBooked(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{freelancer.name}</h1>
        <p className="text-indigo-600 font-medium mt-1">{freelancer.category}</p>
        <p className="text-xl sm:text-2xl font-semibold mt-4">Starting at {freelancer.price}</p>

        {/* About */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">About</h2>
          <p className="mt-2 text-gray-700">
            Experienced {freelancer.category} specialist with a proven track record of delivering high-quality work for clients.
          </p>
        </div>

        {/* Booking Button */}
        {!showBooking && !booked && (
          <button
            onClick={() => setShowBooking(true)}
            className="mt-8 w-full btn btn-primary hover:scale-105 transition-transform duration-300"
          >
            Book Now
          </button>
        )}

        {/* Booking Form */}
        {showBooking && !booked && (
          <div className="mt-8 p-6 border rounded-xl bg-gray-50 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Book {freelancer.name}</h2>
            <form onSubmit={handleBooking} className="grid gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
              <textarea
                placeholder="Project Details"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>

              {/* Advance Fee for New Clients */}
              {isNewClient && (
                <select className="select select-bordered w-full" required>
                  <option value="">Select Advance Fee</option>
                  <option value="19">₹19</option>
                  <option value="29">₹29</option>
                  <option value="49">₹49</option>
                </select>
              )}

              <button type="submit" className="btn btn-success w-full hover:scale-105 transition-transform duration-300">
                Confirm Booking
              </button>
            </form>
          </div>
        )}

        {/* Booking Confirmation */}
        {booked && (
          <div className="mt-8 p-6 bg-green-50 border border-green-300 rounded-xl text-center shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-green-700">🎉 Booking Confirmed!</h2>
            <p className="mt-2 text-gray-700">
              You’ve successfully booked {freelancer.name}.
              {isNewClient
                ? " Advance fee paid. Welcome aboard!"
                : " Since you’re a returning client, no advance fee required."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
