import { Link } from "react-router-dom";

export default function Flproductcard() {
  const freelancers = [
    { id: 1, name: "Arjun Kumar", price: "₹500", category: "Web Development" },
    { id: 2, name: "Priya Sharma", price: "₹400", category: "Graphic Design" },
    { id: 3, name: "Ravi Patel", price: "₹350", category: "Content Writing" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Available Freelancers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {freelancers.map((freelancer) => (
          <Link
            key={freelancer.id}
            to={`/freelancer/${freelancer.id}`}
            className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition block"
          >
            <h2 className="text-xl font-semibold">{freelancer.name}</h2>
            <p className="text-gray-600">{freelancer.category}</p>
            <p className="text-lg font-bold mt-2">{freelancer.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
