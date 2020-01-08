import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Card, Image, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

//components
import NavBar from './NavBar';

//actions
import {getChefRecipes, deleteRecipe} from '../actions';

const ChefDashboard = props => {
    console.log('props from chef dashboard', props.chef_recipes)
    console.log('one recipe', props.recipe)

    useEffect(() => {
        props.getChefRecipes()
    }, [])

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
                <h1>Chef's Information will go here</h1>
            </div>
            
            <div>
                <h2>RECIPES</h2>
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
        recipe: state.recipe
    }
}

export default connect(mapStateToProps, {getChefRecipes, deleteRecipe})(ChefDashboard);