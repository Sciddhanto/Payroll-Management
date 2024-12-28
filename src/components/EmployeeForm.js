import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ fetchEmployees }) => {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        designation: '',
        basicSalary: '',
        department: ''
    });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/employees', employee);
            fetchEmployees(); // Refresh the employee list
            setEmployee({ name: '', email: '', designation: '', basicSalary: '', department: '' });
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>
            <input type="text" name="name" placeholder="Name" value={employee.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} required />
            <input type="text" name="designation" placeholder="Designation" value={employee.designation} onChange={handleChange} required />
            <input type="number" name="basicSalary" placeholder="Basic Salary" value={employee.basicSalary} onChange={handleChange} required />
            <input type="text" name="department" placeholder="Department" value={employee.department} onChange={handleChange} required />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default EmployeeForm;
