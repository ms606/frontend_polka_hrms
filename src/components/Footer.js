import React from 'react'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
    return <footer>
        <Navbar   bg="primary" variant='dark' expand="lg" collapseOnSelect fixed="bottom">
        <Container>
            <Navbar.Brand>Copyright &copy; Burhani IT Solutions</Navbar.Brand>
        </Container>
        </Navbar>
    </footer>
    
}
export default Footer



