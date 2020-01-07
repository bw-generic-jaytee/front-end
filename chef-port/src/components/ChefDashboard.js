import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Card, Image, Button} from 'semantic-ui-react';

//components
import NavBar from './NavBar';

//actions
import {getChefRecipes, deleteRecipe} from '../actions';

const ChefDashboard = props => {
    console.log('props from chef dashboard', props.chef_recipes)

    useEffect(() => {
        props.getChefRecipes();
    }, [props.getChefRecipes])

    const addingRoute = e => {
        e.preventDefault();
        props.history.push('/addrecipe')
    }

    const editingRoute = (id) => {
        // e.preventDefault();
        props.history.push(`/editrecipe/${id}`)
        console.log(id)
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
                    {props.chef_recipes && props.chef_recipes.map(cr => (
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
                                <Button onClick = {() => editingRoute(cr.id)} >Edit</Button>
                                <Button onClick ={() => props.deleteRecipe(cr.id)}>Delete</Button>
                                
                            </Card.Content>
                        </Card>
                    ))}
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