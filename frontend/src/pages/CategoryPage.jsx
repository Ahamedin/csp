import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Web Development", icon: "💻" },
  { id: 2, name: "Graphic Design", icon: "🎨" },
  { id: 3, name: "Content Writing", icon: "✍️" },
  { id: 4, name: "Digital Marketing", icon: "📢" },
  { id: 5, name: "Non-Technical Services", icon: "🛠️" },
];

export default function CategoryPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-900">
        Choose a Category
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => navigate(`/freelancers/${cat.name}`)}
            className="bg-white rounded-2xl shadow-md p-8 text-center cursor-pointer hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <div className="text-6xl sm:text-7xl mb-4">{cat.icon}</div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
              {cat.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
