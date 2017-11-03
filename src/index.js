import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./RecipeBox/reducers";
import RecipeBox from "./RecipeBox/index.js";


const initial = {
    recipeList:[
        {id: 0, name: "Sufle", ingredients: ["kartoshka", "shepki", "seledka"]},
        {id: 1, name: "Borsch", ingredients: ["capusta", "blood", "corpse"]},
        {id: 2, name: "Fufel", ingredients: ["leg", "owl's head", "puke"]}
    ]
}



let store = createStore(reducer, initial, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <RecipeBox/>
    </Provider>,
    document.getElementById("root")
)




