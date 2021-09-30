import { ADD_TASK, DELETE_TASK, LOAD_TASK, TASK_ADDED, TASK_DELETED, TASK_LOADED } from "../config/actiontype";

export const addTaskAction = (data) => {
    return{
        type : ADD_TASK,
        data
    }
}

export const taskAddedAction = (task) => {
    return{
        type : TASK_ADDED,
        task
    }
}

export const deleteTaskAction = (id) => {
    return{
        type : DELETE_TASK,
        id
    }
}

export const taskDeletedAction = (id) => {
    return{
        type : TASK_DELETED,
        id
    }
}

export const loadTaskAction = () => {
    return{
        type : LOAD_TASK
    }
}

export const taskLoadedAction = (tasks) => {
    return{
        type : TASK_LOADED,
        tasks
    }
}