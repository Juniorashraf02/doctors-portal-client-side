import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useToken from './../../Hooks/UseToken';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword,  emailUser,  emailLoading,  emailError] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [token] = useToken(emailUser||googleUser);
    const navigate = useNavigate();
    const [user]= useAuthState(auth);



    let errorMessage;

    const loading = googleLoading||emailLoading||updating;
    if(loading){
            return <button className="btn loading mt-10">loading</button>
    }

    if(token){
        // console.log(user||googleUser||emailUser);
        navigate('/appointment');
    }


    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({displayName:data.name});
     
    };

    if(googleError||emailError|| updateError){
        errorMessage = <span className="text-rose-500">{googleError?.message|| emailError?.message||updateError?.message}</span>
    }

 
    return (
        <div className="justify-center flex my-24">
        <div className="card w-96 bg-base-100 shadow-xl border">
            <div className="card-body">
                <h2 className="card-title text-slate-500 justify-center">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                <input className="input w-full max-w-xs input-bordered my-2" placeholder="Enter your name" {...register("name")} required/>
                   
                    <input className="input w-full max-w-xs input-bordered my-2" placeholder="Enter your email" {...register("email", {
                        required:{
                            value: true,
                            message: "Please enter your email",
                        },
                        pattern: {
                            value: /[A-Za-z]{3}/,
                            message: 'email pattern is not matched' 
                        }
                    })} />
                    {errors.email?.type==='required' && <span className="text-gray-300 my-1">{errors.email.message}</span>}
                    {errors.email?.type==='pattern' && <span className="text-gray-300 my-1">{errors.email.message}</span>}

                    <input className="input w-full max-w-xs input-bordered" placeholder="Enter your password" {...register("password", {
                        required:{
                            value: true,
                            message: "Please enter your password",
                        },
                        minLength: {
                            value: 6,
                            message: 'Must be 6 characters' 
                        }
                    })} />
                    {errors.email?.type==='required' && <span className="text-gray-300 my-1">{errors.password.message}</span>} 
                    {errors.email?.type==='pattern' && <span className="text-gray-300 my-1">{errors.password.message}</span>}
                    {errorMessage}

                    <input className="btn btn-bg-slate-500  btn-wide my-3" type="submit" value='Sign Up'/>
                </form>
                <small>Already have an account? <Link to="/login" className="text-sky-600">Log in now</Link> </small>

                <div className="divider">OR</div>
                <div className="card-actions justify-center">
                    <button onClick={() => signInWithGoogle()} className="btn btn-primary">Continue with Google</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;