import * as types from "../constants";

const initialState = {
  groups: [],

  // paging
  page: 1,
  size: 5,
  totalElement: 0,

  // sorting
  sortField: "id",
  sortType: "desc",

  isLoading: false
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.GET_LIST_GROUP:
      return {
        ...state,
        groups: actions.payload.groups,
        // paging
        page: actions.payload.page,
        totalElement: actions.payload.totalElement,
        // sorting
        sortField: actions.payload.sortField,
        sortType: actions.payload.sortType,

        isLoading: false
      };
    default:
      return state;
  }
}