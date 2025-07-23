import React from 'react';

function NotFound() {
    return (  
        <div className='container mt-5'>
            <div className='row mx-auto' style={{textAlign: "center"}}>
                    <h2 className='mb-2'>404 Not Found</h2>
                    <p className='mt-2' style={{fontFamily: "Plus+Jakarta+Sans, Inter"}}>Sorry, the page you are looking for does not exist.</p>
                    
            </div>
        </div>
    );
}

export default NotFound;