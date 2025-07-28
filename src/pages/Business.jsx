import react from 'react';
import { useState } from 'react';

export default function Business(){
    const [email, setEmail] = useState('')
    const handleProceed = () => {
        alert('Email entered: ${email}');
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleProceed();
    };
    return (
    <>
    <div className='min-h-screen w-screen h-screen flex items-center justify-center bg-gray-100 px-4 mt-20'>
        <div className='flex flex-col lg:flex-row bg-white shadow-xl rounded-lg overflow-hidden h-screen w-full'>

            <div className='w-full lg:w-2/3 p-8 space-y-6'>
            <h2 className='text-2x1 font-semibold text-gray-800'>Supercharge your shipping experience</h2>
            <ul className='space-y-3 text-gray-600'>  
                <li>Deliver nationwide - reach every corner of india </li>
                <li>Access Parcel, shipments from a single account</li>
                <li>Integrate and sync orders from your website in one  click</li>
                <li>Reduce returns by up to 40% with our AI-Driven RTO predictor</li>
                <li>Receive COD remittance within 2 days at no extra cost</li>
            </ul>
            <div className='pt-4'>
                <p className='text-sm text-gray-500'>
                    Trusted by <span className='text-red-500 font-bold'>20,000+</span>brands,ShipU empoweres India's e-commerce
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm font-medium text-gray-700">
                    <img src='https://one.delhivery.com/assets/meesho.c672a645.svg' alt='Meesho Logo'/>
                    <img src='https://one.delhivery.com/assets/flipkart.465ba1f3.svg' alt='Flipkart Logo'/>
                    <img src='https://one.delhivery.com/assets/amazon.edeb24ae.svg' alt='Amazon Logo'/>
                    <img src='https://one.delhivery.com/assets/ajio.2c103250.svg' alt='Ajio Logo'/>
                    <img src='https://one.delhivery.com/assets/nykaa.2fe3f447.svg' alt='Nyka Logo'/>
                    <img src='https://one.delhivery.com/assets/myntra.0fd598f3.svg' alt='Myntra Logo'/>
                    <img src='https://one.delhivery.com/assets/jio-mart.40810fcb.svg' alt='JioMart Logo'/>
                    <img src='https://one.delhivery.com/assets/mamaearth.90a5f1e0.svg' alt='Mamaearth Logo'/>
                    <img src='https://one.delhivery.com/assets/myglamm.589bc467.svg' alt='MyGlamm Logo'/>
                    <img src='https://one.delhivery.com/assets/h&m.604b5c28.svg' alt='H&M Logo'/>
                </div>

            </div>

            </div>
            <div className='w-full lg:w-1/2 bg-gray-50 p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-1 border-gray-200'>
            
            <h2 className=' text-xl font-semibold mb-4 text-center'>Login to your account </h2>

            <form onSubmit={handleSubmit} className='space-y-4'>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email ID' className='w-full border border-gray-300 p-3 rounded '/>
                <button onClick={handleProceed} className='w-full bg-black text-white py-3 rounded hover:bg-gray-200'> Proceed </button>
                <div className='text-sm mt-4 text-gray-600'>New to shipU? {" "}
                    <a href='/' className='text-blue-600 underline'>Create an Account</a>
                </div>

                <div className='text-sm mt-2 text-blue-600 flex flex-wrap flex-col'>
                    <a href='#' className=' underline'>Read FAQs</a>
                    <a href='#' className='underline'>Raise a ticket</a>
                </div>

            </form>
            
            
            </div>
        </div>
    </div>
    </>
    );
};