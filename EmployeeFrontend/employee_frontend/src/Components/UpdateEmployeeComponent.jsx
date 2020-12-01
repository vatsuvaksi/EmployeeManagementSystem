import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           id : this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
        }
        this.editEmployees=this.editEmployees.bind(this);
        this.changeemailIdHandler=this.changeemailIdHandler.bind(this);
        this.changelastNameHandler=this.changelastNameHandler.bind(this);
        this.changeemailIdHandler=this.changeemailIdHandler.bind(this);
    }
    changefirstNameHandler = (event)=>{
        this.setState({firstName : event.target.value});
    }
    componentDidMount(){
        EmployeeService.getEmployeebyId(this.state.id).then((res) =>{
            let employee = res.data;
            this.setState({firstName :employee.firstName, lastName:employee.lastName,emailId : employee.emailId})
        });
    }
    editEmployees =(e) =>{
        e.preventDefault();
        let employee = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            emailId : this.state.emailId
        }
        console.log('employee > ' + JSON.stringify(employee));
        EmployeeService.updateEmployees(employee,this.state.id).then((res) =>{
            this.props.history.push("/employees");

        })
    }
    // saveEmployee =(e) =>{
    //     e.preventDefault();
    //     let employee = {
    //         firstName : this.state.firstName,
    //         lastName : this.state.lastName,
    //         emailId : this.state.emailId
    //     }
    //     console.log('employee > ' + JSON.stringify(employee));
    //     EmployeeService.createEmployees(employee).then(res =>{
    //         this.props.history.push("/employees");
    //     })

    //}
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
                    <h3 className="text-center">Update employee</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>First Name :</label>
                                <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changefirstNameHandler} />
                                <label>Last Name :</label>
                                <input placeholder="last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changelastNameHandler} />
                                <label>Email:</label>
                                <input placeholder="email" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeemailIdHandler} />
                                <button className="btn btn-success" onClick={this.editEmployees}>SAVE</button>
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