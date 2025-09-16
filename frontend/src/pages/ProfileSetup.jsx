import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileSetup() {
  const navigate = useNavigate();
  const [services, setServices] = useState([{ title: "", description: "", price: "" }]);

  const handleChange = (index, e) => {
    const newServices = [...services];
    newServices[index][e.target.name] = e.target.value;
    setServices(newServices);
  };

  const addService = () =>
    setServices([...services, { title: "", description: "", price: "" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/freelancer-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-10 px-4">
      <div className="card w-full max-w-2xl bg-base-100 shadow-2xl border rounded-2xl p-6 sm:p-8">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4 sm:mb-6">
            🎯 Setup Your Professional Profile
          </h2>
          <p className="text-center text-gray-500 mb-6 sm:mb-8">
            Add your services, descriptions, and pricing so clients can discover your work.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-5 bg-indigo-50 rounded-xl border border-indigo-100 shadow-sm space-y-3"
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Service Title (e.g., Web Development)"
                  value={service.title}
                  onChange={(e) => handleChange(index, e)}
                  className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400 transition"
                  required
                />
                <textarea
                  name="description"
                  placeholder="Service Description"
                  value={service.description}
                  onChange={(e) => handleChange(index, e)}
                  className="textarea textarea-bordered w-full focus:ring-2 focus:ring-indigo-400 transition"
                  rows="3"
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price (₹)"
                  value={service.price}
                  onChange={(e) => handleChange(index, e)}
                  className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400 transition"
                  required
                />
              </div>
            ))}

            <div className="flex justify-end">
              <button
                type="button"
                onClick={addService}
                className="btn btn-outline btn-success hover:scale-105 transition-transform"
              >
                ➕ Add Another Service
              </button>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full mt-4 text-lg font-semibold hover:scale-105 transition-transform"
            >
              🚀 Finish Setup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetup;
