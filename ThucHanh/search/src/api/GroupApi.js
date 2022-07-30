import Api from './Api';

const url = "/groups";

const getAll = (page, size, sortField, sortType, search) => {

    // default parameters
    if (sortField === null || sortType === undefined) {
        sortField = "id";
        sortType = "desc";
    }

    const requestParams = {
        page,
        size,
        sort: `${sortField},${sortType}`,
        search
    }

    return Api.get(url, { params: requestParams });
};

// export
const api = { getAll }
export default api;