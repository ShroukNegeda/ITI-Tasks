import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { nanoid } from 'nanoid';
import PizzaStyle from './Pizza.module.css';

export default function Pizza() {

    let [recipesArray, setRecipesArray] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

    useEffect(() => {
        getPizza(`pizza`);
    }, [])

    async function getPizza(searchTerm = `pizza`) {
        setIsLoading(true);
        try {
            let { data } = await axios.get(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`);
            setRecipesArray(data.data.recipes);
        } catch (error) {
            console.error(error);
            setRecipesArray([]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
        <div className={PizzaStyle.wrapper}>
            <span className="session-tag">recipe search</span>
            <h2 className="mb-3">Pizza Recipes</h2>
            <ul className={PizzaStyle.tagsRow}>
                { fruits.map( (fruit) => <li className={PizzaStyle.tag} key={nanoid()}>{fruit}</li> ) }
            </ul>
            <div className="row">
                { isLoading ? <div className="loader-wrapper"><Loader/></div> : recipesArray.map( (recipe) => <RecipeContainer key={recipe.id} recipe={recipe} /> ) }
            </div>
        </div>
        </>
    )
}

function RecipeContainer({recipe}) {
    return (
        <>
            <div className="col-md-3">
                <div className="recipe text-center">
                    <img src={recipe.image_url} alt={recipe.title} className="w-100" style={{ borderRadius: '8px' }}></img>
                    <p className="mb-0 mt-2">{recipe.title}</p>
                </div>
            </div>
        </>
    )
}