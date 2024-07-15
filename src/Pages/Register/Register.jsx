import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Loader from '../Shared/Loader/Loader';
const Register = (props) => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: (true) });

    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }
    if (loading || updating) {
        return <Loader></Loader>;
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }
    return (
        <div>
            <div className='register-container'>
                <h1>Register Here</h1>
                <form className='register-form mt-5' onSubmit={handleRegister} action="">
                    <input type="text" name="name" id="" placeholder='Your Name' />
                    <input type="email" name="email" id="" placeholder='Email adress' required />
                    <input type="password" name="password" id="" placeholder='password' required />
                    <div className="text-center mb-2">
                        <input onClick={() => setAgree(!agree)} type="checkbox" className="form-check-input d-inline-block me-2" id="terms" />
                        <label className="form-check-label d-inline-block" htmlFor="terms">Accepts Terms & Conditions</label>
                    </div>
                    <input disabled={!agree} className="btn btn-dark w-50 mx-auto" type="submit" value="Register" />

                    <p className='text-center'>Already Have an Account? <Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login Here</Link></p>
                </form>

            </div>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Register;