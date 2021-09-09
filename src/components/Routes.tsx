import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './page/Login'
import SignUp from './page/Signup'
import Sports from './Pages/Sports'
import Entertainment from './Pages/Entertainment'
import Business from './Pages/Business'
import Science from './Pages/Science'
import Health from './Pages/Health'
import Technology from './Pages/Technology'
import Subscribe from './Pages/subscribe'
import ForgotPassword from './page/ForgotPassword'

class Routes extends React.Component {
 render () { 
     return (
       <BrowserRouter>
        <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/login' component = {Login}/>
        <Route exact path = '/signup' component = {SignUp}/>
        <Route exact path = '/subscription' component = {Subscribe}/>
        <Route exact path = '/sports' component = {Sports}/>  
        <Route exact path = '/entertainment' component = {Entertainment}/>
        <Route exact path = '/business' component = {Business}/>
        <Route exact path = '/health' component = {Health}/>
        <Route exact path = '/technology' component = {Technology}/> 
        <Route exact path = '/science' component = {Science}/> 
        <Route exact path = '/forgot-password' component = {ForgotPassword}/>
        </Switch>
        </BrowserRouter>
)
     
 }
}


    


export default Routes
