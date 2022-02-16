import { createStore } from "redux";
const SET_SECTION_NAME = 'SET_SECTION_NAME';
const initalState = 0;

export const setSectionName = (sectionName) => ({
    type: SET_SECTION_NAME,
    payload : sectionName
});


const reducer = (state = initalState, action) => {
    console.log('I am reducer and I am being called', action);
    switch(action.type) {
        case SET_SECTION_NAME : return action.payload;
        default : return state;
    }
}

const store = createStore(reducer);

export default store;