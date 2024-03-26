import React, { useEffect, useState } from 'react';
import { Table, Button, Pagination } from 'react-bootstrap';
import ApiManager from 'src/utils/ApiManager';
import saveIcon from 'src/assets/save.png'
import 'src/css/Customer.scss'

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

    const tableData = [
        { id: 1, name: 'Category 1', username: 'user1', role: 'role1', status: 'active' },
        { id: 2, name: 'Category 2', username: 'user2', role: 'role2', status: 'inactive' },
        { id: 3, name: 'Category 3', username: 'user3', role: 'role3', status: 'active' },
        { id: 4, name: 'Category 4', username: 'user4', role: 'role4', status: 'inactive' },
        { id: 5, name: 'Category 5', username: 'user5', role: 'role5', status: 'active' },
        { id: 6, name: 'Category 6', username: 'user6', role: 'role6', status: 'inactive' },
        { id: 7, name: 'Category 4', username: 'user4', role: 'role4', status: 'inactive' },
        { id: 8, name: 'Category 5', username: 'user5', role: 'role5', status: 'active' },
        { id: 9, name: 'Category 6', username: 'user6', role: 'role6', status: 'inactive' },
        { id: 10, name: 'Category 6', username: 'user6', role: 'role6', status: 'inactive' },
        { id: 11, name: 'Category 6', username: 'user6', role: 'role6', status: 'inactive' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalItems = tableData.length;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTableData = tableData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const goToFirstPage = () => setCurrentPage(1);
    const goToLastPage = () => setCurrentPage(Math.ceil(totalItems / itemsPerPage));

    return (
        <div className='content'>
            <div className='customer'>
                <div className='page-header'>
                    <h1 className='header'>Customer</h1>
                </div>
                <Table bordered hover className='customer-table'>
                    <thead>
                        <tr>
                            <th>CustomerId</th>
                            <th>Full Name</th>
                            <th>User Name</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTableData.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.role}</td>
                                <td>{item.status}</td>
                                <td className='actions-column'>
                                    <Button className='edit-btn' variant="primary" size="sm">
                                        <img src={saveIcon} className='icon-save' alt="Edit" style={{ width: '13px', height: '13px' }} />
                                        Edit
                                    </Button>
                                    <Button className='delete-btn' variant="danger" size="sm">
                                        <img src={saveIcon} className='icon-save' alt="Delete" style={{ width: '13px', height: '13px' }} />
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination>
                    <Pagination.First onClick={goToFirstPage} />
                    {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, index) => (
                        <Pagination.Item
                            key={index}
                            onClick={() => paginate(index + 1)}
                            active={index + 1 === currentPage}
                            className="pagination-item"
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Last onClick={goToLastPage} size="sm" />

                </Pagination>
            </div>
            {/* <h2>Customer List</h2>
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
            )} */}
        </div>
    );
};

export default Customer;
