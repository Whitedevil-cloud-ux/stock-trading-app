import React from 'react';

function Hero() {
    return (  
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero-Image' />
                <h1 className='display-5 mt-5'>Invest in Everything</h1>
                <p className='lead'>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                <button className='p-2 btn btn-primary fs-5 d-grid gap-2 col-2 mx-auto mb-5'>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;