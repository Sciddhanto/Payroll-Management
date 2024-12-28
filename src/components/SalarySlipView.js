import React from 'react';

const SalarySlipView = ({ salarySlip }) => {
    if (!salarySlip) return <div>No salary slip generated yet.</div>;

    return (
        <div>
            <h2>Salary Slip</h2>
            <p>PF Deduction: {salarySlip.pfDeduction}</p>
            <p>Professional Tax: {salarySlip.professionalTax}</p>
            <p>Net Salary: {salarySlip.netSalary}</p>
        </div>
    );
};

export default SalarySlipView;
