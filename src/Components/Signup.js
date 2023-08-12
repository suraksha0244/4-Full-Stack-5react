import React from 'react';

const Signup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-danger-subtle" id="b-img">
      <div className="border border-3 border-secondary p-3 bg-light">
        <form>
          <h2>Signup</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            name="name"
            className="form-control"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            name="email"
            className="form-control"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            name="password"
            className="form-control"
          />
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="form-control"
          />
          <label htmlFor="role">Role</label>
          <select id="role" name="role" className="form-select">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
          </select>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberPassword" />
            <label className="form-check-label" htmlFor="rememberPassword">Remember your Password</label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-danger mt-3">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
