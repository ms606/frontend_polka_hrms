import React, { Component } from "react";
import axios from 'axios';
import store from '../store'

export default class PopUp extends Component {
  state = {
    earning:  [],
    deduction: [],
    summary:   [],
    ecode: null
  }

  componentDidMount() {
    this.getSalaryDetail()
    this.setState({ecode: store.getState().userLogin.userInfo[0].ECODE})
  }
  
  // const userLogin = useSelector(state => state.userLogin)
  // const {ECODE} = userLogin.userInfo
  // 
  

  getSalaryDetail = async() => {
    // let res = await axios.get("http://localhost:3000/api/employeeSalaryDetail/3/2021-12-31");
    // this.setState({earnings: res.data})

    //this.setState({ecode: store.getState().userLogin.userInfo.ECODE})
    const ecode = store.getState().userLogin.userInfo[0].ECODE
    console.log('state',this.state)

    const res = await axios.get(`http://localhost:3000/api/employeeSalaryEarning/${ecode}/${this.props.date.trim()}`)
    this.setState({earning: res.data})
  
    const ded = await axios.get(`http://localhost:3000/api/employeeSalaryDeduction/${ecode}/${this.props.date.trim()}`)
    this.setState({deduction: ded.data})

    const sum = await axios.get(`http://localhost:3000/api/employeeSalarySummary/${ecode}/${this.props.date.trim()}`)
    this.setState({summary: sum.data})

    
 }

handleClick = () => {
 this.props.toggle();
};



render() {
   //console.log('props',this.props)  
  return (
    <div>
      {
      this.state.earning.length === 0 || this.state.deduction.length  === 0  || this.state.summary.length === 0 ? (
        <h1>Loading</h1>
      ) : 

     <div className="modal">
      <div className="modal_content">
      <span className="close" onClick={this.handleClick}> &times; </span>
     <h3>Salary Detail</h3>
      <p style={{fontWeight: "bold"}}>Earning</p>
      {this.state.earning.map(x => 
          <p style={{fontSize: 13,  paddingLeft: '60px'}} >{ x.LNAME}  {x.AMT}</p>
          )
      }
      <p style={{fontWeight: "bold"}}>Deduction</p>
      {this.state.deduction.map(x => 
          <p style={{fontSize: 13,  paddingLeft: '60px'}} >{ x.LNAME}  {x.AMT}</p>
          )
      }
      <p style={{fontWeight: "bold"}}>Total</p>
      {this.state.summary.map(x => 
          <p style={{fontSize: 13,  paddingLeft: '60px'}} >{ x.NETSAL} </p>
          )
      }
      </div>
      </div>
   }
   </div>  
  );
 }
}