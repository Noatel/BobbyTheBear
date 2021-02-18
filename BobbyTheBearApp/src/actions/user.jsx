import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
}


export const fetchAll = () => {
    return dispatch => {
        // Get api request
        api.user().fetchAll()
            .then(response => {
                    dispatch({
                        type: ACTION_TYPES.FETCH_ALL,
                        payload: response.data,
                    })
                }
            )
            .catch(error => console.warn(error));

    }
}