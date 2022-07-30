import * as types from "../constants";
import GroupApi from '../../api/GroupApi';

const listGroupAction = (groups, page, totalElement, sortField, sortType) => {
  return {
    type: types.GET_LIST_GROUP,
    payload: {
      groups,
      // paging
      page,
      totalElement,
      // sorting
      sortField,
      sortType
    }
  };
}

export const getListGroupAction = (page, size, sortField, sortType) => {
  return async dispatch => {
    try {
      const json = await GroupApi.getAll(page, size, sortField, sortType);
      const groups = json.content;
      const totalElement = json.totalElements;
      dispatch(listGroupAction(groups, page, totalElement, sortField, sortType));
    } catch (error) {
      console.log(error);
    }
  }
}