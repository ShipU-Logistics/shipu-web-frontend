import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Register(){
    const [step, setStep]=useState(1);
    
    const [formData, setformData] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        otp:"",
        agree:false,
    });

    const handleChange = (e)=> {
        const {name, value,type,checked} = e.target;
        setformData((prev) =>({
            ...prev,
            [name]:type ==="checkbox"? checked:value,
        }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/api/user/register", {
                ...formData,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
                
            },
            { withCredentials: true}
        );
            alert("Registration successful! please check your email for OTP");
            console.log("Form Data:", formData);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Registration failed." + error.response?.data?.error || "please try again later");
            setformData((prev) => ({
                ...prev,
                otp:"",
                
            }));
        }
    };

    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg flex max-w-4x1 w-full overflow-hidden">
                <div className="w-1/2 bg-[#f7f7f7] p-6 hidden md:flex flex-col justify-center items-center">
                <img src="https://one.delhivery.com/assets/create_banner.5fcb51b0.png"alt="ShipU" className="w-100 rounded-md"/>
                <h2 className="text-x1 font-semibold mt-4 text-center text-[#333]">Get your business shipments moving</h2>

                </div>
                <div className="w-1/2 flex items-center justify-center p-10 bg-white">
                <form onSubmit={handleSubmit} className="w-full max-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Your Account</h2>

                    <input name="name" type="text" placeholder="Enter full name" value={formData.name} onChange={handleChange} className="w-full border px-4 py-2 mb-4 rounded"/>

                    <input name="email" type="text" placeholder="mail@example.com" value={formData.email} onChange={handleChange} className="w-full border px-4 py-2 mb-4 rounded"/>

                    <input name="phone" type="text" placeholder="+91 Enter your mobile number " value={formData.phone} onChange={handleChange} className="w-full border px-4 py-2 mb-4 rounded"/>

                    <input name="password" type="password" placeholder="Min 6 characters" value={formData.password} onChange={handleChange} className="w-full border px-4 py-2 mb-2 rounded" />
                    
                    <div className="grid grid-cols-2 gap-1 text-xs text-gray-600 mb-4">
                        <p className="flex items-center gap-1">6+ characters</p>
                        <p className="flex items-center gap-1">Upper and lowercase</p>
                        <p className="flex items-center gap-1">one special characters</p>
                        <p className="flex items-center gap-1">one number</p>
                    </div>

                    <div className="flex items-start gap-2 mb-5 text-sm">
                        <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className="mt-1"/>
                        <label>By clicking on Create Account , you agree to Delivery's {''}
                            <span className="text-blue-600 ">Terms & Condition  </span>
                            and  
                            <span className="text-blue-600 "> Privacy & Policy</span>
                        </label>
                    </div>

                    <button
                        disabled={!formData.agree}
                        className={`w-full py-2 font-medium rounded text-white ${formData.agree ? "bg-blue-900" : "bg-blue-400 cursor-not-allowed"}`}
                    >
                        Create Account
                    </button>
                    <p className="mt-4">Already have an account?<a href ="/Business"className="text-blue-600">Login</a></p>
                    
                </form>
                
                </div>
                

            </div>





        </div>
        </>
    )

}