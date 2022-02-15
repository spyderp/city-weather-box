import { types } from "../commons/types"

const initialState = {
    cities:[],
    settings: {
        formatTime:'AM/PM',
        template: 'bottom',
        temperature: 'c',
        wind:'km',
    }
}

export const weatherBoxReducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case types.weatherBoxAdd:
        return { ...state, cities:[...state.cities, payload] }
    case types.weatherBoxRemove:
        return { ...state, cities:state.cities.filter(e => e.location.name !== payload ) }
    case types.weatherBoxSettingsUpdate:
        return { ...state, settings: payload }
    case types.weatherBoxLoaded:
        return { ...state, cities:payload }
    default:
        return state
    }
}
