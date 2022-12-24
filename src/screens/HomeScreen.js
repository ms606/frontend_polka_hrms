import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {activeEmp} from '../actions/employeeActions'
import EmployeeProfileImage from './EmployeeProfileImage'
import EmployeeInfoScreen from './EmployeeInfoScreen'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('')
    const [userName, setUserName] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const {UNAME} = userLogin.userInfo[0]
    const dispatch = useDispatch()
    // setUserName(UNAME)
    
    useEffect(() => {
        if (!UNAME) {
            navigate('/login')
        }
        getCompanyName()
       // dispatch(activeEmp())  
    },[])

      const  getCompanyName = async () => {
      const res = await axios.get('http://localhost:3000/api/companyprofile') 
      var data = res.data
      setCompanyName(data[0].TITLE)   
    }
    
    return (
       <div>
        <h3>Welcome to {companyName}</h3> 
        <br />
          <Container>
            <Row>
              <Col><h5 className='p-2'>Hello {UNAME} hope you are having a good day. </h5> 
               <div style={{border: '1px solid gray', padding: '10px', borderRadius: '8px'}}>
               {UNAME && <EmployeeInfoScreen /> } 
               </div>
              </Col> 
              {/* <Col> <EmployeeProfileImage/> </Col>             */}
            </Row>
            <Row>
             
            </Row>
          </Container>  
       </div>
    )
}

export default HomeScreen
