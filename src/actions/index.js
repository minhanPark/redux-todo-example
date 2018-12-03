import { SET_INPUT, SUBMIT, SET_DELETE } from "./actions";

//액션 크리에이터

export const setInput = value => ({
  type: SET_INPUT,
  value
});

export const submit = text => ({
  type: SUBMIT,
  text
});

export const setDelete = index => ({
  type: SET_DELETE,
  index
});
