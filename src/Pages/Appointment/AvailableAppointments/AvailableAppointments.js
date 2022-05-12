import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, []);
    return (
        <div className="my-20 container mx-auto">
            <h1 className="text-xl text-slate-400 font-semibold my-5">Available Appointments on {format(date, 'PP')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    services.map(service => <Service
                        key={service._id} service={service} setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date} treatment={treatment}
                setTreatment={setTreatment}>
            </BookingModal>}
        </div>
    );
};

export default AvailableAppointments;

