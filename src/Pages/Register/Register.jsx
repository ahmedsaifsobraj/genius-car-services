import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Register = (props) => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = event =>{
        nav('/login');
    }
    if(user){
        navigate('/home');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='register-container'>
            <h1>Register Here</h1>
            <form className='register-form' onSubmit={handleRegister} action="">
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