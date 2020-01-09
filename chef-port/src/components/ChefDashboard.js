import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Card, Image, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

//components
import NavBar from './NavBar';

//actions
import {getChefRecipes, deleteRecipe} from '../actions';

import {useLocalStorage} from '../hooks/useLocalStorage';




const ChefDashboard = props => {
    // console.log('props from chef dashboard', props.chef_recipes)
    // console.log('one recipe', props.currentUser.chef.username);
    const [message, setMessage] = useLocalStorage('something', '');
    const [chef, setChef] = useLocalStorage('anythingelse', {})
    // const [location, setLocation] = useLocalStorage('something', '')
    // const [phone, setPhone] = useLocalStorage('something', '')

  
    useEffect(() => {
        props.getChefRecipes()
        if (props.currentUser.message !== undefined) {
            setMessage(props.currentUser.message)
        }
        if (props.currentUser.chef !== undefined) {
            setChef(props.currentUser.chef)
        }

        
    }, [])
    // console.log('PLEASE WORK NOW!!!!!', username)


    // console.log('please work!!!!!', message, username, location, phone, email);

    const addingRoute = e => {
        e.preventDefault();
        props.history.push('/addrecipe')
    }
    
    // const editingRoute = (id) => {
    //     // e.preventDefault();
    //     // getOne();
    //     props.history.push(`/editrecipe/${id}`);
    //     console.log(id)
    // }

    const moreInfo = (id) => {
        props.history.push(`/dashboard/recipe/${id}`)
    }

    return(
        <div>
            <NavBar />
            <div className = 'chef-info'>
                <h2>{message}</h2>
               
                    <h2>{chef.username}</h2>
                    <h4>{chef.location}</h4>
                    <h4>{chef.email}</h4>
                    <h6>{chef.phone}</h6>
            
            </div>
            
            <div>
                
                <Button onClick = {addingRoute}>New Recipe</Button>
                <div className = 'recipes'>    
                    {props.chef_recipes instanceof Array ? props.chef_recipes.map(cr => (
                        <Card key = {cr.id}>
                            <Image src = {cr.image_url} />
                            <Card.Content>
                                <Card.Header>{cr.name}</Card.Header>
                                <Card.Description>{cr.chef}</Card.Description>
                            </Card.Content>
                            <Card.Content>
                                <p>{cr.description}</p>
                            </Card.Content>
                            <Card.Content>
                                
                                {/* <Button onClick = {() => editingRoute(cr.id)}>Edit</Button> */}
                                {/* <Button onClick ={() => props.deleteRecipe(cr.id)}>Delete</Button>  */}
                            </Card.Content>
                            <Button onClick = {() => moreInfo(cr.id)}>More Info</Button>
                        </Card>
                    )): (<h1>Loading</h1>)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chef_recipes: state.chef_recipes,
        recipe: state.recipe,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {getChefRecipes, deleteRecipe})(ChefDashboard);