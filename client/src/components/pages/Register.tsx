import React, { EventHandler } from "react";
import { useState } from "react";
import {Container, Form, Figure, Button, Row} from "react-bootstrap"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })  

    const handleLogin = (e:any) => { 
        e.preventDefault()
        console.log(data);
    };

    return (
        <>
            <Container className="w-10">
                <Figure />
                <div>Login</div>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Do you accept our the terms and conditions?" />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Login
                    </Button>

                </Form>


                
                <Row>
                    <Link to="/login">Do you already have an account? Do login</Link>
                </Row>
            </Container>
        </>

    )
}



export default Register;