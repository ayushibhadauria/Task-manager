import React, { Component } from 'react'
import { Alert, ListGroup } from 'reactstrap'
import Taskitem from './taskitem/Taskitem'
import { connect } from 'react-redux'
import { loadTaskAction } from '../../../actions/taskActions'

class Tasklist extends Component {

    componentDidMount(){
        this.props.loadtask();
    }

    render (){
        const {tasks} = this.props

        if (tasks.length === 0 ){
            return <Alert>No data found</Alert>
        }    

        return (
        <ListGroup>
            {tasks.map((task) =>  <Taskitem key = {task.id} task={task}/>)}
        </ListGroup>
    )
}}

const mapStateToProps = (state) => {
    return{
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadtask: () => dispatch(loadTaskAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasklist)
