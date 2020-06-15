export const fetchPokeRequest = () => {
    return{
        type: "FETCH_REQUEST"
    }
}

export const fetchPokeSuccess = (payload) => {
    return {
        type: "FETCH_SUCCESS",
        payload
    }
}

export const fetchPokeError = () => {
    return {
        type: "FETCH_ERROR"
    }
}

export default {
    fetchPokeRequest,
    fetchPokeSuccess,
    fetchPokeError
}