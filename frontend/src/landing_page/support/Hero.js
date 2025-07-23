import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5 mt-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='#' style={{color: "white", textDecoration: "underline", textUnderlineOffset: "4px"}}>Train Tickets</a>
            </div>
            <div className='row'>
                <div className='col-8 mb-5'>
                    <h1 style={{fontSize: "24px", marginLeft: "200px"}} className='lead'>Search for an answer or browse help topics to create a ticket</h1>
                    {/* Search Field with Icon */}
                    <div style={{ position: "relative", marginLeft: "200px", width: "80%" }}>
                        <input
                            type='search'
                            className='text-left'
                            style={{
                                width: "100%",
                                marginTop: "5px",
                                marginBottom: "5px",
                                height: "44px",
                                fontSize: "16px",
                                paddingRight: "36px", // space for right icon
                                paddingLeft: "12px",
                                boxSizing: "border-box",
                                border: "1px solid #ccc",
                                outline: "none", // removes blue border on focus
                            }}
                            onFocus={e => e.target.style.border = "none"}
                            onBlur={e => e.target.style.border = "1px solid #ccc"}
                            placeholder='Eg: how do I activate F&O, why is my order getting rejected ...'
                        />
                        <i
                            className="fa fa-search"
                            style={{
                                position: "absolute",
                                top: "50%",
                                right: "12px",
                                transform: "translateY(-50%)",
                                fontSize: "18px",
                                color: "gray",
                                pointerEvents: "none"
                            }}
                        ></i>
                    </div>
                    <div className='support-links' style={{marginLeft: "200px", display: "flex", justifyContent: "space-between", marginTop: "10px", marginBottom: "30px"}}>
                        <a href='#' style={{color: "white", textDecoration: "underline", textUnderlineOffset: "4px"}}>Train account opening</a>
                        <a href='#' style={{color: "white", textDecoration: "underline", textUnderlineOffset: "4px"}}>Train account opening</a>
                        <a href='#' style={{color: "white", textDecoration: "underline", textUnderlineOffset: "4px"}}>Train account opening</a>
                        <a href='#' style={{color: "white", textDecoration: "underline", textUnderlineOffset: "4px"}}>Train account opening</a>
                    </div>

                </div>
                <div className='col-4 mb-5' style={{paddingLeft: "40px", lineHeight: "2.5"}}>
                    <h5>Featured</h5>
                    <ol>
                        <a href='' style={{textDecoration: "underline", textUnderlineOffset: "2px", color: "white"}}><li>Scheme of arrangement in ABFRL</li></a>
                        <a href='' style={{textDecoration: "underline", textUnderlineOffset: "2px", color: "white"}}><li>Survelliance measure on scripts - May 2025</li></a>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;