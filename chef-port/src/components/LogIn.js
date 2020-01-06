import React, {useState} from 'react';

//utils
import {axiosWithAuth} from '../utils/axiosWithAuth';

const LogIn = () => {

    return(
        <div>
            <form>
                <input type = 'text' placeholder = 'Username' name = 'username' />
                <input type = 'text' placeholder = 'Password' name = 'password' />
            </form>
        </div>
    )
}

export default LogIn;