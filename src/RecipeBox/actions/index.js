let newId = 3;

export const addRecipe = (name = "Untitled", ingredients = "none") => ({
    type: "ADD_RECIPE",
    name: name,
    ingredients,
    id: newId++
})

export const deleteRecipe = (id) => ({
    type: "DELETE_RECIPE",
    id
})

export const editRecipe = (name, ingredients, id) => ({
    type:"EDIT_RECIPE",
    name,
    ingredients,
    id
})
    
