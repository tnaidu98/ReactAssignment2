import {
    ADD_ITEM,RESET_COUNTER
  } from "../actions/types";
  
  
  const initalState = {
    arr:[]
  };
  
  export const counter = (state = initalState, action) => {
    switch (action.type) {
      case ADD_ITEM:
        return { 
          ...state,
       arr: [...state.arr]
        };
      case RESET_COUNTER:
        return {
          arr: [...state.arr]
        };
      default:
        return state;
    }
  };
  
  export default counter;