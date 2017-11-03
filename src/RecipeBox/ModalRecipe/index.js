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







{/* <div id="modalRecipe" className={showModal ? "one" : ''}>
    <div className="modal-background">
        <div className="modal">
            <h2 className="modalRecipeHeader">Add a Recipe</h2>
            <Row>
                <Input s={12} label="Recipe" />
                <Input s={12} label="Ingredients" />
            </Row>
            <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
            </svg>
        </div>
    </div>
</div> */}