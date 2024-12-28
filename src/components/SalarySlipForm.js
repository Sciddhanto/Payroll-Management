import React, { useState } from 'react';

const SalarySlipForm = ({ fetchSalarySlip }) => {
    const [employeeId, setEmployeeId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetchSalarySlip(employeeId);
            setEmployeeId('');
        } catch (error) {
            console.error('Error generating salary slip:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Generate Salary Slip</h2>
            <input
                type="number"
                placeholder="Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                required
            />
            <button type="submit">Generate</button>
        </form>
    );
};

export default SalarySlipForm;
