import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();

    const { data: services, isLoading} = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()));

    const imageStorageKey = 'f87b404a254223b4c535f3d57c7bc1fb';

    const onSubmit = async data => {
        // console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if(result.success){
                const img = result.data.url;
                const doctor= {
                    name: data.name,
                    email:data.email,
                    specialization:data.specialization,
                    img:img,
                }
                fetch('http://localhost:5000/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type':'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessTokenForDoctorPortal')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(response => response.json())
                .then(output => {
                    if(output.insertedId){
                        toast.success('doctor added successfully!')
                        reset();
                    }else{
                        toast.error('failed to add doctor!');
                    }
                })
            }
        })
    };

    if (isLoading) {
        return <p>Loading</p>
    }

    return (
        <div>
            <h1 className="text-xl">Add a new doctor</h1>
            <form className="flex flex-wrap w-1/2 justify-center container mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>

                <input className="input w-full max-w-xs input-bordered my-2" placeholder="Enter your name" {...register("name")} required />

                <input className="input w-full max-w-xs input-bordered my-2" placeholder="Enter your email" {...register("email", {
                    required: {
                        value: true,
                        message: "Please enter your email",
                    },
                    pattern: {
                        value: /[A-Za-z]{3}/,
                        message: 'email pattern is not matched'
                    }
                })} />
                {errors.email?.type === 'required' && <span className="text-gray-300 my-1">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="text-gray-300 my-1">{errors.email.message}</span>}

                <select {...register("specialization")} class="select input-bordered w-full max-w-xs">
                    <option disabled selected>Pick your favorite Simpson</option>
                    {
                        services.map(service => <option key={service._id} service={service}>{service.name}</option>)
                    }

                </select>

                <p>Photo:  <input type="file" className="input w-full max-w-xs input-bordered my-1 "  {...register("image")} required /></p>






                <input className="btn btn-bg-slate-500  btn-wide my-3" type="submit" value='ADD' />
            </form>
        </div>
    );
};

export default AddDoctor;