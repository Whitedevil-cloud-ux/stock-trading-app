import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <>
        <hr className="my-2 border-top border-secondary" style={{ width: '100%' }} />
        <div className='container mt-5'>
            <div className='row mb-5'>
                <div className='col'>
                    <Link class="navbar-brand" to="/"><img src='/media/images/logo.svg' alt='Logo' style={{width: "50%"}} /></Link>
                    <p className='mt-3' style={{fontFamily: "Plus+Jakarta+Sans, Inter", color: "#888", fontSize: "14px"}}>&#169; 2010 - 2025, Zerodha Broking Ltd. <br/> All rights reserved.</p>
                    <div className='d-flex gap-3 mt-3'>
                        <i className="fa fa-twitter fa-2x" style={{ fontSize: '1.5em', color: "#1da1f2", cursor: "pointer" }}></i>
                        <i className="fa fa-facebook-square fa-2x" style={{ fontSize: '1.5em', color: "#1877f2", cursor: "pointer" }}></i>
                        <i className="fa fa-instagram fa-2x" style={{ fontSize: '1.5em', color: "#e1306c", cursor: "pointer" }}></i>
                        <i className="fa fa-linkedin fa-2x" style={{ fontSize: '1.5em', color: "#0077b5", cursor: "pointer" }}></i>
                    </div>
                </div>
                <div className='col'>
                    <h6>Company</h6>
                    <div className='links active' style={{listStyleType: "none", cursor: "pointer", fontFamily: "Plus+Jakarta+Sans, Inter", color: "#888"}}>
                        <li>About</li>
                        <li>Products</li>
                        <li>Pricing</li>
                        <li>Referral Programme</li>
                        <li>Careers</li>
                        <li>Open Source</li>
                    </div>
                </div>
                <div className='col'>
                    <h6>Support</h6>
                    <div className='links active' style={{listStyleType: "none", cursor: "pointer", fontFamily: "Plus+Jakarta+Sans, Inter", color: "#888"}}>
                        <li>Contact us</li>
                        <li>Support portal</li>
                        <li>Z-Connect blog</li>
                        <li>List of charges</li>
                        <li>Downloads & resources</li>
                        <li>Videos</li>
                    </div>
                </div>
                <div className='col'>
                    <h6>Account</h6>
                    <div className='links' style={{listStyleType: "none", cursor: "pointer", fontFamily: "Plus+Jakarta+Sans, Inter", color: "#888"}}>
                        <li>Open an account</li>
                        <li>Fund transfer</li>
                    </div>
                </div>
            </div>
        </div>
        </> 
    );
}

export default Footer;