import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    // State for form fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Here, you can perform further actions like sending data to a server, etc.
        console.log('Form submitted:', { username, password });

        // Clear form fields
        setUsername('');
        setPassword('');
    };

    return (
       
    <>
      <div id="logo">
        <h1><i>TIME CAPSULE</i></h1>
      </div>
      <section className="stark-login">
        <form method="post" enctype="multipart/form-data" autoComplete="off">
          <div id="fade-box">
            <input type="text" name="username" id="username" placeholder="Username" autoComplete="off" required />
            <input type="password" name="password" placeholder="Password" autoComplete="off" required />
            <button>Log In</button>
          </div>
        </form>
        <div className="hexagons">
          {/* Hexagon spans */}
        </div>
      </section>

      <div id="circle1">
        <div id="inner-cirlce1">
          <h2> </h2>
        </div>
      </div>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
    );
};

export default LoginPage;
