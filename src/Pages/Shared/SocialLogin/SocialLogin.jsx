import React from 'react';
import google from '../../../Images/social/google.png';
import fb from '../../../Images/social/fb.png';
import github from '../../../Images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = (props) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement = 
        <div>
            <p>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 p-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div className='my-2'>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-50 d-block mx-auto'><img style={{ height: '30px' }} src={google}></img><span className='px-2'>Continue with Google</span></button>
            </div>
            <div className='my-2'>
                <button className='btn btn-dark w-50 d-block mx-auto'><img style={{ height: '30px' }} src={fb}></img><span className='px-2'>Continue with Facebook</span></button>
            </div>
            <div className='my-2'>
                <button onClick={() => signInWithGithub()} className='btn btn-dark w-50 d-block mx-auto'><img style={{ height: '30px' }} src={github}></img><span className='px-2'>Continue with GitHub</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;