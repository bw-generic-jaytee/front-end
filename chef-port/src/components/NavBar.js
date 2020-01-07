import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

const NavBar = () => {

    return(
        <div className = 'nav'>
            <h1>Chef Portfolio</h1>
            <div className = 'links'>
                <Link to = '/login' ><Button>Log In</Button></Link>
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