import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img src={chair} className="w-full rounded-lg shadow-2xl md:w-1/2" alt="" />
                    <div className='text-left md:w-1/2'>
                        <h1 className="text-5xl font-bold text-slate-500">Your New Smile Starts Here</h1>
                        <p className="py-6 text-gray-400">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-tertiary font-bold bg-gradient-to-r from-primary to-secondary border-0 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;