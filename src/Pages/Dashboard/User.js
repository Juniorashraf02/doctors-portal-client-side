import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const User = () => {
    const { data:users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessTokenForDoctorPortal')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <p>Loading</p>
    }
    // console.log(data);






    return (
        <div>
            <h1>All Users: {users.length}</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Gmail</th>
                            <th>ADD</th>
                            <th>REMOVE</th>
                        </tr>
                    </thead>
            {
                users.map((user, index) => <UserRow user={user}key={user._id} index={index} refetch={refetch}></UserRow>)
            }
                </table>
            </div>
        </div>
    );
};

export default User;