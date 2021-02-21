import React from 'react'
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home'
import Login from './Login'
import Pegawai from './Pegawai'

const Pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/pegawai' component={Pegawai} />
    </Switch>
)

export default Pages