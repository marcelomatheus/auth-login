import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom"
import { Button, Container, Figure, Form, Row } from "react-bootstrap";
import axios from "axios";

const Login = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })  

    const handleLogin = (e: any) => {
        e.preventDefault()
        console.log(data);
        axios.get('/')
        .then(function (response) {
            // aqui acessamos o corpo da resposta:
            console.log(response.data);
          })
          .catch(function (error) {
            // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
            console.log(error);
          })
        
    };

    return (
        <>
            <Container className="w-10">
                <Figure />
                <div>Login</div>
                <Form className="mb-3" onSubmit={handleLogin}>
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
                    <Button variant="primary" type="submit" onClick={handleLogin}>
                        Login
                    </Button>


                </Form>



                <Row>
                    <Link to="/register">Don't have an account? Register</Link>
                </Row>
            </Container>
        </>

    )
}

export default Login;