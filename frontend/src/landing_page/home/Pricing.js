import React from 'react';

function Pricing() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mb-3 pt-2'>
                    <h2 className='ps-3'>Unbeatable pricing</h2>
                    <p className='ps-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration: "none"}} className='ps-3'>See pricing <i className="fa fa-long-arrow-right"></i></a>
                </div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-2 border mb-3'>
                            <h1>&#8377;0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className='col p-2 border mb-3'>
                            <h1>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;