import React from 'react'
import { Nav } from 'react-bootstrap'

const SideNav = () => {
  
    return (  
        <sidebar>
            <Nav defaultActiveKey="/home" className="col-md-1 d-none d-md-block bg-light sidebar">
            <Nav.Link href="/home">Dashboard</Nav.Link>
            <Nav.Link eventKey="stationary">Stationary</Nav.Link>
            </Nav>
        </sidebar>
    )
}
export default SideNav