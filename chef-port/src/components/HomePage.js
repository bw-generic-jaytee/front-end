import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Card, Image, Button, Dropdown, Input} from 'semantic-ui-react';
//components
import NavBar from './NavBar';

//actions
import {getAllRecipes, getOneRecipe} from '../actions';

const HomePage = props => {
    const DropdownOptions = [
        {key: 1, text: 'Breakfast', value: 'Breakfast' },
        {key: 2, text: 'Lunch', value: 'Lunch' },
        {key: 3, text: 'Dinner', value: 'Dinner' },
        {key: 4, text: 'All', value: '' }
    ]


    const [type, setType] = useState('');
    const [search, setSearch] = useState('');
    // console.log(props);


    const dropdownHandler = (e, banana) => {
        e.preventDefault()
        setType(banana.value)
    }
    console.log(type)

    const searchHandler = (e, apple) => {
        setSearch(apple.value)
        
    }

    useEffect(() => {
        props.getAllRecipes();
    }, [props.getAllRecipes])

    const moreInfo = (id) => {
        props.history.push(`/recipe/${id}`)
    }

    return(
        <div className = 'home'>
            <NavBar />
            <h1>Welcome to Chef Port</h1>
                <Dropdown placeholder = 'Meal Type' text = {DropdownOptions.text} options = {DropdownOptions} onChange = {dropdownHandler} value = {type} selection />
                <Input onChange = {searchHandler} value = {search} />

            <div className = 'recipes'>

                    {props.recipes ? props.recipes.filter(r => r.meal_type.includes(type)).filter(s => s.name.includes(search) || s.description.includes(search) || s.ingredients.includes(search) ).map(r => (

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
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {getAllRecipes})(HomePage);