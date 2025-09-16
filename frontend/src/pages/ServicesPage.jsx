import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Demo freelancers data
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
  const [locationDenied, setLocationDenied] = useState(false);

  // Try auto-detect location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);

          // Mocked location -> Replace with API call in production
          setCity("Chennai");
          setPincode("600001");

          // Filter freelancers automatically
          const results = freelancers.filter(
            (f) =>
              f.city.toLowerCase() === "chennai".toLowerCase() &&
              f.pincode === "600001"
          );
          setFiltered(results);
        },
        (error) => {
          console.warn("Location denied:", error.message);
          setLocationDenied(true);
        }
      );
    } else {
      setLocationDenied(true);
    }
  }, []);

  const handleSearch = () => {
    const results = freelancers.filter(
      (f) =>
        f.city.toLowerCase() === city.toLowerCase() &&
        f.pincode === pincode
    );
    setFiltered(results);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">

      <h2 className="text-center text-indigo-600 text-2xl font-extrabold tracking-wide mb-2">
        Your Task, Their Talent
      </h2>


      <h1 className="text-3xl font-bold text-center mb-8">
        Find Nearby Freelancers
      </h1>

      {/* If location is denied, show manual form */}
      {locationDenied && (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
          <label className="block mb-2 font-semibold">Select City</label>
          <input
            type="text"
            placeholder="Enter City (e.g., Chennai)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input input-bordered w-full mb-4"
          />

          <label className="block mb-2 font-semibold">Enter Pincode</label>
          <input
            type="text"
            placeholder="Enter Pincode (e.g., 600001)"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="input input-bordered w-full mb-4"
          />

          <button onClick={handleSearch} className="btn btn-primary w-full">
            Find Freelancers
          </button>
        </div>
      )}

      {/* Results */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.length > 0 ? (
          filtered.map((f) => (
            <Link
              key={f.id}
              to={`/freelancer/${f.id}`}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block"
            >
              <h2 className="text-xl font-semibold">{f.name}</h2>
              <p className="text-gray-600">{f.category}</p>
              <p className="text-gray-500">
                {f.city} - {f.pincode}
              </p>
              <p className="text-lg font-bold mt-2">{f.price}</p>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            {locationDenied
              ? "No freelancers found. Try another city/pincode."
              : "Detecting your location..."}
          </p>
        )}
      </div>
    </div>
  );
}
