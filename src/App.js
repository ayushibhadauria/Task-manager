
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './component/shared/header/Header'
import Footer from './component/shared/footer/Footer'
import PageNotFound from './component/shared/PageNotFound/PageNotFound'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Taskmanager from './component/taskmanager/Taskmanager'
import tasklist from './component/taskmanager/tasklist/tasklist';



function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Header />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to="/login" />} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/tasks" exact component={Taskmanager} />
                        <Route path="/bookings" exact component={tasklist} />
                        <Route path="/**" component={PageNotFound} />
                    </Switch>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
