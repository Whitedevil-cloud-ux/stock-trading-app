import React from 'react';

function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src={imageUrl}></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mt-3'>
                        <a href={tryDemo} style={{textDecoration: "none"}}>Try demo <i className="fa fa-long-arrow-right"></i></a>
                        <a href={learnMore} style={{textDecoration: "none", marginLeft: "83px"}}>Learn more <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='/media/images/googlePlayBadge.svg'></img></a>
                        <a href={appStore} style={{marginLeft: "40px"}}><img src='/media/images/appstoreBadge.svg'></img></a>
                    </div>  
                </div>
            </div>
        </div>
     );
}

export default LeftSection;