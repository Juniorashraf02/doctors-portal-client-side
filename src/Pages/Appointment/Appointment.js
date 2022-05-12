import React, { useState } from 'react';
import Footer from './../Sheared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="my-20">

            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailableAppointments date={date}/>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;