import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Card, Image, Button, Dropdown, Input} from 'semantic-ui-react';

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

    const chefPage = (id) => {
        props.history.push(`/chef/${id}`)
    }

    const moreInfo = (id) => {
        props.history.push(`/recipe/${id}`)
    }

    return(
        <div className = 'home'>
            <div>
                <NavBar />
                </div>
            <div className = 'container'>
            <div className = 'search' >
                <div>
                    <h4>Find Meal By Type:</h4>
                    <Dropdown placeholder = 'Meal Type' text = {DropdownOptions.text} options = {DropdownOptions} onChange = {dropdownHandler} value = {type} selection />
                </div>
                <div>
                    <h4>Search By Recipe, Ingredient, Chef, and Description:</h4>
                    <Input placeholder = 'Search' onChange = {searchHandler} value = {search} />
                </div>
            </div>
           

            <div className = 'recipes' >

                    {props.recipes ? props.recipes.filter(r => r.meal_type.includes(type)).filter(s => s.name.includes(search) || s.description.includes(search) || s.ingredients.includes(search) || s.chef.includes(search) ).map(r => (

                    <Card key = {r.id} >
                        {/* <Image src = {r.image_url} size = 'medium' /> */}
                        <img src = {r.image_url} alt = {r.id}/>
                        <Card.Content>
                            <Card.Header>{r.name}</Card.Header>
                            <Card.Description><Button onClick = {() => chefPage(r.id)}>{r.chef}</Button></Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <p>{r.description}</p>
                        </Card.Content>
                        <Button onClick = {() => moreInfo(r.id)}>More Info</Button>
                    </Card>
                    
                )) : <h2>Loading...</h2>}
            </div>
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
