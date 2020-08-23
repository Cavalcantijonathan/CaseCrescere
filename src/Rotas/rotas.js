import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import Home from '../Pages/Home/home';
import Login from '../Pages/Login/login';

function Rotas () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = '/' component = {Login} />
                <Route path = '/home' component = {Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas;
