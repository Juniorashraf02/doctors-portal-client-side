import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ treatment, date, setTreatment }) => {

    const { name, slots, _id } = treatment;

    const handleSubmit = e => {
        e.preventDefault();
        const time= e.target.timeSlot.value;
        console.log(time, name, _id );
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-cyan-400 text-left">Booking for: {name}</h3>
                    <form onSubmit={handleSubmit} className="my-5">
                        <input value={format(date, 'PP')} placeholder="date" className="bg-gray-100 mb-5 input w-full max-w-xs font-bold " disabled />
                        <select name="timeSlot" className="select select-bordered w-full max-w-xs">
                            <option disabled defaultValue="selected" >Select time</option>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="email" placeholder="Email" className="bg-gray-100 my-5 input w-full max-w-xs" />
                        <input type="text" placeholder="Mobile" className="bg-gray-100 mb-5 input w-full max-w-xs" />
                        <input type="text" placeholder="Name" className="bg-gray-100 mb-5 input w-full max-w-xs" />
                        <input type="submit" className="bg-slate-500 mb-5 input w-full max-w-xs btn btn-primary" value="Submit"/>

                    </form>

                </div>
            </div>
        </div>

    );
};

export default BookingModal;