import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Card, Image, Button} from 'semantic-ui-react';

//components
import NavBar from './NavBar';

//actions
import {getChefRecipes} from '../actions';

const ChefDashboard = props => {
    console.log('props from chef dashboard', props)

    useEffect(() => {
        props.getChefRecipes();
    }, [props.getChefRecipes])

    return(
        <div>
            <NavBar />
            <div className = 'chef-info'>
                <h1>Chef's Information will go here</h1>
            </div>
            
            <div>
                <h2>RECIPES</h2>
                <Button>New Recipe</Button>
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
                                <Button>Edit</Button>
                                <Button>Delete</Button>
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
        chef_recipes: state.chef_recipes
    }
}

export default connect(mapStateToProps, {getChefRecipes})(ChefDashboard);