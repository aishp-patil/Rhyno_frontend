import React from 'react';
import { Link } from 'react-router-dom';
import './about.css'; 
import rhyno_logo from './images/rhyno_logo.png';

function About() {
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
            <main className="about-content">
                <h1>About Us</h1>
                <p>Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is more than just a company; it's a collective movement. Our journey began with a simple yet ambitious idea: to revolutionize the electric vehicle industry with products that combine innovation, durability, and style.</p>
                <p>At Rhyno EV, we believe in creating more than just vehicles; we craft experiences. Our team of passionate engineers and designers is dedicated to pushing the boundaries of what's possible in electric mobility. Every product we develop is a testament to our commitment to excellence, safety, and sustainability.</p>
                <p>Our flagship product is a result of meticulous research and development. We identified the common challenges faced by electric scooter users—such as safety concerns, limited battery life, and lack of durability—and turned them into opportunities for innovation. The result is a scooter that not only meets the needs of modern consumers but also exceeds their expectations.</p>
                <p>Our design philosophy prioritizes user safety and environmental responsibility. We have developed advanced battery technology that ensures a longer lifespan and reduces the risk of fires, setting new standards in the industry. Our rugged yet stylish scooters are perfect for fleet operators, particularly in tourist-rich regions like Goa, where reliability and aesthetic appeal are paramount.</p>
                <p>Rhyno EV is on a mission to lead the way in sustainable transportation. We are not just building vehicles; we are pioneering a future where mobility is both eco-friendly and exhilarating. Join us in this journey towards a greener, safer, and more exciting world.</p>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Rhyno EV. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default About;
