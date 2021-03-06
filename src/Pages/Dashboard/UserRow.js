import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index,refetch}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`https://dry-hollows-31914.herokuapp.com/user/admin/${email}`,{
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessTokenForDoctorPortal')}`
            }
        })
        .then(res => {
            if(res.status===403){
                toast.error('failed to make an admin')
            }
            
            return res.json()
        }).then(data =>{
            console.log(data);
           if(data.modifiedCount>0){
            refetch();
            toast.success('successfully made an admin');
           }
        })
    }
    return (
        <tbody >

            <tr>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
                <td><button className="btn btn-xs">Remove User</button></td>
            </tr>
        </tbody>
    );
};

export default UserRow;