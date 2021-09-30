import {takeEvery, call, all, put} from 'redux-saga/effects'
import * as types from '../config/actiontype'
import * as service from '../services/taskService'
import * as actions from '../actions/taskActions'
import * as alert from '../actions/alertAction'

// workers
function* loadTask() {
    try{
        const tasks= yield call(service.getTasks)
    yield put(actions.taskLoadedAction(tasks))
    }
    catch(e){
        console.log(e);
    }
}

function* addTask({data}){
    try{
        const task =yield call(service.addTask, data)
    yield put(actions.taskAddedAction(task))
    yield put(alert.setAlertAction({
        text: 'Task Added!',
        color: 'success'
    }))
    }
    catch(e){
        yield put(alert.setAlertAction({
            text: 'Task Not Added.',
            color: 'danger'
        }))
    }
}

function* deleteTask({id}){
    try{
    yield put(actions.taskDeletedAction(id))
    yield put(alert.setAlertAction({
        text: 'Task Deleted.',
        color: 'success'
    }))
    }
    catch(e){
        yield put(alert.setAlertAction({
            text: 'Task Not Deleted.',
            color: 'danger'
        }))
    }
}

// watchers
function* watchLoadTasks() {
    yield takeEvery(types.LOAD_TASK, loadTask)
}

function* watchAddTask(){
    yield takeEvery(types.ADD_TASK, addTask)
}

function* watchDeleteTask(){
    yield takeEvery(types.DELETE_TASK, deleteTask)
}


export function* taskSaga(){
    yield all (
        [
            watchLoadTasks(), 
            watchAddTask(),
            watchDeleteTask()
        ]
    )
}