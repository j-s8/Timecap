import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const IndexPage = () => {
    return (
        <div>
            <h1>Welcome to My Site</h1>
            <p>This is a simple website where you can register and login.</p>

            <h2>Register</h2>
            <p>If you don't have an account yet, you can register here:</p>
            {/* Change the href to the appropriate path */}
            <Link to="/register">Register</Link>

            <h2>Login</h2>
            <p>If you already have an account, you can login here:</p>
            {/* Change the href to the appropriate path */}
            <a href="/login">Login</a>

            <h2>About</h2>
            <p>This website is designed to provide a simple and secure login functionality. It's built with React.</p>
            <p>Feel free to explore the site and let us know if you have any questions or feedback!</p>
        </div>
    );
};


export default IndexPage;
