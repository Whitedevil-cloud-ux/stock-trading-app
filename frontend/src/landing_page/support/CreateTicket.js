import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5'>
                <h1 className='text-muted' style={{fontSize: "24px"}}>To create a ticket, select a relevant topic</h1>
                <div className='col-4 p-5 mt-3'>
                    <h4 style={{fontSize: "16px"}}><i class="fa fa-plus" style={{marginRight: "10px"}}></i>  
                    Account Opening</h4>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Resident Individual</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Minor</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Non-Resident Individual (NRI)</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Company, Partnership, and HUF</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Glossary</a> <br/>
                </div>
                <div className='col-4 p-5 mt-3'>
                    <h4 style={{fontSize: "16px"}}><i class="fa fa fa-user" style={{marginRight: "10px"}}></i>  
                    Your Zerodha Account</h4>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Your profile</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Account modification</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Nomination</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Transfer and conversion</a> <br/>
                </div>
                <div className='col-4 p-5 mt-3'>
                    <h4 style={{fontSize: "16px"}}><i class="fa fa-bar-chart" style={{marginRight: "10px"}}></i>  
                    Kite</h4>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>IPO</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Trading FAQs</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Charts and orders</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Alerts and Nudges</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>General</a> <br/>
                </div>
                <div className='col-4 p-5 mt-3'>
                    <h4 style={{fontSize: "16px"}}><i class="fa fa-credit-card" style={{marginRight: "10px"}}></i>  
                    Funds</h4>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Add money</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Withdraw money</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Add bank accounts</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>eMandates</a> <br/>
                </div>
                <div className='col-4 p-5 mt-3'>
                    <h4 style={{fontSize: "16px"}}><i class="fa fa-circle-o-notch" style={{marginRight: "10px"}}></i>  
                    Console</h4>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Portfolio</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Corporate actions</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Funds statements</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Reports</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Profile</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Segments</a> <br/>
                </div>
                <div className='col-4 p-5 mt-3'>
                    <h4 style={{fontSize: "16px"}}><i class="fa fa-money" style={{marginRight: "10px"}}></i>  
                    Coin</h4>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Understanding mutual funds and coin</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Coin app</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Coin web</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>Transactions and reports</a> <br/>
                    <a href='' style={{textDecoration: "none", lineHeight: "2.5"}}>National Pension Schemes (NPS)</a> <br/>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;