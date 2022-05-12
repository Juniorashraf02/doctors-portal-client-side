import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className="container mx-auto">
           
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-20'>
                <div className="card lg:card-side shadow-xl bg-gradient-to-r from-primary to-secondary p-5 overflow-x-hidden ">
                    <figure>
                        <img src={clock} alt="Album" />
                    </figure>
                    <div className="card-body text-white text-left">
                        <h2 className="card-title">Opening Hours</h2>
                        <p>10 AM to 10 PM</p>
                    </div>
                </div>
                <div className="card lg:card-side shadow-xl bg-accent p-5 text-left hover:bg-red-400">
                    <figure>
                        <img src={marker} alt="Album" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Visit our location</h2>
                        <p>House #26, road #5/V, Uttara, Dhaka</p>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary p-5 text-left">
                    <figure>
                        <img src={phone} alt="Album" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Contact us now</h2>
                        <p>+088123456789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;