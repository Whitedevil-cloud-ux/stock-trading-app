import React from 'react';

function Education() {
    return (  
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-6 mb-1'>
                    <img src='/media/images/education.svg' alt='Varsity-image'></img>
                    
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <h2>Free and open market education</h2>
                        <p className='mt-3'>Varsity, the largest online stock market education book in the world <br/> covering everything from the basics to advanced trading.</p>
                        <a href='' style={{textDecoration: "none"}} className='ps-3'>Varsity <i className="fa fa-long-arrow-right"></i></a>
                        <p className='mt-3'>TradingQ&A, the most active trading and investment community in <br/> India for all your market related queries.</p>
                        <a href='' style={{textDecoration: "none"}} className='ps-3'>TradingQ&A <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;