import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Loader from '../Shared/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';


const Login = (props) => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/home";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigateRegister = event => {
        navigate('/register');
    }
    if (loading || sending) {
        return <Loader></Loader>;
    }
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p>Error: {error?.message}</p>
            </div>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        console.log("toast");
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast("Sending Email");

    }

    return (
        <div className='m-5 border border-2 rounded p-5'>
            <Toaster position="top-center"
                reverseOrder={false} />
            <h1 className='text-center '>Login</h1>
            <div className='p-5'>
                <Form onSubmit={handleSubmit} >
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                        <Col className='mx-auto d-block' sm={10}>
                            <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">

                        <Col className='mx-auto d-block' sm={10}>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 1 }}>
                            <Button className='btn btn-dark w-50 d-block mx-auto my-2' type="submit">Log in</Button>
                        </Col>
                    </Form.Group>
                    {errorElement}
                    <p className='text-center'>New User? <Link to={'/register'} className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Register Here</Link></p>
                    <p className='text-center'>Forget Password? <Link to={'/register'} className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
                </Form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;