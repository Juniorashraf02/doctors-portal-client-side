import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialization, img, email } = doctor;
    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`,{
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessTokenForDoctorPortal')}`
            }
        })
        .then(response => response.json())
        .then(data =>{
            if(data.deletedCount){
                toast.success(`Doctor: ${name} is deleted`);
                refetch();
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt="avater" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialization}</td>
            <td><button onClick={()=>handleDelete(email)} class="btn btn-error">Delete</button></td>

        </tr>
    );
};

export default DoctorRow;