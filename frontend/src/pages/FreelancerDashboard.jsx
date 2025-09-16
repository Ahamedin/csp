// src/pages/FreelancerDashboard.jsx
import React from "react";
import { FaWallet, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const completedProjects = [
  {
    id: 1,
    title: "E-commerce Website",
    client: "Priya",
    amount: 1500,
    rating: 5,
    review: "Delivered on time and excellent quality.",
  },
  {
    id: 2,
    title: "Mobile App Design",
    client: "Rahul",
    amount: 1200,
    rating: 4,
    review: "Good work, communication was clear.",
  },
  {
    id: 3,
    title: "Marketing Campaign",
    client: "Anita",
    amount: 1000,
    rating: 5,
    review: "Very professional and creative ideas.",
  },
];

function FreelancerDashboard() {
  const totalEarnings = completedProjects.reduce((a, c) => a + c.amount, 0);
  const averageRating =
    (completedProjects.reduce((a, c) => a + c.rating, 0) / completedProjects.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Freelancer Dashboard</h1>
          <Link
            to="/freelancer-profile"
            className="btn btn-primary hover:scale-105 transition-transform"
          >
            Edit Profile
          </Link>
        </div>

        {/* Profile Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="stat bg-white shadow rounded-lg p-6 hover:shadow-xl transition">
            <div className="stat-figure text-indigo-600">
              <FaWallet className="w-8 h-8" />
            </div>
            <div className="stat-title font-semibold">Total Earnings</div>
            <div className="stat-value text-indigo-600 text-2xl">₹{totalEarnings}</div>
            <div className="stat-desc">From {completedProjects.length} projects</div>
          </div>

          <div className="stat bg-white shadow rounded-lg p-6 hover:shadow-xl transition">
            <div className="stat-figure text-yellow-400">
              <FaStar className="w-8 h-8" />
            </div>
            <div className="stat-title font-semibold">Average Rating</div>
            <div className="stat-value text-yellow-400 text-2xl">{averageRating}</div>
            <div className="stat-desc">Based on client reviews</div>
          </div>
        </div>

        {/* Completed Projects */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Completed Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {completedProjects.map((project) => (
              <div
                key={project.id}
                className="card bg-white shadow-md hover:shadow-xl rounded-xl transition transform hover:-translate-y-1"
              >
                <div className="card-body">
                  <h3 className="card-title text-lg sm:text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600">
                    Client: <span className="font-medium">{project.client}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Amount: <span className="font-medium">₹{project.amount}</span>
                  </p>
                  <p className="mt-2 text-gray-700">{project.review}</p>
                  <div className="mt-3 flex">
                    {Array.from({ length: project.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-5 h-5 mr-1" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Feedback */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Client Feedback</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {completedProjects.map((project) => (
              <div
                key={project.id}
                className="card bg-white shadow-md border-l-4 border-indigo-600 rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <p className="italic text-gray-700">“{project.review}”</p>
                <div className="mt-3 flex">
                  {Array.from({ length: project.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5 mr-1" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-500 font-medium">— {project.client}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default FreelancerDashboard;
