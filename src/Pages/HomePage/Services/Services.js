import React from 'react';
import SingleService from './SingleService';
import whitening from '../../../assets/images/whitening.png';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';

const Services = () => {


    const services = [
        {
            _id:1,
            'tittle':"Fluoride Treatment",
            "details":"This service is open all the time",
            'img': fluoride,
        },
        {
            _id:2,
            'tittle':"Teeth Whitening",
            "details":"Only specific time this service is available",
            'img': whitening,
        },
        {
            _id:3,
            'tittle':"Cavity Filling",
            "details":"This service is open all the time",
            'img': cavity,
        }
    ]
  
    return (
        <div className='my-20' id="service">
              <h1 className='text-slate-400 text-2xl'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto my-10 '>
                {
                    services.map(service =><SingleService key={service._id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;