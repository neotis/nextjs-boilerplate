import * as types from '../types/base';

const initState = {
  title: "NextJs Boilerplate - Neotis",
  language: "en"
};

export default function baseReducer(state = initState, action) {
  switch (action.type) {
    case types.UPDATE_PAGE_TITLE:
      return {
        ...state,
        title: action.payload
      }
    case types.UPDATE_APP_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state;
  }
}
