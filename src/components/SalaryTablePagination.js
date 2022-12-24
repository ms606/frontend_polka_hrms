import { useState } from "react";
import PopUp from './PopUp';

const SalaryTablePagination = (props) => {
   const {data, isLoading} = props;
 //   console.log(data)

   const [seen, setSeen] = useState(false)
   const [date, setDate] = useState()
 
   function togglePop(e) {
     setSeen(!seen)
     console.log('seen',seen)
     if (!seen) setDate(e.target.textContent)
   };


if (isLoading) return <h1>Loading...</h1>

  return(
    <div>
        <table style={{ margin: '2rem'}}>
         <tbody>
             <tr style={{fontSize: '20px'}}>
               <td>Month</td>  
               <td>Amount</td>  
             </tr>
          {data.map((x,i) => (      
            <tr key={i} style={{fontSize: '20px'}}> 
            <td onClick={togglePop} value={x.EDATE.substring(0,10)}> {x.EDATE.substring(0,10)} </td> 
            <td> {x.NETSALARY.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </td> 
            </tr>           
         ))}
        </tbody>            
        </table>

        {seen ? <PopUp toggle={togglePop} date={date} /> : null}  
    </div>
    )
  }

export default SalaryTablePagination