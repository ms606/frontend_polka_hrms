import axios from "axios";
import React from "react";
import Form from 'react-bootstrap/Form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ApplicationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {detail: '', subject: '', typer: '', from_date: '', to_date: '',  selectedFile:''};
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
          })
    }
   
    handleSubmit(e){
        e.preventDefault()
        console.log(this.state)        

        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        
        axios
            .post('http://localhost:3000/api/employeeApplication/', this.state)
            .then(response => {
                console.log(response)
                this.setState({detail: '', subject: ''});
            })
            .catch(error =>{
                console.log(error)
            })
            
            toast.success('Data saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }) 
    }  

    render() {
        return (            
          <Form onSubmit={this.handleSubmit} >
            <h1>Apply for application</h1>

           <label>Application Type :</label>
                <select 
                        className="form-control" 
                        name="typer" 
                        onChange={this.handleInputChange}
                        // value = {this.state.typer}
                        >
                    <option value="1">Early Leave</option>
                    <option value="2">Late Arrival</option>
                    <option value="3">Full Day Leave</option>
                </select>
                <Form.Label> From </Form.Label>
                 <Form.Control type='date' name='from_date' value = {this.state.from_date} onChange={this.handleChange} required/>

                 <Form.Label> To </Form.Label>
                 <Form.Control type='date' name='to_date' value = {this.state.to_date} onChange={this.handleChange} required/>

                <Form.Label> Subject: </Form.Label>
                 <Form.Control type='text' name='subject' value={this.state.subject} onChange={this.handleChange} required/>
                
                <Form.Label> Detail Reason: </Form.Label>
                 <Form.Control  as='textarea' name='detail'  rows='5' value={this.state.detail} onChange={this.handleChange} required/>

{/* 
                 <Form.Label> Upload documents </Form.Label>
                <Form.Control type='file' name='upload_file'  onChange={this.handleInputChange} /> */}
                <br />

                <input type='submit' value='Submit' onClick={this.createToast} />
                    

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
            </Form>

        )
    }
}

export default ApplicationForm