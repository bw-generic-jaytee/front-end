import React from 'react';
import {Link} from 'react-router-dom';

//components
import NavBar from './NavBar';

const HomePage = () => {

    return(
        <div>
            <NavBar />
            <h1>Hello There</h1>
            <Link to = '/login' ><button>Log In</button></Link>
            <Link to = '/signup'><button>Sign Up</button></Link>
        </div>
    )
}

export default HomePage;