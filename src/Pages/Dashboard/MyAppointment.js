import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            return <p>Loading</p>
        }
        if (user) {
            fetch(`https://dry-hollows-31914.herokuapp.com/bookings?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessTokenForDoctorPortal')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res === 401 || res === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessTokenForDoctorPortal');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointment(data);
                })
        }

    }, [user, loading, navigate]);
    return (
        <div>
            <h1>All appointments: {appointment.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time </th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {appointment.map(a => <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user && user.photoURL} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{a.patientName}</div>

                                    </div>
                                </div>
                            </td>
                            <td>

                                <br />
                                <span className="badge badge-ghost badge-sm">{a.date}</span>
                            </td>
                            <td>{a.slot}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">{a.treatment}</button>
                            </th>
                        </tr>)}


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyAppointment;