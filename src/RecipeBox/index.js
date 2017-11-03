import React, { Component } from 'react';
import Recipes from './Recipes/index.js';
import { Button } from "react-materialize";
import { connect } from "react-redux";
import ModalRecipe from './ModalRecipe/index.js';
import Modal from 'react-modal';
import { addRecipe } from './actions';
import { toggleButtons } from './helperFunctions';
import './index.css';

class RecipeBox extends Component {
    state = {
        showModal: false,
    }
    toggleModal = () => {
        this.setState((prevState) => ({
            showModal: prevState.showModal ? false : true
        }), () => {
            toggleButtons(this.state.showModal);
        })
    }
    render() {
        return (
            <div id="app">
                <Recipes />
                <Button
                    onClick={this.toggleModal}
                    floating large
                    className={"green addRecipeBTN myBTN"}
                    waves="light" icon="add"
                    disabled={this.state.showModal}
                />
                <Modal
                    isOpen={this.state.showModal}
                    className={{
                        base: 'myModal',
                        afterOpen: 'myModalAfterOpen'
                    }}
                    overlayClassName={{
                        base: "overlay",
                        afterOpen: "overlayAfterOpen"
                    }}
                    onRequestClose={this.toggleModal}
                >
                    <ModalRecipe closeModal={this.toggleModal} addRecipe={this.props.addRecipeAction} />
                </Modal>

            </div>
        );
    }
}

const mapDispatchToProps = {
    addRecipeAction: addRecipe
}

RecipeBox = connect(
    null,
    mapDispatchToProps
)(RecipeBox);

export default RecipeBox;