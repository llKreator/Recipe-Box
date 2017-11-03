import RecipeList from './RecipeList/index.js';
import { connect } from 'react-redux';
import {deleteRecipe} from '../actions';
import {editRecipe} from "../actions";

const mapStateToProps = (state) => ({
    recipes: state.recipeList
});
const mapDispatchToProps = {
    deleteRecipe,
    editRecipe
}


const Recipes = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeList);

export default Recipes;