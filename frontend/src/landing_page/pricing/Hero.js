import React from 'react';

function Hero() {
    return ( 
        <div className='container '>
            <div className='row text-center mt-5 p-5 border-bottom'>
                <h1>Pricing</h1>
                <h3 className='text-muted fs-4'>Free equity investments and flat &#8377;20 intraday and F&O trades.</h3>
            </div>
            <div className='row p-5 mt-5'>
                <div className='col-4 p-3'>
                    <img src='/media/images/pricing0.svg'></img>
                    <h3 className='text-center'>Free equity delivery</h3>
                    <p className='text-muted mt-4 text-center'>All equity delivery investments (NSE, BSE), are absolutely free &#8377; 0 brokerage.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='/media/images/other-trades.svg'></img>
                    <h3 className='text-center'>Intraday and F&O trades</h3>
                    <p className='text-muted mt-4 text-center'>Flat &#8377; 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat &#8377;20 on all option trades.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='/media/images/pricing0.svg'></img>
                    <h3 className='text-center'>Free direct MF</h3>
                    <p className='text-muted mt-4 text-center'>All direct mutual fund investments are absolutely free &#8377; 0  commissions and DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;