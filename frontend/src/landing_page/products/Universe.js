import React from 'react';
// import Hero from './Hero';
// import LeftSection from './LeftSection';
// import RightSection from './RightSection';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='uni-text text-center mt-5'>
                    <h3>The Zerodha Universe</h3>
                    <p className='text-muted mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src='/media/images/zerodhaFundhouse.png' style={{width: "50%"}}></img>
                    <p className='text-muted mt-2' style={{fontSize: "12px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    <img src='/media/images/streakLogo.png' style={{width: "50%"}} className='mt-3'></img>
                    <p className='text-muted mt-2' style={{fontSize: "12px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src='/media/images/sensibullLogo.svg' style={{width: "50%"}}></img>
                    <p className='text-muted mt-2' style={{fontSize: "12px"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, Fll/Dll and more.</p>
                    <img src='/media/images/smallcaseLogo.png' style={{width: "50%"}} className='mt-3'></img>
                    <p className='text-muted mt-2' style={{fontSize: "12px"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src='/media/images/tijori.svg' style={{width: "30%"}}></img>
                    <p className='text-muted mt-2' style={{fontSize: "12px"}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    <img src='/media/images/dittoLogo.png' style={{width: "30%"}} className='mt-3'></img>
                    <p className='text-muted mt-2' style={{fontSize: "12px"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 d-grid gap-2 col-2 mx-auto mb-5 mt-3'>Signup for free</button>
            </div>
        </div>
     );
}

export default Universe;