import React from 'react';
import { format } from 'date-fns';
import auth from './../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BookingModal = ({ treatment, date, setTreatment,refetch }) => {
    const [user]=useAuthState(auth);

    const { name, slots, _id } = treatment;

    const formattedDate = format(date,'PP')

    const handleSubmit = e => {
        e.preventDefault();
        const slot= e.target.timeSlot.value;
        const phone = e.target.phone.value;
        
        const booking={
            treatmentId:_id,
            treatment:name,
            date:formattedDate,
            slot,
            patient:user.email,
            patientName:user.displayName,
            phone:phone,

        }
        
        fetch('http://localhost:5000/bookings', {
            method:'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(booking)
        }).then(res=>res.json()).then(data=>{
            console.log(data);
            if(data.success){
                toast.success(`Appointment is set, ${formattedDate} at ${slot} on ${treatment} `);
            }else{
              

                toast.error(`Already have an appointment is set, ${data.booking?.date} at ${data.booking?.slot} on ${data.booking?.treatment}`);

            }
            refetch();
            setTreatment(null);
        })

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
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user?.displayName || ''} disabled className="bg-gray-100 mt-5 input w-full max-w-xs" />
                        <input type="email" value={user?.email|| ''} disabled className="bg-gray-100 my-5 input w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Mobile" className="bg-gray-100 mb-5 input w-full max-w-xs" />
                        <input type="submit" className="bg-slate-500 mb-5 input w-full max-w-xs btn btn-primary" value="Submit"/>

                    </form>

                </div>
            </div>
           
        </div>

    );
};

export default BookingModal;