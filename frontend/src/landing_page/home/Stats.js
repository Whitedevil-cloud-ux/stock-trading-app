import React from 'react';
import './Stats.css';

function Stats() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 fw-normal'>
                    <h2 className='p-3'>Trust with confidence</h2>
                    <div className='columns p-3'>
                        <h5>Customer-first always</h5>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='columns p-3'>
                        <h5>No spam or gimmicks</h5>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className='columns p-3'>
                        <h5>The Zerodha universe</h5>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='columns p-3'>
                        <h5>Do better with money</h5>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-6 text-right p-10'>
                    <img src='/media/images/ecosystem.png' className='rounded' alt='ecosystem-img' style={{width: "100%"}}></img>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '6px', marginLeft: '20px' }} className='d-grid gap-0 column gap-3'>
                        <a href='' style={{ textDecoration: "none"}} className='p-2'>
                            Explore our products <i className="fa fa-long-arrow-right"></i>
                        </a>
                        <a href='' style={{ textDecoration: "none"}} className='p-2'>
                            Try kite demo<i className="fa fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;