import { useState } from "react";
import {
  User,
  Package,
  MapPin,
  MessageSquare,
  Settings,
  Box,
  ShoppingCart,
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Profile");

  const menuItems = [
    { name: "Profile", icon: <User size={18} /> },
    { name: "My Orders", icon: <Package size={18} /> },
    { name: "Saved Addresses", icon: <MapPin size={18} /> },
    { name: "My Queries", icon: <MessageSquare size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 p-6">
      <div className="flex max-w-7xl mx-auto w-[80%]">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-2xl shadow-md p-4 h-80">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer ${
                  active === item.name
                    ? "bg-red-50 text-red-600 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className="flex-1 bg-white rounded-2xl shadow-md ml-6 p-6 h-80">
          {active === "Profile" && (
            <>
              <h2 className="text-lg font-semibold mb-6">Profile</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="MD TAUSIF ALAM"
                    className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-red-400 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      defaultValue="XXXXX9992"
                      disabled
                      className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Email ID
                    </label>
                    <input
                      type="email"
                      defaultValue="mdtausifalam9123@gmail.com"
                      className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-red-400 outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-800 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </>
          )}

          {active === "My Orders" && (
            <div>
              <div className="flex space-x-6 border-b pb-2 mb-4">
                <button className="font-medium text-black border-b-2 border-red-500 pb-1">
                  To Me
                </button>
                <button className="text-gray-600 hover:text-black">
                  From Me
                </button>
              </div>

              <div className="flex space-x-3 mb-6">
                <button className="px-4 py-2 rounded-full bg-black text-white text-sm">
                  All
                </button>
                <button className="px-4 py-2 rounded-full border text-gray-600 flex items-center space-x-1 text-sm">
                  <Box size={16} /> <span>Courier</span>
                </button>
                <button className="px-4 py-2 rounded-full border text-gray-600 flex items-center space-x-1 text-sm">
                  <ShoppingCart size={16} /> <span>Others</span>
                </button>
              </div>

              <div className="flex flex-col items-center justify-center text-gray-400 mt-10">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/748/748113.png"
                  alt="empty"
                  className="w-20 h-20 opacity-50"
                />
                <p className="mt-2 font-medium">Oops!</p>
                <p className="text-sm">No orders found</p>
              </div>
            </div>
          )}

          {active === "Saved Addresses" && (
            <p className="text-gray-600">📍 Your saved addresses will appear here.</p>
          )}

          {active === "My Queries" && (
            <p className="text-gray-600">💬 Your queries will be shown here.</p>
          )}

          {active === "Settings" && (
            <p className="text-gray-600">⚙️ Settings page coming soon.</p>
          )}
        </div>
      </div>
    </div>
  );
}
