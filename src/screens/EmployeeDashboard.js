import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {employeeDashboard} from '../actions/employeeActions'

const EmployeeInfoScreen = () => {
    
    // const [employeeDetails, setEmployeeDetails] = useState([])
    const [keyword, setKeyword] = useState([])
    const dispatch = useDispatch()
    // console.log(keyword)
    const employeeList = useSelector(state => state.employeeDashboard)
    // console.log(employeeList)
    //console.log(employeeList.info[3].EDATE.split('T')[0]);
    
 
    useEffect(() => {
        dispatch(employeeDashboard(keyword))
    }, [keyword])

    // employeeList.map(eList => console.log(eList.Name));

    return employeeList.loading ? (<h2>Loading</h2>) : 
    //console.log(employeeList)
    (
    <div className='attendanceView'>
        <h2>Today's Attendance Report</h2>
       
        <input
            type="text" 
            autoFocus 
            value={keyword}
            placeholder={"search employee here"}
            onChange={(e) => setKeyword(e.target.value)}
        />
        
        
           <table>
                <tr> 
                 <td> Name </td>
                 <td> Department </td>
                 <td> Designation </td>
                 <td> Date </td>
                 <td> Day  </td>
                 <td> Status </td>
                 <td> Time In</td>
                 <td> Time Out</td>
                 <td> Roster Time In</td>
                 <td> Time Out</td>
                </tr>
                
             { employeeList.loading === false && employeeList.info &&
              
              employeeList.info.map(eList => 
               

                <tbody>  
                 
                 <tr key={eList.ECODE}>
                        
                    <td> {eList.ENAME} {eList["FNAME"]} </td>
                    <td> {eList.DEPARTMENT} </td>
                    <td> {eList.DESIGNATION} </td>
                    <td> {eList.EDATE.split('T')[0]}</td>
                    <td> {eList.EDAY} </td>
                    <td className="block"> {eList.STATUS} </td>
                    <td> {eList.TIME1} </td>
                    <td> {eList.TIME2} </td>
                    <td> {eList.TFROM} </td>
                    <td> {eList.TTO} </td>
                 </tr>
                 </tbody>
            
              )}
            </table>  

    </div>
    )
}

export default EmployeeInfoScreen
