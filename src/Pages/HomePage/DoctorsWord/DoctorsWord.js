import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const DoctorsWord = () => {
    return (
        <div className='my-10 container md:mx-10'>
            <h1 className='text-2xl text-slate-400'>Doctor's Word</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src={treatment} className="rounded-xl h-72 w-72 md:h-96 md:w-96" alt=""/>
                    <div className=' text-left'>
                        <h1 className="text-3xl font-bold text-slate-500">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-gray-400 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-tertiary font-bold bg-gradient-to-r from-primary to-secondary border-0 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsWord;