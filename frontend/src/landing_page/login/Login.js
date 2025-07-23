import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };
    const handleError = (err) => 
            toast.error(err, {
                position: "bottom-left",
        });
    const handleSuccess = (msg) => 
        toast.success(msg, {
            position: "bottom-right",
    });

    const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                const { data } = await axios.post(
                    "http://localhost:3002/login",
                    {
                        ...inputValue,
                    },
                    {withCredentials: true}
                );
                const { success, message } = data;
                if (success) {
                    handleSuccess(message);
                    setTimeout(() =>{
                        window.location.href = "http://localhost:3001/";
                    }, 1000);
                }else {
                    handleError(message);
                }
            }catch(error) {
                console.log(error);
            }
            setInputValue({
                ...inputValue,
                email: " ",
                password: " ",
            });
        };

    return ( 
        <div className='container mb-5'>
            <div className='row mt-5 mb-5 text-center'>
                <h1>Open a free demat and trading account online</h1>
                <p>Start investing brokerage free and join a community of 1.6+ crore investments</p>
                <div className='col-6'>
                    <img src='/media/images/signup.png' style={{width: "80%"}}></img>
                </div>
                <div className='col-6 mt-5 mb-5'>
                    <form onSubmit={handleSubmit} className='mb-5'>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-6">
                            <input type="email" class="form-control" id="inputEmail3" name="email" value={email} onChange={handleOnChange} required></input>
                            </div>
                        </div>
                         <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-6">
                            <input type="password" class="form-control" id="inputPassword3" name="password" value={password} onChange={handleOnChange} required></input>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <button type="submit" class="btn btn-primary">Login</button>
                            <br/>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-2"></div> {/* offset, like label alignment */}
                            <div className="col-sm-6 text-start">
                                <span>
                                Don't have an account? <Link to="/signup">Signup</Link>
                                </span>
                            </div>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
     );
}

export default Login;