import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from './../../Hooks/UseToken';

const LogIn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );


    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorMessage;

    const loading = googleLoading || emailLoading;
    const [token] = useToken(emailUser||googleUser);

    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }

    }, [token, from, navigate]);


    const [email, setEmail] = useState();
    const onSubmit = data => {
        console.log(data);
        setEmail(data.email);
        signInWithEmailAndPassword(data.email, data.password);


    };

    const handleReset = e => {
        //   console.log(email);

        if (!email) {
            return alert('Please try to log in with your old password first!');
        } else {
            sendPasswordResetEmail(email);
            toast('Email sent')
        }

    }

    if (googleError || emailError) {
        errorMessage = <span className="text-rose-500">{googleError?.message || emailError?.message}</span>
    }


    if (loading) {
        return <button className="btn loading mt-10">loading</button>
    }







    return (
        <div className="justify-center flex my-24">
            <div className="card w-96 bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="card-title text-slate-500 justify-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

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

                        <input className="input w-full max-w-xs input-bordered" placeholder="Enter your password" {...register("password", {
                            required: {
                                value: true,
                                message: "Please enter your password",
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters'
                            }
                        })} />
                        {errors.email?.type === 'required' && <span className="text-gray-300 my-1">{errors.password.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="text-gray-300 my-1">{errors.password.message}</span>}
                        {errorMessage}

                        <input className="btn btn-bg-slate-500  btn-wide my-3" type="submit" value='Login' /> <br />
                    </form>
                    <small>Forgot password? <span className="text-rose-400 cursor-pointer" onClick={handleReset}>Reset password now</span> </small>

                    <small>New to Doctors portal? <Link to="/signup" className="text-sky-600">Create account now</Link> </small>

                    <div className="divider">OR</div>
                    <div className="card-actions justify-center">
                        <button onClick={() => signInWithGoogle()} className="btn btn-primary">Continue with Google</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};


export default LogIn;