import React from 'react';
import { Button } from "react-materialize";
import Modal from 'react-modal';
import EditModal from './EditModal/index.js';
import {toggleButtons} from '../../../helperFunctions';
import './index.css';

class Recipe extends React.Component {
    constructor() {
        super();
        this.ingredients = [];
    }
    state = {
        showModal: false
    }
    del = () => {
        this.props.deleteRecipe(this.props.id);
    }
    toggleModal = () => {
        this.setState((prevState) => ({ showModal: !prevState.showModal }), () => {
            toggleButtons(this.state.showModal);
        });
    }
    render() {
        this.ingredients = this.props.ingredients.map((ingred, index) => {
            let temp = <li className="ingredient" key={index}>{ingred}</li>;
            return temp;
        })
        return (
            <div className="ingredients">
                <h3 className="ingredientsWord">Ingredients</h3>

                <ul className="ingredList">
                    {this.ingredients}
                </ul>

                <Button onClick={this.del} waves="light" className="btnDelete btnIngred myBTN">Delete</Button>
                <Button onClick={this.toggleModal} waves="light" className="btnEdit btnIngred myBTN">Edit</Button>

                <Modal
                    isOpen={this.state.showModal}
                    className={{
                        base: 'myModal',
                        afterOpen: 'myModalAfterOpen'
                    }}
                    overlayClassName = {{
                        base: "overlay",
                        afterOpen: "overlayAfterOpen"
                    }}
                    onRequestClose={this.toggleModal}
                >
                    <EditModal closeModal={this.toggleModal} id={this.props.id} />
                </Modal>
            </div>

        );
    }
}

export default Recipe;
