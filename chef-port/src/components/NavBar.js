import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

const NavBar = () => {

    return(
        <div className = 'nav'>
            <Link to = '/'><h1>Chef Portfolio</h1></Link>
            <div className = 'links'>
                {localStorage.token ? <Link to = '/dashboard'><Button onClick = {() => {localStorage.clear()}}>Log Out</Button></Link>: <Link to = '/login' ><Button>Log In</Button></Link>}
                {localStorage.token ? <Link to = '/'><Button>Home Page</Button></Link> : null}       
                <Link to = '/signup'><Button>Sign Up</Button></Link>
                <Link to = '/dashboard'><Button>Dashboard</Button></Link>
                <a href = 'https://bw-chef-portfolio-jaytee.github.io/marketing-page/'>
                    <Button>About</Button>
                </a>
            </div>
            
        </div>
    )
}

export default NavBar;