import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = (props) => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventdefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email,password);
    }

    const navigateRegister = e=>{
        navigate('/register');
    }

    return (
       <div className='m-5 border border-2 rounded p-5'>
        <h1 className='text-center '>Login</h1>
        <div className='p-5'>
         <Form onSubmit={handleSubmit} >
            <Form.Group  as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Password
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Sign in</Button>
                </Col>
            </Form.Group>
            <p>New User? <Link to={'/register'} className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Register Here</Link></p>
        </Form>
       </div>
       </div>
    );
};

export default Login;