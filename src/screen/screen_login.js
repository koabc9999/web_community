import React from 'react';
import {Route} from 'react-router-dom';

import ComponentLogin from '../components/component_login.js';
import ComponentSignUp from '../components/component_signUp.js';


function ScreenLogin() {// javascript 프레임워크, npm  node project manager
    
    
    //<img src="./images/pepe.jpg" />
    return (
        <div>
            <style>{'body {background-color: mediumpurple; }'}</style>
            <Route exact path='/' component={ComponentLogin}></Route>
            <Route path='/signup' component={ComponentSignUp}></Route>
        </div>
    );
}

export default ScreenLogin;