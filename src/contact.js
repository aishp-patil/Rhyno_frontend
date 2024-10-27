import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import rhyno_logo from './images/rhyno_logo.png';

function Contact() {
    return (
        <div className="container">
            <header className="header">
                <div className="Logo">
                    <img src={rhyno_logo} alt="Rhyno logo" />
                </div>
                <nav className="nav">
                    <Link to="/" className="nav-Link">Home</Link>
                    <Link to="/about" className="nav-Link">About Us</Link>
                    <Link to="/products" className="nav-Link">Products</Link>
                    <Link to="/contact" className="nav-Link">Contact Us</Link>
                    
                </nav>
            </header>
            
            <main className="contact-content">
                <h1>Contact Us</h1>
                <p>If you have any questions or need further information, feel free to reach out to us through the following channels:</p>
                <ul>
                    <li><strong>Mail:</strong> <a href="mailto:info@rhyno.in">info@rhyno.in</a></li>
                    <li><strong>Mobile No.:</strong> +91-9023987528</li>
                    <li><strong>Location:</strong> Rhyno Wheels Private Limited, Near UG Hostel Gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</li>
                </ul>

                <h3>Registered Office Address:</h3>
                <p>iVOOMi Innovation Pvt. Ltd., A61, Okhla Phase II, Industrial Area, Delhi 110020.</p>
                <a href="https://goo.gl/maps/your-google-map-link" target="_blank" rel="noopener noreferrer">View on Google Map</a>

                <h3>R&D and Sales Office Address:</h3>
                <p>S.No 140/3, Near Sharayu Toyota Service Center, Tathwade, Pune – 411033.</p>
                <a href="https://goo.gl/maps/your-google-map-link" target="_blank" rel="noopener noreferrer">View on Google Map</a>
            </main>

            <footer className="footer">
                <p>&copy; 2024 Rhyno EV. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;
