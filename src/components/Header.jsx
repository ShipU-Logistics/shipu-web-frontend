
import { Link } from "react-router-dom";
import { useState } from "react";

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="px-4 py-2 hover:text-blue-600 font-medium">{title}</button>
      {open && (
        <div className="absolute bg-white border shadow-md mt-2 rounded-md z-10 min-w-[200px]">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="font-bold text-xl text-blue-600">
          shipU
        </Link>
        <div className="flex space-x-6">
          <Dropdown
            title="Services"
            items={[
              { label: "Express Parcel", to: "/express-parcel" },
              { label: "Warehousing", to: "/warehousing" },
              { label: "Part Truckload", to: "/Part-Truckload" },
              { label: "Full Truckload", to: "/Full-Truckload" },
              
            ]}
          />
          <Dropdown
            title="Solutions"
            items={[
              { label: "Personal Courier", to: "/Personal-Courier" },
            ]}
          />
          <Dropdown
            title="Partner"
            items={[
              { label: "Channel Partner", to: "/channel-partner" },
              { label: "Drop at Store", to: "/drop-store" },
              { label: "Become a Delivery Agent", to: "/delivery-agent" },
            ]}
          />
          <Dropdown
            title="Company"
            items={[
              { label: "About", to: "/about" },
              { label: "Careers", to: "/careers" },
              { label: "Newsroom", to: "/newsroom" },
            ]}
          />
          <Dropdown
            title="Track"
            items={[{ label: "Track Shipment", to: "/track-shipment" }]}
          />
          <Dropdown
            title="Support"
            items={[
              { label: "Customer Support", to: "/customer-support" },
              { label: "Raise an Issue", to: "/raise-issue" },
              { label: "FAQs", to: "/faqs" },
            ]}
          />
        </div>
      </nav>
    </header>
  );
}