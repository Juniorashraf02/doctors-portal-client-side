import React from 'react';
import client1 from '../../../assets/images/people1.png';
import client2 from '../../../assets/images/people2.jpg';
import client3 from '../../../assets/images/people3.jpg';
import quote from '../../../assets/icons/quote.svg';
import ReviewCard from './ReviewCard';


const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            'name': 'Jhon',
            'description': 'A few days ago I was suffering a lot. Now I can eat well',
            'img': client1,
            'town': 'california',
        },
        {
            _id: 2,
            'name': 'Khon',
            'description': 'A few days ago I was suffering a lot. Now I can eat well',
            'img': client2,
            'town': 'california',
        },
        {
            _id: 3,
            'name': 'Lhon',
            'description': 'A few days ago I was suffering a lot. Now I can eat well',
            'img': client3,
            'town': 'california',
        },
    ];
    return (
        <section className='pb-10 container mx-auto'>
            <div className=''>
                <div className="flex justify-between items-center">
                    <div className='text-justify'>
                        <h1 className='font-semibold text-cyan-400'>Testimonial</h1>
                        <h1 className='font-semibold text-2xl text-slate-500'>What our patients says</h1>
                    </div>
                    <div>
                        <img src={quote} className="w-12 h-12 md:w-24 md:h-24" alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1  md:grid-cols-3 p-5 gap-5'>
                    {
                        reviews.map(review => <ReviewCard
                            key={review._id} review={review}
                        ></ReviewCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;