import * as types from "../constants";
import GroupApi from '../../api/GroupApi';

const listGroupAction = (groups, page, totalElement) => {
  return {
    type: types.GET_LIST_GROUP,
    payload: {
      groups,
      page,
      totalElement
    }
  };
}

export const getListGroupAction = (page, size) => {
  return async dispatch => {
    try {
      const json = await GroupApi.getAll(page, size);
      const groups = json.content;
      const totalElement = json.totalElements;
      dispatch(listGroupAction(groups, page, totalElement));
    } catch (error) {
      console.log(error);
    }
  }
}