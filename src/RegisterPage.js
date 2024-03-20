import React, { useState } from 'react';

const RegisterPage = () => {
    // State for form fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Here, you can perform further actions like sending data to a server, etc.
        console.log('Form submitted:', { username, email, password });

        // Clear form fields
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        

       
            <div className="container mt-3">
              {/* <header><h1 className="text-center">TIME CAPSULE</h1></header> */}
              <header><h2 className="text-center">REGISTRATION</h2></header>
            
              <div className="container" style={{ marginTop: '30px' }}>
                <form
                  method="post"
                  encType="multipart/form-data"
                  className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row"
                  style={{ width: '100%' }}
                >
                  {/* {% csrf_token %} */}
                  <div style={{ minWidth: '50%', paddingRight: '10px', paddingLeft: '10px' }}>
                    <br />
                    <label className="form-label">NAME</label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Name"
                      required
                      autoComplete="off"
                    /><br />
                    <label className="form-label">EMAIL</label>
                    <input
                      className="form-control"
                      placeholder="Enter Email"
                      type="email"
                      required
                      id="email"
                      name="email"
                    /><br />
                    <label className="form-label">PHONE NO</label>
                    <input
                      className="form-control"
                      required
                      placeholder="Enter Phone NO"
                      type="tel"
                      id="phone"
                      name="phone"
                    /><br />
                    <label className="form-label">WHATSAPP NO</label>
                    <input
                      className="form-control"
                      required
                      placeholder="Enter Whatsapp NO"
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                    /><br />
                    <label className="form-label">ENTER THE FUTURE&nbsp; MESSAGE</label>
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Enter Message"
                      required
                      name="messages"
                      style={{ height: '100px' }}
                    ></textarea><br />
                  </div>
                  <div style={{ width: '100%', paddingRight: '10px', paddingLeft: '10px' }}>
                    <br />
                    <label className="form-label">CAPSULE DELIVERY</label>
                    <fieldset></fieldset>
                    <input
                      className="form-control"
                      id="delivery"
                      type="date"
                      name="delivery"
                      required
                    /><br />
                    <label className="form-label">IMAGES</label>
                    <input
                      className="form-control"
                      type="file"
                      id="images"
                      name="image"
                      required
                    /><br />
                    <label className="form-label">VEDIO</label>
                    <input
                      className="form-control"
                      type="file"
                      id="vedios"
                      name="video"
                      required
                    /><br />
                    <label className="form-label">AUDIO</label>
                    <input
                      className="form-control"
                      type="file"
                      id="audios"
                      name="audio"
                      required
                    /><br />
                    <label className="form-label">DOCUMENTS</label>
                    <input
                      className="form-control"
                      type="file"
                      id="documents"
                      name="document"
                      required
                    /><br />
                    <button
                      className="btn btn-secondary d-flex float-end d-sm-flex align-items-sm-start"
                      type="submit"
                      style={{ margin: '10px' }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
          
        
    );
};

export default RegisterPage;
