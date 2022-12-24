import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import AttendanceTable from '../components/AttendanceTable';
import { useSelector } from 'react-redux'

 const EmployeeTiming = () => {
    const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    const [date, setDate] = useState('')
    const [timeData, setTimeData] = useState(null)

    const ecode = useSelector((state) => state.userLogin.userInfo[0].ECODE)

    const getTIme = async () => {

        {date && axios.get(`http://localhost:3000/api/employeeTiming/${ecode}/${date}`)
            .then (res => {
                const time = res.data;
                setTimeData(time)     
                //console.log(time)   
            })
            .finally(() => {
                setLoading(false)
            })}
        }

    useEffect(() => {
        if (ecode != null && date != null) getTIme()
        // console.log('Data',date)
    },[date])

    return (
    <div>
            <p>This is timings page</p>

            <Form.Label> For the month of </Form.Label>     
              <Form.Control className="w-auto p-2 m-2" type='date' name='from_date' 
                    onChange={(e) => setDate(e.target.value)}/>

            <AttendanceTable date={date} timeData={timeData} loading={loading} error={null}/>
    </div>
    )}

    export default EmployeeTiming;