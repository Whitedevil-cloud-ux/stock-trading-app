import React from 'react';

function Awards() {
    return (  
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 p-5'>
                    <img src='/media/images/largestBroker.svg' alt='Broker-image'/>
                </div>
                <div className='col-6 p-4 mt-5'>
                    <h1 className='mt-5'>Largest stock broker in India</h1>
                    <p className='mt-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in : </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity and derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                        <img className='mt-3' src='/media/images/pressLogos.png' alt='Press-logo'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;