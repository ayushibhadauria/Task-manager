
import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import {connect} from 'react-redux'
import { addTaskAction } from '../../../actions/taskActions'

class Taskform extends Component  {

    state={
        title: "",
        description: "",
        titleErr: '',
        descriptionErr: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
            [e.target.id + "Err"] : '' 
        })
    }

    handleSubmit = (e) => {
        const {title, description}= this.state
        e.preventDefault();

        let valid= true;

        if (title=== '')
        {
            this.setState({
                titleErr :"this field cannot be blank"
            })
            valid= false;

        }

        if (description === '')
        {
            this.setState({
                descriptionErr :"this field cannot be blank"
            })
            valid = false;
        }

        if (valid){
            const data = {
                    title,
                    description
                }
            this.props.addTask(data)
        }

        this.setState({
            title: "",
            description : ""
            })
    }

   

render(){
    const {title, description, titleErr, descriptionErr} = this.state;

    return (
        <Form  onSubmit= {this.handleSubmit} >
        <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input 
            id="title" 
            onChange= {this.handleChange} 
            value ={title}
            />
            <span id = 'titleErr' style ={{color: 'red'}}>
                {titleErr}
            </span>
        </FormGroup>

        <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Input 
                type= 'textarea'
                onChange= {this.handleChange}
                id="description" 
                value ={description}
                rows="5" />
            <span id = 'descriptionErr' style ={{color: 'red'}}>
                {descriptionErr}
            </span>
        </FormGroup>

        <Button color="primary">Add</Button>
    </Form>
    )}}
    
    const mapDispatchToProps = (dispatch) => {
        return {
            addTask: (data) =>{
                dispatch(addTaskAction(data));
            }
        }}

export default connect(null, mapDispatchToProps)(Taskform)
