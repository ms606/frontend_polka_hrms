import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class AccountSetting extends React.Component {
    render(){
        return (
          <div>
            <Container>                
            <Form >
            <h2>My Account</h2>
            <p>Change password</p>
            <Col xs={2} md={5}> 
            <Form.Label size="sm">Old password</Form.Label> 
            <Form.Control size="sm" type='text' />

            <Form.Label size="sm">New password</Form.Label> 
            <Form.Control size="sm" type='text' />

            <Form.Label size="sm">Confirm new password</Form.Label> 
            <Form.Control size="sm" type='text' />
            <Button variant="primary" type="submit" className='m-1'>
                Submit
            </Button>
            </ Col >
            </Form>    
            </ Container >
          </div>    
        )
    }
}

export default AccountSetting