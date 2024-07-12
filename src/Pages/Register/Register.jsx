import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
const Register = (props) => {
    const nav = useNavigate();
    const navigateLogin = e =>{
        nav('/login');
    }
    return (
        <div className='register-container'>
            <h1>Register Here</h1>
            <form className='register-form' action="">
                <input type="text" name="name" id="" placeholder='Your Name'/>
                <input type="email" name="email" id="" placeholder='Email adress' required />
                <input type="password" name="password" id=""  placeholder='password' required/>
                <input type="submit" value="Register" />
                <p>Already Have an Account? <Link to={'/login'} className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Login Here</Link></p>
            </form>
        </div>
    );
};

export default Register ;