import React from 'react';

const SingleService = ({service}) => {
    const {img, tittle, details} = service
    return (
        <div className="card w-84 shadow-xl hover:bg-red-400 hover:text-white text-slate-600 border">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{tittle}</h2>
                <p>{details}</p>
               
            </div>
        </div>
    );
};

export default SingleService;