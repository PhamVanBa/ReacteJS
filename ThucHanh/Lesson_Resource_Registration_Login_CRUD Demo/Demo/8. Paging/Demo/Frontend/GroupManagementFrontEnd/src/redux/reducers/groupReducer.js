import * as types from "../constants";

const initialState = {
  groups: [],
  page: 1,
  size: 5,
  totalElement: 0,
  isLoading: false
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.GET_LIST_GROUP:
      return {
        ...state,
        groups: actions.payload.groups,
        page: actions.payload.page,
        totalElement: actions.payload.totalElement,
        isLoading: false
      };
    default:
      return state;
  }
}