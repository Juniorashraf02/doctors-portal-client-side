import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [ signInWithEmailAndPassword, emailUser, emailloading, emailError] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const [users, setUsers] = useState({
    //     email: '',
    //     password: '',
    // });

    let errorMessage;

    const loading = googleLoading||emailloading;
    if(loading){
            return <button class="btn loading mt-10">loading</button>
    }



    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email,data.password);
    };

    if(googleError||emailError){
        errorMessage = <span className="text-rose-500">{googleError?.message|| emailError?.message}</span>
    }
 


    return (
        <div className="justify-center flex my-24">
            <div class="card w-96 bg-base-100 shadow-xl border">
                <div class="card-body">
                    <h2 class="card-title text-slate-500 justify-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                        <input class="input w-full max-w-xs input-bordered my-2" placeholder="Enter your email" {...register("email", {
                            required:{
                                value: true,
                                message: "Please enter your email",
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'email pattern is not matched' 
                            }
                        })} />
                        {errors.email?.type==='required' && <span class="text-gray-300 my-1">{errors.email.message}</span>}
                        {errors.email?.type==='pattern' && <span class="text-gray-300 my-1">{errors.email.message}</span>}

                        <input class="input w-full max-w-xs input-bordered" placeholder="Enter your password" {...register("password", {
                            required:{
                                value: true,
                                message: "Please enter your password",
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters' 
                            }
                        })} />
                        {errors.email?.type==='required' && <span class="text-gray-300 my-1">{errors.password.message}</span>} 
                        {errors.email?.type==='pattern' && <span class="text-gray-300 my-1">{errors.password.message}</span>}
                        {errorMessage}

                        <input class="btn btn-bg-slate-500  btn-wide my-3" type="submit" value='Login'/>
                    </form>
                    <small>New to Doctors portal? <Link to="/signup" className="text-sky-600">Create account now</Link> </small>

                    <div class="divider">OR</div>
                    <div class="card-actions justify-center">
                        <button onClick={() => signInWithGoogle()} class="btn btn-primary">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;