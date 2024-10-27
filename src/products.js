import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './products.css';
import rhyno3 from './images/rhyno3.png';
import rhyno4 from './images/rhyno4.png';
import rhyno5 from './images/rhyno5.png';
import rhyno_logo from './images/rhyno_logo.png';

function Products() {
    const [activeProduct, setActiveProduct] = useState('SE03 Lite');
    const [showForm, setShowForm] = useState(false);

    const products = [
        {
            name: 'Rhyno SE03 Lite',
            image: rhyno3,
            details: [
                'LFP Battery: Renowned for safety, eliminates the risk of fire associated with other Lithium batteries.',
                'Wider Tyres: First-of-its-kind, 9.5-inch tyres ensure stability on all terrains.',
                'Range Prediction: Precise information on remaining battery, eliminating range anxiety.',
                'Extraordinary Experience: Combines comfort, style, and a rugged, practical design.'
            ]
        },
        {
            name: 'Rhyno SE03',
            image: rhyno4,
            details: [
                'LFP Battery: Enhanced power and performance with the same safety features.',
                'Wider Tyres: Ensures stability on various terrains with 9.5-inch wider tyres.',
                'Enhanced Range: Extended range for longer commutes without worry.',
                'Stylish Design: A seamless blend of modern aesthetics and durability.'
            ]
        },
        {
            name: 'Rhyno SE03 Max',
            image: rhyno5,
            details: [
                'Maximized Performance: Higher power and speed for an ultimate ride.',
                'Wider Tyres: Ensures maximum stability and comfort.',
                'Superior Range: Designed for extended journeys with a premium feature set.',
                'Rugged Design: Built to last longer and perform better.'
            ]
        }
    ];

    const handleBuyNowClick = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
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
            <main className="products-content">
                <h1>Our Products</h1>
                <div className="products-list">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`product-section ${activeProduct === product.name ? 'active' : ''}`}
                            onClick={() => setActiveProduct(product.name)}
                        >
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h2>{product.name}</h2>
                                {activeProduct === product.name && (
                                    <div className="product-details">
                                        {product.details.map((detail, idx) => (
                                            <p key={idx}>{detail}</p>
                                        ))}
                                        <button onClick={handleBuyNowClick}>Buy Now</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <section className="comparison">
                    <h2>Compare All</h2>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Specification</th>
                                <th>SE03 Lite</th>
                                <th>SE03</th>
                                <th>SE03 Max</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Battery</td>
                                <td>1.8Kwh LFP with 1500 cycles</td>
                                <td>2.7Kwh LFP with 1500 cycles</td>
                                <td>2.7Kwh LFP with 1500 cycles</td>
                            </tr>
                            <tr>
                                <td>Battery Warranty</td>
                                <td>3 years</td>
                                <td>3 years</td>
                                <td>3 years</td>
                            </tr>
                            <tr>
                                <td>Charging Time</td>
                                <td>3 hours (12A)</td>
                                <td>4 hours (12A)</td>
                                <td>4 hours (12A)</td>
                            </tr>
                            <tr>
                                <td>Motor</td>
                                <td>1500W</td>
                                <td>1500W</td>
                                <td>2000W</td>
                            </tr>
                            <tr>
                                <td>Max Speed</td>
                                <td>55 km/h</td>
                                <td>55 km/h</td>
                                <td>65 km/h</td>
                            </tr>
                            <tr>
                                <td>Max Range (@30km/h)</td>
                                <td>100 km</td>
                                <td>150 km</td>
                                <td>120 km</td>
                            </tr>
                            <tr>
                                <td>Max Range (@45km/h)</td>
                                <td>90 km</td>
                                <td>110 km</td>
                                <td>100 km</td>
                            </tr>
                            <tr>
                                <td>Max Range (@Full Speed)</td>
                                <td>60 km</td>
                                <td>90 km</td>
                                <td>80 km</td>
                            </tr>
                            <tr>
                                <td>Other Key Benefits</td>
                                <td>Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</td>
                                <td>Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</td>
                                <td>Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</td>
                            </tr>
                            {}
                        </tbody>
                    </table>
                    <button className="buy-now" onClick={handleBuyNowClick}>Buy Now</button>
                </section>
                {showForm && (
                    <div className="buy-form">
                        <h2>Order Form</h2>
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
                            <button type="button" onClick={handleFormClose}>Cancel</button>
                        </form>
                    </div>
                )}
            </main>
            <footer className="footer">
                <p>&copy; 2024 Rhyno EV. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Products;
