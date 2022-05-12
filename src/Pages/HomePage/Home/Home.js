import React from 'react';
import Appointment from '../HomeAppointment/HomeAppointment';
import Banner from '../Banner/Banner';
import DoctorsWord from '../DoctorsWord/DoctorsWord';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Reviews from '../HomeReviews/Reviews';
import ContactUs from '../ContactUs/ContactUs';
import Footer from './../../Sheared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <DoctorsWord/>
            <Appointment/>
            <Reviews/>
            <ContactUs/>
            <Footer></Footer>
        </div>
    );
};

export default Home;