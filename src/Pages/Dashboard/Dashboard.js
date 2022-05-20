import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from './../../Hooks/UseAdmin';

const Dashboard = () => {
    const [user]= useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content justify-center">
            <h1 className="text-3xl text-violet-500 font-semibold">Welcome to your Dashboard</h1>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    <li><Link to='/dashboard'>My appointments</Link></li>
                    <li><Link to='/dashboard/review'>My reviews</Link></li>
                    <li><Link to='/dashboard/history'>History</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add a doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctors'>Manage doctor</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;