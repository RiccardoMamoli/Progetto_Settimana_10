import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions";

const initialState = {
    fav: []
}

const favoritesRedux = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_FAV: {
            return {
                ...state,
                fav: [...state.fav, action.payload]
            }

        }

        case REMOVE_FROM_FAV: {
            return {
                ...state,
                fav: state.fav.filter((item) => item.name !== action.payload.name)
            }
        }



        default: {
            return state;
        }
    }
}

export default favoritesRedux;