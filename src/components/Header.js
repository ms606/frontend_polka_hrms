import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {  Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin.userInfo)
  
  var userInfo
  if (userLogin) userInfo = userLogin[0]
  const loggedIn = (userInfo ? true : false);

  const logoutHandler = () => {
    dispatch(logout())
  }
 
    return (  
        <header>
            <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
              <Container>
                {/* <LinkContainer to='/'> */}
                <Navbar.Brand>BITS GARMENT</Navbar.Brand>
                {/* </LinkContainer> */}
                {/* <img id="mobile-cta" class="mobile-menu" src="/menu.svg" alt="Open Navigation"></img> */}
                {/* <div class='navigation-head'>  */}

                
                {loggedIn && (<Nav className="me-auto">
                  {/* <Nav.Link href='/stationeryorder'>Stationary</Nav.Link>  */}
                 <NavDropdown title="Employee" id='employee-navbar-nav'>
                   {/* <NavDropdown.Item  href='/employeeDashboard'>Dashboard</NavDropdown.Item> */}
                   <NavDropdown.Item  href='/'>Home</NavDropdown.Item>
                  <NavDropdown.Item href='/EmployeeApplication'>Application</NavDropdown.Item>
                  {/* <NavDropdown.Item href='/employeeImage'>Profile Image</NavDropdown.Item> */}
                  <NavDropdown.Item href='/EmployeeTiming'>Timing View</NavDropdown.Item>
                  <NavDropdown.Item href='/EmployeeSalary'>Salary Detail</NavDropdown.Item>
                 </NavDropdown>
                  {/* <Nav.Link href='/BookAppointment'>Book Appointment</Nav.Link> */}
                </Nav>)}

                <Nav>
                <Nav.Link eventKey={1} href="/myaccount">
                    My Account
                </Nav.Link>
                
                {userInfo ? (
                  <NavDropdown title={userInfo.UNAME} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown> 
                ) : (
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <i className='fas fa-user'></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
                </Nav>
                {/* </div> */}
                </Container>  
            </Navbar>
        </header>
    )
}

export default Header