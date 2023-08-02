import React from 'react';
import { useState } from 'react';

const AddDetails = () => {

    const [E_Id, setE_Id] = useState("");
    const [E_Name, setE_Name] = useState("");
    const [E_Salary, setE_Salary] = useState("");
    const [E_Gender, setE_Gender] = useState("");
    const [E_Position, setE_Position] = useState("");

    function postEmployee(){
        fetch("http://localhost:3450/company/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        E_Id: E_Id,
        E_Name: E_Name,
        E_Salary: E_Salary,
        E_Gender: E_Gender,
        E_Position: E_Position
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
    return(
        <>
        <form className="row g-3 needs-validation" noValidate="">
        <div className="col-12">
          <h1 className="display-6">Add Employee Details</h1>
          <label htmlFor="validationCustom01" className="form-label">
            Employee Id
          </label>
          <input      
            value={E_Id}
            onChange={(e) => setE_Id(e.target.value)}
            type="text"
            className="form-control"
            id="validationCustom01"
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-12">
          <label htmlFor="validationCustom02" className="form-label">
            Employee Name
          </label>
          <input
            value={E_Name}
            onChange={(e) => setE_Name(e.target.value)}
            type="text"
            className="form-control"
            id="validationCustom02"
            required=""
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-12">
          <label htmlFor="validationCustom02" className="form-label">
            Employee Position
          </label>
          <input
            value={E_Position}
            onChange={(e) => setE_Position(e.target.value)}
            type="text"
            className="form-control"
            id="validationCustom02"
            required=""
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-12">
          <label htmlFor="validationCustom02" className="form-label">
            Employee Gender
          </label>
          <input
            value={E_Gender}
            onChange={(e) => setE_Gender(e.target.value)}
            type="text"
            className="form-control"
            id="validationCustom02"
            required=""
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
<div className="col-12">
          <label htmlFor="validationCustomUsername" className="form-label">
            Employee Salary
          </label>
          <div className="input-group has-validation">
            <textarea
              value={E_Salary}
              onChange={(e) => setE_Salary(e.target.value)}
              type="text"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required=""
            />
            <div className="invalid-feedback">Please enter some content.</div>
          </div>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={postEmployee}
          >
            Submit form
          </button>
        </div>
      </form>
        </>
    )
}

export default AddDetails;