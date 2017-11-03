import React from 'react';
import { Row, Input } from 'react-materialize';
import './index.css';
import { Button } from 'react-materialize';

const ModalRecipe = (props) => {
    let recipeName, ingred;
    const defineInputName = (e, value) => {
        recipeName = value;
    }
    const defineIngreds = (e, value) => {
        ingred = value;
    }
    return (
        <div>
            <div className="modalRecipeHeader">Add a Recipe</div>
            <Row>
                <Input onChange={defineInputName} s={12} label="Recipe name" />
                <Input
                    onChange={defineIngreds}
                    s={12} label="Ingredients" placeholder="ingredients, separated, by, commas" />
            </Row>
            <Button 
                onClick={() => {props.closeModal(); props.addRecipe(recipeName, ingred) }} 
                waves="green"
                style={{ marginLeft: "20px", marginBottom: "10px" }}>
                Add
            </Button>
        </div>

    );
}

export default ModalRecipe;