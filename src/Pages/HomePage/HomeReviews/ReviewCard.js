import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, description, img, town } = review;
    return (
        <div className='card text-justify bg-white shadow-xl p-5 border mt-1'>
            <p className='mt-2 text-gray-500'>{description}</p>
            <div className="flex items-center gap-5 mt-4">
                <div className="avatar pl-2">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2">
                        <img className="" src={img} alt="" />
                    </div>
                </div>
                <div>
                    <p className="text-slate-500 font-bold text-xl">{name}</p>
                    <p className="text-gray-400">{town}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;