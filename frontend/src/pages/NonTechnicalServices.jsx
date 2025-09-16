import React, { useState } from "react";
import { Link } from "react-router-dom";

const freelancers = [
  { id: 1, name: "Suresh Kumar", category: "Plumber", city: "Chennai", pincode: "600001", price: "₹300" },
  { id: 2, name: "Manoj Singh", category: "Electrician", city: "Chennai", pincode: "600002", price: "₹400" },
  { id: 3, name: "Anil Yadav", category: "Carpenter", city: "Mumbai", pincode: "400001", price: "₹500" },
  { id: 4, name: "Vikram Patel", category: "Plumber", city: "Mumbai", pincode: "400002", price: "₹350" },
];

export default function NonTechnicalServices() {
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleSearch = () => {
    const results = freelancers.filter(
      (f) =>
        f.city.toLowerCase() === city.toLowerCase() &&
        f.pincode === pincode
    );
    setFiltered(results);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Find Non-Technical Freelancers
      </h1>

      {/* Search Form */}
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <label className="block mb-2 font-semibold text-gray-700">City</label>
        <input
          type="text"
          placeholder="Enter City (e.g., Chennai)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input input-bordered w-full mb-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />

        <label className="block mb-2 font-semibold text-gray-700">Pincode</label>
        <input
          type="text"
          placeholder="Enter Pincode (e.g., 600001)"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="input input-bordered w-full mb-4 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />

        <button
          onClick={handleSearch}
          className="btn btn-primary w-full hover:scale-105 transition-transform duration-300"
        >
          Find Freelancers
        </button>
      </div>

      {/* Results */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.length > 0 ? (
          filtered.map((f) => (
            <Link
              key={f.id}
              to={`/freelancer/${f.id}`}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform"
            >
              <h2 className="text-xl font-semibold text-gray-900">{f.name}</h2>
              <p className="text-gray-600 mt-1">{f.category}</p>
              <p className="text-gray-500">{f.city} - {f.pincode}</p>
              <p className="text-lg font-bold text-indigo-600 mt-3">{f.price}</p>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500 mt-6">
            No freelancers found. Try another city or pincode.
          </p>
        )}
      </div>
    </div>
  );
}
