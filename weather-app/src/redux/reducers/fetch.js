import { DO_FETCH } from "../actions"

const initialState = {
    cityData: null,
}

const fetchRedux = (state = initialState, action) => {
    switch (action.type) {

        case DO_FETCH: {
            return {
                ...state,
                cityData: action.payload
            }
        }


        default: {
            return state
        }
    }
}

export default fetchRedux