import React from 'react';
import Recipe from './Recipe/index.js';
import { Collapsible, CollapsibleItem } from "react-materialize";
import './index.css';

const RecipeList = (props) => {
    return (
        <ul className="recipeList">
            <Collapsible popout>
                {props.recipes.map((recipe) =>
                    <CollapsibleItem header={recipe.name} key={recipe.id}>
                        <Recipe
                            ingredients={recipe.ingredients}
                            id={recipe.id}
                            deleteRecipe = {props.deleteRecipe}
                            editRecipe = {props.editRecipe}
                        />
                    </CollapsibleItem>
                )}

            </Collapsible>
        </ul>
    );
}

export default RecipeList;