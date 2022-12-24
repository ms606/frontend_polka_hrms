import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'
import { useSelector } from 'react-redux';

 const EmployeeProfileImage = () => {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    var userID = userLogin.userInfo[0].ECODE;
    const [src, setSrc] = useState(undefined);
    const url = `http://localhost:3000/api/employeeImage/${userID}`
    // if (userInfo) {
    //     ECODE = userLogin.userInfo[0].ECODE
    //   //  console.log(userID.userID,'url')
    //     url = `http://localhost:3000/api/employeeImage/${ECODE}`
    // }

   
    useEffect(() => {
        console.log(userID.userID,'url')
    }, []);

    const getImage = () => {
    axios.get(url, {responseType: 'json'})
    .then(res => {
        const base64String = btoa(String.fromCharCode(...new Uint8Array(res.data.IMAGE.data)));
        setSrc(base64String);        
    })
   }

   if (userID){
    getImage();   
   }
    
    return(
        <div style= {{display: "block", width: '150px', height: '150px'}} >
        
        <Image src={`data:image/jpg;base64,${src}`}  thumbnail roundedCircle alt="trial" 
            style= {{display: "block", width: '150px', height: '150px'}}/>
        </div>
    )
}

export default EmployeeProfileImage