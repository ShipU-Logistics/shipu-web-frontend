import { useState } from "react";

export default function TrackingSection() {
  const [activeTab, setActiveTab] = useState("Mobile");
  const [inputValue, setInputValue] = useState("");

  const tabs = ["Mobile", "AWB", "Order Id", "LRN"];
  const handleTabChange = async (tab) => {
    setActiveTab(tab);
    setInputValue("Mobile" === tab ? "" : ""); 
    const res = await fetch(`http://localhost:4000/api/send-otp?by=${tab}&value=${inputValue}`);
    if (res.ok) {
      const data = await res.json();
      alert(`Getting OTP for ${tab}: ${JSON.stringify(data)}`);
    } else {
      alert("Failed to get OTP");
    }
  };
  

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-6">
      
      <div className="md:w-1/2 text-center md:text-left p-6">
      <img src=""/>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Documents, Packages, and Everything Else
        </h2>
        <p className="text-gray-600 mb-4">Courier Anything, Anywhere!</p>
        <p className="text-lg text-red-500 mb-4 font-semibold">
          Get <span className="font-bold">25% Off</span> with DLV25
        </p>
        <p className="mb-2 text-gray-700">Download the Delhivery Direct App</p>
        <div className="flex justify-center md:justify-start gap-4 mt-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_(black)_SVG.svg"
            alt="App Store"
            className="h-10 cursor-pointer"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-10 cursor-pointer"
          />
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[400px] mt-10 md:mt-0">
        <h3 className="text-xl font-semibold mb-4 text-center">Track your order</h3>

        
        <div className="flex justify-around mb-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-3 py-2 text-sm font-medium ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setInputValue("");
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder={`Enter your ${activeTab}`}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          onClick={async () => {
            if (!inputValue.trim()) {
              alert(`Please enter your ${activeTab}`);
              return;
            }

            try {
              const res = await fetch("http://localhost:4000/api/send-otp", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  by: activeTab,
                  value: Mobile,
                }),
              });

              if (res.ok) {
                const data = await res.json();
                alert(`OTP Sent Successfully: ${data.otp || "Check your phone/email"}`);
                // You can also show OTP input field here for user to enter
              } else {
                const err = await res.text();
                alert("Failed to send OTP: " + err);
              }
            } catch (err) {
              alert("Error: " + err.message);
            }
          }}
        >
          Get OTP
        </button>

       
      </div>
    </div>
  );
};

