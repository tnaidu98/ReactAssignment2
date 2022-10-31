import { ADD_ITEM,RESET_COUNTER} from "./actions.types";


export const addItem = () => {
  return {
    type: ADD_ITEM
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER
  };
};