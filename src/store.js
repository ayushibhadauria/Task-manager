import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import createSagaMiddleware from "@redux-saga/core";
import { checkUser } from "./services/userService";
import { userLoggedIn } from "./actions/userAction";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(saga))
const user = checkUser()
if (user){
    store.dispatch(userLoggedIn(user))
}
saga.run(rootSaga)

export default store