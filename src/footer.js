import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/refund-policy">Refund Policy</Link>
                <Link to="/website-policy">Website Policy</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/products">Products</Link>
                <a href="https://www.linkedin.com/company/rhyno" target="_blank" rel="noopener noreferrer">Career</a>
                <Link to="/rentals">Rentals</Link>
            </div>
            <div className="footer-social">
                <a href="https://www.instagram.com/rhyno" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram.svg" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/company/rhyno" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/linkedin.svg" alt="LinkedIn" />
                </a>
            </div>
            <p>&copy; 2024 Rhyno EV. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
