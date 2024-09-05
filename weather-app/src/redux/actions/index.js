export const ADD_TO_FAV = 'ADD_TO_FAV'
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV'
export const DO_FETCH = 'DO_FETCH'

export const addToFavAction = (data) => {
    return {
        type: ADD_TO_FAV,
        payload: data
    }
}

export const removeFromFavAction = (data) => {
    return {
        type: REMOVE_FROM_FAV,
        payload: data
    }
}

export const doFetchAction = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d7b26fd7ee9ec6be4f7218dc0343c22e`
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    console.log('Sei qui')
                    return response.json()
                }
                else {
                    throw new Error('errore')
                }
            })
            .then((requestedCity) => {
                console.log('Sei dentro la citta', requestedCity)
                dispatch({
                    type: DO_FETCH,
                    payload: requestedCity
                })
            })
            .catch((err) => {
                console.log('errore nel recupero dati', err)
            })


    }
}