import React from 'react';
import { Row, Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { editRecipe } from "../../../../actions";
import './index.css';

class EditModal extends React.Component {
    constructor(props) {
        super();
        this.recipeName = props.name;
        this.ingred = props.ingredients.join();
    }
    defineInputName = (e, value) => {
        this.recipeName = value;
    }
    defineIngreds = (e, value) => {
        this.ingred = value;
    }

    render() {
        return (
            <div>
                <div className="editModalHeader">Edit Recipe</div>
                <Row>
                    <Input defaultValue={this.recipeName} onChange={this.defineInputName} s={12} label="Recipe name" />
                    <Input
                        onChange={this.defineIngreds}
                        defaultValue={this.ingred}
                        s={12} label="Ingredients" placeholder="ingredients, separated, by, commas" />
                </Row>
                <Button
                    onClick={() => { this.props.closeModal(); this.props.editRecipe(this.recipeName, this.ingred, this.props.id) }}
                    waves="green"
                    style={{ marginLeft: "20px", marginBottom: "10px" }}>
                    Edit
                </Button>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        closeModal: ownProps.closeModal,
        id: ownProps.id,
        name: state.recipeList.filter((recipe) => recipe.id === ownProps.id)[0].name,
        ingredients: state.recipeList.filter((recipe) => recipe.id === ownProps.id)[0].ingredients
    }
}
const mapDispatchToProps = {
    editRecipe
}

EditModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditModal);

export default EditModal;