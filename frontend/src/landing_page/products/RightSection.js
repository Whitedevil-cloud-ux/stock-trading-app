import React from 'react';

function RightSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-6 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mt-3'>
                        <a href={learnMore} style={{textDecoration: "none", marginLeft: "0px"}}>Learn more <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
                <div className='col-6 p-3'>
                    <img src={imageUrl}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;