import React, { useState } from "react";
import { Link } from "react-router-dom";
import rhyno_logo from './images/rhyno_logo.png';
import './home.css';
import rhyno1 from './images/rhyno1.png';
import rhyno2 from './images/rhyno2.png';
import rhyno3 from './images/rhyno3.png';
import rhyno4 from './images/rhyno4.png';
import rhyno5 from './images/rhyno5.png';
import rhyno6 from './images/rhyno6.png';
import rhyno_longRange from './images/rhyno_longRange.png';
import rhyno_caliber from './images/rhyno_caliber.png';
import rhyno_battery from './images/rhyno_battery.png';
import rhynospeed from './images/rhynospeed.png';

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const images = [
        { src: rhyno_longRange, text: "Long Riding Range: Range that's true to your riding style" },
        { src: rhyno_caliber, text: "Caliber: Superior performance and quality" },
        { src: rhynospeed, text: "Speed: Experience the thrill of high-speed rides" },
        { src: rhyno_battery, text: "Battery: Removable for convenient charging" }
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

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
            <div className="a">
                <h3>Let's Elevate Your Ride Experience With Rhyno</h3>
                <p>Where Superiority Meets  <span className="rotating-word"></span></p>
            </div>
            <div className="image-rotation">
                <img src={rhyno5} alt="Rhyno 4" className="rotating-image" id="image1" />
                <img src={rhyno1} alt="Rhyno 5" className="rotating-image" id="image2" />
            </div>
            <div className="imag">
                <div className="image-container">
                    <img src={rhyno2} alt='Rhyno 1' />
                    <div className="specifications">
                        <p>Charging time: 3 hours (12A)</p>
                        <p>Motor: 1500W</p>
                        <p>Max speed: 55 km/h</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={rhyno3} alt='Rhyno 2' />
                    <div className="specifications">
                        <p>Charging time: 4 hours (12A)</p>
                        <p>Motor: 2000W</p>
                        <p>Max speed: 65 km/h</p>
                    </div>
                </div>
            </div>
            <div className="box" onClick={openModal}>
                <h5>Book a Test Ride</h5>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                        <h2>Book A Test Ride</h2>
                        <form>
                            <label>Name*</label>
                            <input type="text" name="name" placeholder="Name" required />
                            <label>Phone number*</label>
                            <input type="text" name="phone" placeholder="Phone Number" required />
                            <label>Email*</label>
                            <input type="email" name="email" placeholder="Email" required />
                            <label>Select Model*</label>
                            <select name="model" required>
                                <option value="">Please Select</option>
                                <option value="model1">Rhyno SE03 Lite </option>
                                <option value="model2">Rhyno SE03</option>
                                <option value="model2">Rhyno SE03 Max</option>
                            </select>
                            <label>City*</label>
                            <select name="city" required>
                                <option value="">Please Select</option>
                                <option value="Agra">Agra</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Allahabad">Allahabad</option>
                                <option value="Amritsar">Amritsar</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Bhopal">Bhopal</option>
                                <option value="Bhubaneswar">Bhubaneswar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Faridabad">Faridabad</option>
                                <option value="Gandhinagar">Gandhinagar</option>
                                <option value="Ghaziabad">Ghaziabad</option>
                                <option value="Gurgaon">Gurgaon</option>
                                <option value="Guwahati">Guwahati</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Indore">Indore</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Jodhpur">Jodhpur</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Lucknow">Lucknow</option>
                                <option value="Ludhiana">Ludhiana</option>
                                <option value="Madurai">Madurai</option>
                                <option value="Mangalore">Mangalore</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Mysore">Mysore</option>
                                <option value="Nagpur">Nagpur</option>
                                <option value="Noida">Noida</option>
                                <option value="Patna">Patna</option>
                                <option value="Pune">Pune</option>
                                <option value="Raipur">Raipur</option>
                                <option value="Rajkot">Rajkot</option>
                                <option value="Ranchi">Ranchi</option>
                                <option value="Surat">Surat</option>
                                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                <option value="Vadodara">Vadodara</option>
                                <option value="Varanasi">Varanasi</option>
                                <option value="Vijayawada">Vijayawada</option>
                                <option value="Visakhapatnam">Visakhapatnam</option>
                            </select>
                            <label>State*</label>
                            <input type="text" name="state" placeholder="State" required />
                            <button type="submit">Pre Book</button>
                            <button type="submit">Test Ride</button>
                        </form>
                    </div>
                </div>
            )}
            <div className="features-section">
                <div className="feature-item">
                    <img src={rhyno_longRange} alt="Long Riding Range" className="feature-image" />
                    <p>Made In India <br />For Indians By Indians</p>
                </div>
                <div className="feature-item">
                    <img src={rhyno_caliber} alt="Caliber" className="feature-image" />
                    <p>Caliber <br />Superior performance and quality</p>
                </div>
                <div className="feature-item">
                    <img src={rhyno_battery} alt="Removable Battery" className="feature-image" />
                    <p>Removable Battery <br />Charge At Your Convenience, Wherever!</p>
                </div>
                <div className="feature-item">
                    <img src={rhynospeed} alt="Speed" className="feature-image" />
                    <p>Speed <br />Experience the thrill of high-speed rides</p>
                </div>
            </div>

            <div className="carousel">
                <button className="carousel-button prev" onClick={handlePrev}>&#10094;</button>
                <div className="carousel-content">
                    <img src={images[currentIndex].src} alt={`Rhyno ${currentIndex + 1}`} className="carousel-image" />
                    <p className="carousel-text">{images[currentIndex].text}</p>
                </div>
                <button className="carousel-button next" onClick={handleNext}>&#10095;</button>
            </div>

            <div className="se03-description">
                <h2>Discover the Rhyno SE03</h2>
                <p>The Rhyno SE03 scooter is crafted for those who value innovation and efficiency. Built with precision and designed to enhance your riding experience, it offers unmatched performance and reliability. With its sleek design and advanced features, the SE03 is the ideal choice for modern urban mobility. Embrace a sustainable and stylish solution that’s engineered for the discerning rider.</p>
            </div>

            <div className="additional-images">
                <h3>More Images</h3>
                <div className="image-gallery">
                    <img src={rhyno3} alt="Rhyno 3" className="gallery-image" />
                    <img src={rhyno4} alt="Rhyno 4" className="gallery-image" />
                    <img src={rhyno5} alt="Rhyno 5" className="gallery-image" />
                    <img src={rhyno6} alt="Rhyno 6" className="gallery-image" />
                    <img src={rhyno2} alt="Rhyno 2" className="gallery-image" />
                    <img src={rhyno1} alt="Rhyno 1" className="gallery-image" />
                </div>
            </div>

            <div className="image-form-section">
                <div className="image-section">
                    <img src={rhyno5} alt="Rhyno Model" className="section-image" />
                </div>
                <div className="form-section">
                    <form>
                        <label>Name*</label>
                        <input type="text" name="name" placeholder="Name" required />
                        <label>Phone number*</label>
                        <input type="text" name="phone" placeholder="Phone Number" required />
                        <label>Email*</label>
                        <input type="email" name="email" placeholder="Email" required />
                        <label>Select Model*</label>
                        <select name="model" required>
                            <option value="">Please Select</option>
                            <option value="model1">Rhyno SE03 Lite </option>
                            <option value="model2">Rhyno SE03</option>
                            <option value="model2">Rhyno SE03 Max</option>
                        </select>
                        <label>City*</label>
                        <select name="city" required>
                            <option value="">Please Select</option>
                            <option value="Agra">Agra</option>
                            <select name="city" required>
                                <option value="">Please Select</option>
                                <option value="Agra">Agra</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Allahabad">Allahabad</option>
                                <option value="Amritsar">Amritsar</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Bhopal">Bhopal</option>
                                <option value="Bhubaneswar">Bhubaneswar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Faridabad">Faridabad</option>
                                <option value="Gandhinagar">Gandhinagar</option>
                                <option value="Ghaziabad">Ghaziabad</option>
                                <option value="Gurgaon">Gurgaon</option>
                                <option value="Guwahati">Guwahati</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Indore">Indore</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Jodhpur">Jodhpur</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Lucknow">Lucknow</option>
                                <option value="Ludhiana">Ludhiana</option>
                                <option value="Madurai">Madurai</option>
                                <option value="Mangalore">Mangalore</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Mysore">Mysore</option>
                                <option value="Nagpur">Nagpur</option>
                                <option value="Noida">Noida</option>
                                <option value="Patna">Patna</option>
                                <option value="Pune">Pune</option>
                                <option value="Raipur">Raipur</option>
                                <option value="Rajkot">Rajkot</option>
                                <option value="Ranchi">Ranchi</option>
                                <option value="Surat">Surat</option>
                                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                <option value="Vadodara">Vadodara</option>
                                <option value="Varanasi">Varanasi</option>
                                <option value="Vijayawada">Vijayawada</option>
                                <option value="Visakhapatnam">Visakhapatnam</option>
                            </select>
                        </select>
                        <label>State*</label>
                        <input type="text" name="state" placeholder="State" required />
                        <button type="submit">Pre Book</button>
                        <button type="submit">Test Ride</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;


