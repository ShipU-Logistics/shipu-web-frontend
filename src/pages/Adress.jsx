// AddressPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddressPage() {
  const [pickup, setPickup] = useState("");
  const [delivery, setDelivery] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (pickup && delivery) {
      navigate("/schedule");
    } else {
      alert("Please enter both addresses");
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Left side */}
      <div className="col-span-1 border-r pr-4">
        <h2 className="text-lg font-semibold mb-4">Things to Keep in Mind</h2>
        <ul className="space-y-3 text-gray-600 text-sm">
          <li>📦 Package Weight – Ensure weight is accurate.</li>
          <li>🚫 Restricted/Illegal items are not allowed.</li>
          <li>🛡 Proper packaging ensures safe delivery.</li>
          <li>➕ Multiple packages? Add them separately.</li>
        </ul>
        <img
          src="https://via.placeholder.com/300x150.png?text=Ad+Banner"
          alt="Ad Banner"
          className="rounded-lg shadow mt-6"
        />
      </div>

      {/* Right side */}
      <div className="col-span-2 pl-4">
        <h2 className="text-lg font-semibold mb-4">Enter Address</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Add Pickup Address"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Add Delivery Address"
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}