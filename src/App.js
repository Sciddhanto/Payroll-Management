import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import SalarySlipForm from './components/SalarySlipForm';
import SalarySlipView from './components/SalarySlipView';
import axios from 'axios';

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [salarySlip, setSalarySlip] = useState(null);

    const fetchEmployees = async () => {
        const response = await axios.get('http://localhost:8080/employees');
        setEmployees(response.data);
    };

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:8080/employees/${id}`);
        fetchEmployees();
    };

    const fetchSalarySlip = async (employeeId) => {
        const response = await axios.post('http://localhost:8080/salary-slips', { employeeId });
        setSalarySlip(response.data);
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div>
            <h1>Payroll Management</h1>
            <EmployeeForm fetchEmployees={fetchEmployees} />
            <EmployeeTable employees={employees} deleteEmployee={deleteEmployee} />
            <SalarySlipForm fetchSalarySlip={fetchSalarySlip} />
            <SalarySlipView salarySlip={salarySlip} />
        </div>
    );
};

export default App;
