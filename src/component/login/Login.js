import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="containerLogin">
      <h1>Excellence Management system</h1>
      <div className="flex-container1">
        {/*  */}
        <div className="box-continer1">
          <div className="box-item">
            <h1>Student</h1>
            <span>Excellence Management System</span>
            <div>
              <span>Username:</span>
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <span>Password:</span>
              <input type="password" placeholder="username" />
            </div>
          </div>
        </div>
        <div className="box-continer1">
          <div className="box-item">
            <h1>Admin Login Right</h1>
            <span>Excellence Management system</span>
            <div>
              <span>Username:</span>
              <input type="password" placeholder="Username" />
            </div>
            <div>
              <span>Password:</span>
              <input type="password" placeholder="Username" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
