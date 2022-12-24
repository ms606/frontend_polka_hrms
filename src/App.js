import {  Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
//import SideNav from './components/SideNav'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import EmployeeInfoScreen from './screens/EmployeeInfoScreen'
import EmployeeTiming from './screens/EmployeeTiming'
import LoginScreen from './screens/LoginScreen';
import MeetingScreen from './screens/MeetingScreen';
import EmployeeDashboard from './screens/EmployeeDashboard';
import EmployeeApplication from './screens/EmployeeApplication';
import EmployeeProfileImage from './screens/EmployeeProfileImage';
import EmployeeSalary from './screens/EmployeeSalary';

function App() {
  
 return (
   <>
    <Router>
      <Header />
      <main className= 'py-3'>
          <Container> 
           <Routes>          
            <Route path='/login' element={ <LoginScreen />} exact />
            <Route path='/EmployeeDashboard' component ={EmployeeDashboard} exact/>
            <Route path='/EmployeeProfile' element={<EmployeeInfoScreen />} exact/>
            <Route path='/EmployeeApplication' element ={<EmployeeApplication />} exact/>
            <Route path='/employeeImage' component={EmployeeProfileImage} exact />
            <Route path='/EmployeeTiming' element={ <EmployeeTiming />} exact />
            <Route path='/EmployeeSalary' element={<EmployeeSalary />} exact />
            <Route path='/BookAppointment' component={MeetingScreen} exact />
            <Route path='/' element ={ <HomeScreen />} exact/>
           </Routes> 
          </Container>
      </main>
      <Footer />
    </Router>  
   </>
 )
}

export default App;