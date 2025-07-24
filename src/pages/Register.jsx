import React from "react";
import { useState } from "react";

export default function Register(){
    
    const [formData, setformData] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
    });

    const handleChange = (e)=> {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("Form Data:",formData);
    };

    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg flex max-w-4x1 w-full overflow-hidden">
                <div className="w-1/2 bg-[#f7f7f7] p-6 hidden md:flex flex-col justify-center items-center">
                <img src="https://one.delhivery.com/assets/create_banner.5fcb51b0.png"alt="ShipU" className="w-60 rounded-md"/>
                <h2 className="text-x1 font-semibold mt-4 text-center text-[#333]">Get your business shipments moving</h2>

                </div>
                <div className="w-1/2 flex items-center justify-center p-10 bg-white">
                <form onSubmit={handleSubmit} className="w-full max-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Your Account</h2>

                    <input name="name" type="text" placeholder="Enter full name" value={formData.name} onChange={handleChange} className="w-full border px-4 py-2 mb-4 rounded"/>

                    <input name="email" type="text" placeholder="mail@example.com" value={formData.email} onChange={handleChange} className="w-full border px-4 py-2 mb-4 rounded"/>

                    <input name="phone" type="text" placeholder="+91 Enter your mobile number " value={formData.phone} onChange={handleChange} className="w-full border px-4 py-2 mb-4 rounded"/>

                    <input name="password" type="password" placeholder="Min 6 characters" value={formData.password} onChange={handleChange} className="w-full border px-4 py-2 mb-2 rounded" />
                    <div className="bg-gray-100 border pt-2">
                    <ul className="text-xs flex gap-9 text-gray-600 mb-4 pl-5 list-disc">
                        <li>6+ characters</li>
                        <li>Upper and lowercase</li>
                    </ul>
                    <ul className="text-xs flex gap-9 text-gray-600 mb-4 pl-5 list-disc ">
                        <li>One special characters</li>
                        <li>One number </li>
                    </ul>
                    </div>
                    
                </form>
                
                </div>
                

            </div>
        </div>
        </>
    )

}