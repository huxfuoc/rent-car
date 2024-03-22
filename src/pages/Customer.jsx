import React, { useEffect, useState } from 'react';
import ApiManager from 'src/utils/ApiManager';

const Customer = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await ApiManager.getUsers();
                setUsers(userData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h2>Customer List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            <div>
                                <h2>
                                    Name:
                                    {user.name.first} {user.name.last}
                                    <br></br>
                                    Email:
                                    {user.email}
                                </h2>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Customer;
