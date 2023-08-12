import React from 'react'

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-success-subtle" id="b-img">
        <div className="border border-3 border-success p-3 bg-info">
      <form>
        <h2>Login</h2>
        <label>Email</label>
        <input
        type="email"
        placeholder="Enter Your Email"
        name="Email"
        className="form-control"
        />
        <label htmlFor="Password">Password</label>
        <input
        type="password"
        placeholder="Enter Your Password"
        name="Password"
        className="form-control"
        />
        <input type="checkbox"/>
        <label htmlFor="Checkbox"className="ms-3">Remember your Password</label>
        <br />
        <div className="d-grid">
          <button className="btn btn-danger">Login</button>
          </div>
      </form>
    </div>
    </div>
  )
}

export default Login