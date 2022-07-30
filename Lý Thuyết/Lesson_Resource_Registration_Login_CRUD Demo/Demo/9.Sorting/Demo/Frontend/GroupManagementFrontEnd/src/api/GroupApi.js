import Api from './Api';

const url = "/groups";

const getAll = (page, size, sortField = "id", sortType = "desc") => {
    const requestParams = {
        page,
        size,
        sort: `${sortField},${sortType}`
    }
    return Api.get(url, { params: requestParams });
};

// export
const api = { getAll }
export default api;