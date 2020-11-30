import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
        }
        this.saveEmployee=this.saveEmployee.bind(this);
        this.changeemailIdHandler=this.changeemailIdHandler.bind(this);
        this.changelastNameHandler=this.changelastNameHandler.bind(this);
        this.changeemailIdHandler=this.changeemailIdHandler.bind(this);
    }
    changefirstNameHandler = (event)=>{
        this.setState({firstName : event.target.value});
    }
    saveEmployee =(e) =>{
        e.preventDefault();
        let employee = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            emailId : this.state.emailId
        }
        console.log('employee > ' + JSON.stringify(employee));
        EmployeeService.createEmployees(employee).then(res =>{
            this.props.history.push("/employees");
        })

    }
    cancel =()=>{
        this.props.history.push("/employees");

    }
    changelastNameHandler = (event)=>{
        this.setState({lastName : event.target.value});
    }

    changeemailIdHandler = (event)=>{
        this.setState({emailId : event.target.value});
    }


render()
{
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3"></div>
                    <h3 className="text-center">Add Employees</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>First Name :</label>
                                <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changefirstNameHandler} />
                                <label>Last Name :</label>
                                <input placeholder="last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changelastNameHandler} />
                                <label>Email:</label>
                                <input placeholder="email" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeemailIdHandler} />
                                <button className="btn btn-success" onClick={this.saveEmployee}>SAVE</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft : "10px"}}> KANSAL</button>



                            </div>



                        </form>
                    </div>
                </div>




            </div>
        </div>
    );
}
}