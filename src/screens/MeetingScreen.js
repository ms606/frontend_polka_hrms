import React from 'react'
import { useSelector } from 'react-redux'
import store from '../store';
import { EMPLOYEE_DASHBOARD_REQUEST } from '../constants/employeeConstants';

class MeetingScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            employeeNames: [],
            value: "",
            error: null,
            uname: "",
            activeEmp: "",
            options: [],
            selected: []
        }
       
        this.handleKeyDown  = this.handleKeyDown.bind(this)
        this.handleChange   = this.handleChange.bind(this)
        this.handleSubmit   = this.handleSubmit.bind(this)  
        this.handleSelected = this.handleSelected.bind(this)     
    }
    


 componentDidMount(){
    const userDetail = store.getState()
    const uname = userDetail.userLogin.userInfo[0].UNAME
   
    this.setState({uname: uname})
    const activeEmployee = store.getState().activeEmployee.activeEmp
    console.log('store', activeEmployee)

    
    setTimeout(() => {
        this.setState({activeEmp: activeEmployee})
        

        let res = [];
        if (this.state.activeEmp.length > 0) {
        this.state.activeEmp.map(x => res.push({"label" : x["Name"], "value": x["Employee ID"]}))
        this.setState({ options: res})
        }

        console.log(2, this.state)

    },2000)
 
 }



 handleChange = evt => {
    this.setState({
      value: evt.target.value,
      error: null
    });
  };

 handleKeyDown = evt => {
    let sw = 0;
    if (["Enter", "Tab", ","].includes(evt.key)) {        
      evt.preventDefault();
      var value = this.state.value.trim();

      this.state.activeEmp.map(x => {
          if (x.Name === this.state.value) {
            console.log(x)
            if (value) {
                this.setState({
                    employeeNames: [...this.state.employeeNames, this.state.value],
                    value: ""
                });
                sw = 1; 
              }  
          }
      })

      if (sw === 0) {
          alert('No employee found')
          this.setState({value: ''})
        }
    }

    };
  
  handlePaste = evt => {
    evt.preventDefault();
    var paste = evt.clipboardData.getData("text");
  };

  handleDelete = item => {
    this.setState({
        employeeNames: this.state.employeeNames.filter(i => i !== item)
    });
  };

  handleSubmit = e => {
    e.preventDefault()
 }

  handleSelected = e => {
    // console.log(e)
    this.setState({selected: e})
    this.setState({ employeeNames: []})
    e.map(x => this.setState({ employeeNames: [...this.state.employeeNames,  x.label],  value: ""
    })
    )
  }

 
    render() {
     
        return (
            <>
            <form onSubmit={this.handleSubmit}>  
            <div>
              <h3>Book the appointment</h3>
                <p>Held by: {this.state.uname}</p>
                {this.state.employeeNames.map(item => (
                <div className="tag-item" key={item}>
                    {item}
                    <button
                    type="button"
                    className="button"
                    onClick={() => this.handleDelete(item)}
                    >
                    &times;
                    </button>
                </div>
                ))}

                {/* <input 
                    className = "input"
                    placeholder = "Please enter the name for the meeting members and press enter"
                    value={this.state.value}
                    onKeyDown={this.handleKeyDown}
                    onChange ={this.handleChange}
                /> */}

                

                <input 
                    type = 'date'
                    className = "date"
                />
             <div>
                <textarea 
                    placeholder = "Enter a little bit about what it's about"
                    className = 'meetingDescription'
                    rows = '15'
                    cols = '80'
                />
             </div>
               <input type='submit' value='submit' />
            </div>
            </form>
       
            </>
        )
    }
}


// const MeetingScreen = () => { 

// const userLogin = useSelector(state => state.userLogin)
// const uname = userLogin.userInfo[0].UNAME


//     return (
//         <div>
//             <h3>Book the appointment</h3>
//             <p>Held by: {uname}</p>
//             <input 
//                 placeholder = "Please enter the name for the meeting members and press enter"
//                 className = 'teamMember'
//             />
//             <input 
//                 type = 'date'
//             />
//             <div>
//             <textarea 
//                 placeholder = "Enter a little bit about what it's about"
//                 className = 'meetingDescription'
//             />
//             </div>
//             <input type='submit' value='submit' />

//         </div>
//     )
// }

 export default MeetingScreen
        