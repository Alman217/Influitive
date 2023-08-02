import React, { useState, useEffect } from 'react';

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  async function getEmpDetails() {
    console.log("Fetching");
    try {
      let data = await fetch("http://localhost:3450/company/employee");
      let convertedData = await data.json();
      console.log(convertedData);
      setEmployee(convertedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getEmpDetails();
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#fff', textAlign: 'center' }}>Employee Details</h1>
      <div className="row">
        {employee.map((emp, index) => (
          <div key={index} className="card" style={cardStyle(emp.color)}>
            <div className="card-header" style={headerStyle(emp.color)}>
              {emp.E_Name}
            </div>
            <div className="card-body" style={bodyStyle}>
              <h3 className="card-title" style={titleStyle(emp.color)}>
                Employee ID: {emp.E_Id}
              </h3>
              <h2 style={positionStyle}>Position: {emp.E_Position}</h2>
              <h5 style={genderStyle}>Gender: {emp.E_Gender}</h5>
              <p style={salaryStyle}>Salary: ${emp.E_Salary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  backgroundColor: 'darkCyan',
  padding: '20px',
};

const cardStyle = (color) => ({
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  flex: '0 0 calc(33.33% - 20px)',
  marginBottom: '20px',
});

const headerStyle = (color) => ({
  backgroundColor: color,
  color: '#fff',
  padding: '10px',
  borderRadius: '5px 5px 0 0',
});

const bodyStyle = {
  padding: '20px',
  backgroundColor: 'lightblue',
};

const titleStyle = (color) => ({
  fontSize: '20px',
  marginBottom: '10px',
  color: 'black',
});

const salaryStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '5px',
  color: '#333',
};

const genderStyle = {
  fontSize: '16px',
  marginBottom: '4px',
  marginTop: '2px',
  color: 'green',
};

const positionStyle = {
  fontSize: '20px',
  marginBottom: '4px',
  marginTop: '2px',
  color: 'orange',
};

export default Employee;