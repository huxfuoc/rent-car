import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'src/css/Categories.scss'
import saveIcon from 'src/assets/save.png'

const Categories = () => {

    const tableData = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
    ];

    return (
        <div className='content'>
            <div className='categories'>
                <div className='page-header'>
                    <h1 className='header'>Car Categories</h1>
                    <Button className='add-btn'>Add</Button>
                </div>
                <Table bordered hover className='categories-table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
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
            </div>
        </div>
    )
}

export default Categories
