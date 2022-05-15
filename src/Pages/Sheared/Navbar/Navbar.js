import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);

    // const handleSignOut =e=>{

    // }

    const menuItems = <>
        <li className="font-semibold">
            <Link to='/home'>Home</Link>
        </li>
        <li className="font-semibold">
            <Link to='/about'>About</Link>
        </li>
        <li className="font-semibold">
            <Link to='/appointment'>Appointment</Link>
        </li>
        {
            user &&
                <li className="font-semibold">
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                
        }
        <li className="font-semibold">
            <Link to='/review'>Review</Link>
        </li>
        <li className="font-semibold">
            <Link to='/contact'>Contact Us</Link>
        </li>
    </>

    return (
        <div className="w-screen bg-base-200 ">
            <div className="navbar container mx-auto">

                {/* dropdown for menu icon starts */}
                <div className="dropdown navbar-center lg:hidden">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-5 p-2 shadow bg-slate-200 rounded-box w-52 text-slate-500">
                        {menuItems}
                    </ul>
                </div>
                {/* dropdown for menu icon ends */}


                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-slate-500 text-xl font-bold">DOCTORS PORTAL</Link>
                </div>
                <div className="flex-none">
                    <div className="hidden lg:block">
                        <ul className="flex gap-5 text-slate-500">
                            {menuItems}
                        </ul>
                    </div>
                    <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-slate-200 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-gray-600">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user ?
                                        <img src={user.photoURL} alt="" />
                                        :
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                }
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-200 rounded-box w-52">
                            <li>
                                <a href="#h" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a href="#h">Settings</a>
                            </li>
                            <li>
                                {
                                    user ?
                                        <button onClick={() => signOut(auth)} className="btn bg-rose-600 border-0 text-white">Log Out</button>
                                        :
                                        <Link className="btn bg-blue-500 border-0 text-white" to='/login' href="#h">Log In</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;