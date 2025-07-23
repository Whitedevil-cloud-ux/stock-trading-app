import React from 'react';

function OpenAccount() {
    return (  
        <div className='container mt-5'>
            <div className='row mx-auto' style={{textAlign: "center"}}>
                    <h2 className='mb-2'>Open a Zerodha Account</h2>
                    <p className='mt-2' style={{fontFamily: "Plus+Jakarta+Sans, Inter", color: "#888"}}>Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.</p>
                    <button className='p-2 btn btn-primary fs-5 d-grid gap-2 col-2 mx-auto mb-5 mt-2'>Signup Now</button>
            </div>
        </div>
    );
}

export default OpenAccount;