import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
const IndexPage = () => {
    return (
        
        <div>
        <h1>Welcome to My Website</h1>
        <p>Please choose an option:</p>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
            

    );
};


export default IndexPage;
