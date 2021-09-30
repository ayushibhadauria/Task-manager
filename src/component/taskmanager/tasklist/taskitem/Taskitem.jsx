import React from 'react'
import { Button, ListGroupItem } from 'reactstrap'
import { connect } from 'react-redux';
import { deleteTaskAction } from '../../../../actions/taskActions';
const Taskitem = (props) => {

    const {task } = props;

    const handleDelete = () =>{
        props.deleteTask(task.id)
    }

    return (
        <ListGroupItem>
            {task.title}
            <Button close onClick ={handleDelete}/>
        </ListGroupItem>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deleteTask : (id) =>{
            dispatch(deleteTaskAction(id))
        }
    }
}
export default connect(null, mapDispatchToProps)(Taskitem)
