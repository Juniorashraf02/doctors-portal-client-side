import React from 'react';
import { useQuery } from 'react-query';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctor', () => fetch(' https://dry-hollows-31914.herokuapp.com/doctor', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessTokenForDoctorPortal')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <p>Loading</p>
    }
    return (
        <div>
            <h1 className="text-2xl">Manage Doctors: {doctors.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
               
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>Specialization</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                   
                       {
                           doctors.map((doctor, index)=><DoctorRow
                           key={doctor._id} doctor={doctor} index={index} refetch={refetch}
                           ></DoctorRow>)
                       }
                 

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;