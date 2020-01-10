import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';
import {Card, Image, Button} from 'semantic-ui-react';

//components
import NavBar from './NavBar';

import {getOneRecipe, getAllRecipes} from '../actions';

const ChefPortPage = props => {
    const [cheff, setCheff] = useState({});
    console.log(props)

    useEffect(() => {
        props.getOneRecipe(props.match.params.id)
        if (props.recipe.chef !== undefined) {
            props.getAllRecipes();
            setCheff(props.recipe)
        }
        
    }, [props.getOneRecipe, props.getAllRecipes]);

    console.log(cheff)

    const moreInfo = (id) => {
        props.history.push(`/recipe/${id}`)
    }

    return(
        <div>
            <NavBar />
            <h2>{cheff.chef}</h2>
            <h4>{cheff.location}</h4>
            <h4>{cheff.phone_number}</h4>
            <h4>{cheff.email}</h4>
            <div className = 'recipes'>
                {props.recipes ? props.recipes.filter(r => r.chef.includes(cheff.chef)).map(r => (

                <Card key = {r.id}>
                    <Image src = {r.image_url} />
                    <Card.Content>
                        <Card.Header>{r.name}</Card.Header>
                        <Card.Description>{r.chef}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <p>{r.description}</p>
                    </Card.Content>
                    <Button onClick = {() => moreInfo(r.id)}>More Info</Button>
                </Card>

                )) : <h2>Loading...</h2>}
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chef_recipes: state.chef_recipes,
        recipe: state.recipe, 
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {getOneRecipe, getAllRecipes})(ChefPortPage);