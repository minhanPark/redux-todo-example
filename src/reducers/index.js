import { SET_INPUT, SUBMIT, SET_DELETE } from "../actions/actions";

const initialState = {
  value: "",
  todo: [{ text: "테스트하기" }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        value: action.value
      };
    case SUBMIT:
      return {
        ...state,
        todo: [{ text: action.text }, ...state.todo]
      };
    case SET_DELETE:
      return {
        ...state,
        todo: [
          ...state.todo.slice(0, action.index),
          ...state.todo.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
};

export default reducer;
