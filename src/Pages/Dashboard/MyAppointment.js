import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (loading) {
            return <p>Loading</p>
        }
        if (user) {
            fetch(`http://localhost:5000/bookings?patient=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setAppointment(data);
                })
        }

    }, [user, loading]);
    return (
        <div>
            <h1>All appointments: {appointment.length}</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                   
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time </th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                       {appointment.map(a=>  <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={user&&user.photoURL} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{a.patientName}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                
                                <br/>
                                    <span class="badge badge-ghost badge-sm">{a.date}</span>
                            </td>
                            <td>{a.slot}</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">{a.treatment}</button>
                            </th>
                        </tr>)}
                     
                        
                    </tbody>
                   
                    

                </table>
            </div>
        </div>
    );
};

export default MyAppointment;