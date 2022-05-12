import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className="my-20 justify-center">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 " style={{
                background:`url(${appointment})`
            }}>
            <h1 className="my-5 text-white text-xl">Stay Connected with us</h1>
                <div className="mb-4">

                    <input className="shadow appearance-none border rounded w-11/12 md:w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email"/>
                </div>
                <div className="mb-6">

                    <input className="shadow appearance-none border rounded w-11/12 md:w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="password" type="text" placeholder="Subject"/>
                        
                </div>
                <div className="mb-6">

                    <textarea className="shadow appearance-none border rounded w-11/12 md:w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="password" type="text" placeholder="Description"/>
                        
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>

                </div>
            </form>

        </div>
    );
};

export default ContactUs;