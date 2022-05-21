import React from 'react';

const Service = ({ service,setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card w-96 bg-base-100 border shadow-xl">
            <div className="card-body">
                <h2 className="text-xl font-bold text-slate-400 text-center">{name}</h2>
                {
                    slots.length ?
                        <span>{slots[0]}</span>
                        :
                        <small className="text-rose-600 font-arial font-semibold">Try Another Date</small>
                }

                <p> {slots.length} {slots.length > 0 ? 'spaces' : 'space'} available </p>
                <span>price: ${price}</span>
                <div className="card-actions justify-center">

                    <label onClick={()=>setTreatment(service)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn modal-button text-white">Book appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;