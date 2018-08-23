import React from 'react';
// import '../assets/css/app.css';
// import logo from '../assets/images/logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import {Route} from 'react-router-dom';
import List from './list'

const App = () => (
        <div className="container">
            <h1 className="center">Redux To Do</h1>
            <Route exact path = "/" component = {List}/>
        </div>
);

export default App;
