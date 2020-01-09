import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Card, Image, Button} from 'semantic-ui-react';
//components
import NavBar from './NavBar';

//actions
import {getAllRecipes, getOneRecipe} from '../actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const HomePage = props => {
    const [search, setSearch] = useState([]);
    const [breakfastt, setBreakfast] = useState(false)
    console.log(props);

    useEffect(() => {
        props.getAllRecipes();
    }, [props.getAllRecipes])

    const moreInfo = (id) => {
        props.history.push(`/recipe/${id}`)
    }

    const breakfastToggler = () => {
        setBreakfast(!breakfastt)
        console.log(breakfastt)
    }


    return(
        <div className = 'home'>
            <NavBar />
            <h1>Welcome to Chef Port</h1>
            <Button onClick = {breakfastToggler}>Breakfast</Button>


            <div className = 'recipes'>
                {props.recipes && props.recipes.map(r => (
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
                    
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {getAllRecipes})(HomePage);