import React from 'react';
import { useState } from 'react';
import PaginationEmployeeTimings from './PaginationEmployeeTimings';


function AttendanceTable(props){

   // User is currently on this page
   const [currentPage, setCurrentPage] = useState(1);
   // No of Records to be displayed on each page   
   const [recordsPerPage] = useState(10);

   const indexOfLastRecord = currentPage * recordsPerPage;
   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
      
   // console.log(props)
    //console.log(props.timeData[0].STATUS)

    const timeSheet = props.timeData;
    const loading = props.loading;
    

     if (props.loading) return "Select the date from date picker..."
     if (props.error) return "Error..."


      // Records to be displayed on the current page
      let currentRecords;
      let nPages;
      if(props.timeData){
         currentRecords = props.timeData.slice(indexOfFirstRecord, 
            indexOfLastRecord);
         nPages = Math.ceil(props.timeData.length / recordsPerPage)
      }
   
 return (
     <div>
        {
         <table>
          <thead>
            <tr> 
                 <td> Date </td>
                 <td> Day  </td>
                 <td> Status </td>
                 <td> Time In</td>
                 <td> Time Out</td>
                 <td> Roster Time In</td>
                 <td> Time Out</td>
            </tr>
          </thead> 
          <tbody>         
             { currentRecords && currentRecords.map( (eList, i) =>                                              
                 <tr key={eList.EDATE}>
                    <td> {eList.EDATE.split('T')[0]}</td>
                    <td> {eList.EDAY} </td>
                    <td className="block"> {eList.STATUS} </td>
                    <td> {eList.TIME1} </td>
                    <td> {eList.TIME2} </td>
                    <td> {eList.TFROM} </td>
                    <td> {eList.TTO}   </td>
                 </tr>               
              )}
              </tbody>
            </table>  
            }
           { nPages &&
            <PaginationEmployeeTimings
               nPages = { nPages }
               currentPage = { currentPage } 
               setCurrentPage = { setCurrentPage }
            />   
            }  
       </div>
 )
}

export default AttendanceTable