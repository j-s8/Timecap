import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './IndexPage.css';
import backgroundImage from './assets/pg2.png';// Import the background image
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
const IndexPage = ({ isLoggedIn }) => {
  useEffect(() => {
    const addCSSLinks = () => {
      // Create link elements for each stylesheet
      const link1 = document.createElement('link');
      link1.rel = 'stylesheet';
      link1.href = 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&display=swap';

      const link2 = document.createElement('link');
      link2.rel = 'stylesheet';
      link2.href = 'https://fonts.googleapis.com/css?family=Cabin:700&display=swap';

      const link3 = document.createElement('link');
      link3.rel = 'stylesheet';
      link3.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

      const link4 = document.createElement('link');
      link4.rel = 'stylesheet';
      link4.href = 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css';

      const link5 = document.createElement('link');
      link5.rel = 'script';
      link5.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js';



      // Append link elements to the head of the document
      document.head.appendChild(link1);
      document.head.appendChild(link2);
      document.head.appendChild(link3);
      document.head.appendChild(link4);
    };

    // Function to collapse navbar when a scroll trigger link is clicked
    const handleNavbarCollapse = () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse) {
        const navbarItems = navbarCollapse.querySelectorAll('a');
        for (const item of navbarItems) {
          item.addEventListener('click', () => {
            navbarCollapse.classList.remove('show'); // Close the collapse menu
          });
        }
      }
    };

    // Function to collapse navbar on scroll
    const handleScroll = () => {
      const mainNav = document.querySelector('#mainNav');
      if (mainNav) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 100) {
          mainNav.classList.add('navbar-shrink');
        } else {
          mainNav.classList.remove('navbar-shrink');
        }
      }
    };

    // Event listeners for scroll and navbar collapse
    document.addEventListener('scroll', handleScroll);
    handleNavbarCollapse();

     addCSSLinks();

    // Clean up function to remove added link elements when the component unmounts
    return () => {
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(link => link.remove());
    };

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (


    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <nav className="navbar navbar-light navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          <Link className="navbar-brand" to="/"></Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu" style={{ marginLeft: '80px' }}>
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              {/* Add authentication check here */}
              <li className="nav-item nav-link"><Link className="nav-link active" to="#message">MESSAGE</Link></li>
              <li className="nav-item nav-link"><Link className="nav-link active" to="#image">IMAGE</Link></li>
              <li className="nav-item nav-link"><Link className="nav-link active" to="#vedio">VIDEO</Link></li>
              <li className="nav-item nav-link"><Link className="nav-link" to="#audio">AUDIO</Link></li>
              <li className="nav-item nav-link"><Link className="nav-link" to="#document">DOCUMENT</Link></li>
              <li className="nav-item nav-link">
                <button style={{ background: 'transparent', border: 'none', fontWeight: 'bold', color: 'white' }} className="nav-link" data-bs-toggle="modal" data-bs-target="#myModal">
                  LOGOUT
                </button>
              </li>
              {/* Add authentication check here */}
              <li className="nav-item nav-link"><Link className="nav-link" to="/register">Register</Link></li>
              <li className="nav-item nav-link"><Link className="nav-link" to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-dark">
              Click confirm button to logout
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                <Link className="nav-link" to="{% url 'logout'  %}">Confirm</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add authentication check here */}
      <header className="masthead">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="heading">MEMORIA</h1>
                {/* <p className="fs-3 intro-text text-uppercase">user.name<br />YOU GOT A POST FROM YOUR PAST</p>
                      <Link className="btn btn-link btn-circle" role="button" to="#message"><i className="fa fa-angle-double-down animated"></i></Link> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="text-center content-section" id="message">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {/* <h2>MESSAGE</h2>
              <p>info.message</p> */}
            </div>
          </div>
        </div>
      </section>
      

      {/* Add other sections here */}
      <footer className="fixed-bottom">
        <div className="container text-center">
          <p>Copyright © Memoria</p>
        </div>
      </footer>
    </div>




  );
};


export default IndexPage;
