import { TASK_ADDED, TASK_DELETED, TASK_LOADED } from "../config/actiontype";

const initialState = []

export const taskReducer = (state = initialState, action) => {
    switch (action.type){
        case TASK_ADDED:
            return [
                ...state,
                action.task
            ]

        case TASK_DELETED:
            const {id} = action
            return state.filter(task =>  task.id !== id)

        case TASK_LOADED:
            return action.tasks

        default :
            return state

    }
}