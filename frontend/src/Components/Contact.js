import React, { useState } from 'react';

const Contact = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: '',
        company: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);

        setFormData({
            name: '',
            email: '',
            message: '',
            company: ''
        });
    };

    return (
        <div>
            <h2>How can we help you?</h2>
            <div className = "container3">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="name"
      name="name"
      aria-describedby="emailHelp"
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Company
    </label>
    <input
      type="text"
      className="form-control"
      id="company"
      name="company"
      aria-describedby="emailHelp"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="email"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="message" name="message"></textarea>
  <label for="floatingTextarea">Message:</label>
</div>
<br></br>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
</div>
        </div>
    );
};

export default Contact;