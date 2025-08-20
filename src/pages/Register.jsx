import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful!" || data.message);
        console.log("Response:", data);
      } else {
       alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed: " + data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 bg-[#f7f7f7] p-6 hidden md:flex flex-col justify-center items-center">
          <img
            src="https://one.delhivery.com/assets/create_banner.5fcb51b0.png"
            alt="ShipU"
            className="w-full rounded-md"
          />
          <h2 className="text-xl font-semibold mt-4 text-center text-[#333]">
            Get your business shipments moving
          </h2>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white">
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Create Your Account
            </h2>

            <input
              name="name"
              type="text"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 mb-4 rounded"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="mail@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 mb-4 rounded"
              required
            />

            <input
              name="phone"
              type="tel"
              placeholder="+91 Enter your mobile number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 mb-4 rounded"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password (6+ characters)"
              value={formData.password}
              onChange={handleChange}
              className="w-full border px-4 py-2 mb-2 rounded"
              required
              minLength={6}
            />

            <div className="grid grid-cols-2 gap-1 text-xs text-gray-600 mb-4">
              <p className="flex items-center gap-1">6+ characters</p>
              <p className="flex items-center gap-1">Upper and lowercase</p>
              <p className="flex items-center gap-1">One special character</p>
              <p className="flex items-center gap-1">One number</p>
            </div>

            <div className="flex items-start gap-2 mb-5 text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />
              <label>
                By clicking on Create Account, you agree to Delhivery's{" "}
                <span className="text-blue-600">Terms & Conditions</span> and{" "}
                <span className="text-blue-600">Privacy Policy</span>.
              </label>
            </div>

            <button
              type="submit"
              disabled={!formData.agree}
              className={`w-full py-2 font-medium rounded text-white ${
                formData.agree
                  ? "bg-blue-900 hover:bg-blue-800"
                  : "bg-blue-400 cursor-not-allowed"
              }`}
            >
              Create Account
            </button>

            <p className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 font-medium">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
