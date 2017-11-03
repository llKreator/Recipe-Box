let temp, temp1;
export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            temp = action.ingredients.split(',').filter((ingred) => ingred);
            return {
                recipeList: [...state.recipeList, { name: action.name, ingredients: temp, id: action.id }]
            }
        case 'EDIT_RECIPE':
            temp = action.ingredients.split(',').filter((ingred) => ingred);
            temp1 = state.recipeList.map((recipe)=>{
                if(action.id === recipe.id){ return {name: action.name, ingredients: temp, id: action.id}}
                return recipe;
            })
            return {
                recipeList: [...temp1]
            }
        case 'DELETE_RECIPE':
            temp = state.recipeList.filter((recipe) => {
                return action.id !== recipe.id;
            })
            // state.recipeList.map((recipe) => {
            //     if (action.id === recipe.id) { return }
            //     return recipe;
            // })
            return {
                recipeList: temp
            }
        default:
            return state;
    }
};
