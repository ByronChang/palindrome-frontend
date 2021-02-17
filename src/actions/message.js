import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

export function setMessage(message){
  return (dispatch) => {
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
  }  
};

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
