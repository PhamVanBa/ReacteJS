import Api from "./Api";

const url = "/groups";

const getAll = () => {
  return Api.get(url);
};

const getByID = (id) => {
  return Api.get(`${url}/${id}`);
};

const create = (body) => {
  return Api.post(url, body);
};

const updateByID = (id, body) => {
  return Api.put(`${url}/${id}`, body);
};

const deleteByID = (id) => {
  return Api.delete(`${url}/${id}`);
};

// export
const groupApi = { getAll, getByID, create, updateByID, deleteByID };
export default groupApi;
