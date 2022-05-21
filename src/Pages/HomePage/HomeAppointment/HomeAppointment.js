import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
    const navigate = useNavigate();
    const handleClick =e=>{
        navigate('/appointment')
    }
    return (
        <section className="my-40 rounded-lg" style={{
            background: `url(${appointment})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-20 pb-0">
                    <img src={doctor} className="mt-[-110px] rounded-xl h-72 w-72 md:h-96 md:w-96 hidden md:block" alt="" />
                    <div className=' text-left pb-1'>
                        <h1 className="text-3xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button onClick={handleClick}className="btn btn-tertiary font-bold bg-gradient-to-r from-primary to-secondary border-0 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;