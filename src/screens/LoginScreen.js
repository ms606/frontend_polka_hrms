import React, {useEffect, useState} from 'react'
import { Card, Button, Form, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { login } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);

    const dispatch = useDispatch()
    
    const userLogin = useSelector((state) => state.userLogin.userInfo)

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    useEffect(() => {
         if (userLogin) {
             navigate('/')
         } else {
           if (password) {
            toast.error('Wrong username or password!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true, 
                progress: undefined,
                })
           }                
         }        

    },[userLogin])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))     
    }


    return (
        <div>
            <h2>Welcome to Polka's ERP</h2>
            {/* {<h1>{error} </h1>} */}
            <Container fluid>
               <Row>
                 <div className="bg-dark" style={{ width: '50rem' }}>
                 <Col>
                    <Card bg='dark' text='white' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                    <Card.Title style={{ width: '21rem' }}>We believe in access everywhere</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                    </Card.Body>
                    </Card>
                </Col>
                </div>  
                <Col>
                <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address / Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter email or Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
             

                <InputGroup className="mb-3">                
                <FormControl
                    type={passwordShown ? "text" : "password"}
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setPassword(e.target.value)}
                />
                  <InputGroup.Text id="basic-addon1">
                    <i className="far fa-eye" id="togglePassword" onClick={togglePassword}/>
                   </InputGroup.Text>
                </InputGroup>
            
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>    
                </Col>
               </Row> 
            </Container>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            
        </div>

    )
}

export default LoginScreen
