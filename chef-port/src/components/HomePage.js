import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Card, Image} from 'semantic-ui-react';
//components
import NavBar from './NavBar';

//actions
import {getAllRecipes, getOneRecipe} from '../actions';

const HomePage = props => {
    console.log(props);

    useEffect(() => {
        props.getAllRecipes();
    }, [props.getAllRecipes])



    return(
        <div className = 'home'>
            <NavBar />
            <h1>Hello There</h1>
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