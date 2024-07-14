import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = (props) => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const navigateRegister = event => {
        navigate('/register');
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



    return (
        <div className='m-5 border border-2 rounded p-5'>
            <h1 className='text-center '>Login</h1>
            <div className='p-5'>
                <Form onSubmit={handleSubmit} >
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        
                        <Col sm={10}>
                            <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        
                        <Col sm={10}>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Col>
                    </Form.Group>
                   

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset:0 }}>
                            <Button className='btn btn-dark' type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                    <p className='text-center'>New User? <Link to={'/register'} className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Register Here</Link></p>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;