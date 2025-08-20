// Layout.jsx
import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-[#1e1e2f]">DELHIVERY</h1>
        <nav className="flex gap-6 text-gray-500 font-medium">
          <NavLink
            to="/Address"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-black"
            }
          >
            Address
          </NavLink>
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-black"
            }
          >
            Schedule
          </NavLink>
          <NavLink
            to="/summary"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-black"
            }
          >
            Summary
          </NavLink>
        </nav>
      </header>

      {/* Page Content */}
      <div className="w-full max-w-4xl bg-white mt-6 rounded-2xl shadow-lg p-6">
        <Outlet />
      </div>
    </div>
  );
}