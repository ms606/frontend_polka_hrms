import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {employeeInfo} from '../actions/employeeActions'

const EmployeeInfoScreen = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const info = useSelector(state => state.employeeInfo.info)
    
    const {ECODE} = userLogin.userInfo[0]

    // var ECODE
    // if (userLogin) ECODE = userLogin.userInfo.rows[0].ECODE
    // console.log('ecode',ECODE)

    useEffect(() => {
        console.log(ECODE,'1')
         { ECODE && dispatch(employeeInfo(ECODE)) }
    }, [])

    return (
        <div>
        { info &&
       <div>
        <h6 className='p-2'>Father/Spouse : <span style={{fontWeight: '500'}}>{info["Father's Name"]}</span></h6>  
        <h6 className='p-2'>Address : <span style={{fontWeight: '500'}}>{info.Address} </span> </h6>
        <h6 className='p-2'>Appointed On: <span style={{fontWeight: '500'}}>{info["Appointed On"]} </span></h6>
       </div>
    }
   </div>  
)
}

export default EmployeeInfoScreen
