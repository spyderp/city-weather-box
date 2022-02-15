import { types } from "../commons/types"

const initialState = {
    loading: false,
    msgError: null,
    navbar:false,
    settingsBar: false,
    deleteButton: false
}

export const uiReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case types.uiStartLoading:
        return { ...state, loading: true }
    case types.uiFinishLoading:
        return { ...state, loading: false }
    case types.uiSetError:
        return { ...state, msgError: payload }
    case types.uiRemoveError:
        return { ...state, payload: null }
    case types.uiNavBarOpen:
        return { ...state, navbar: true }
    case types.uiNavBarClose:
        return { ...state, navbar: false }
    case types.uiSettingOpen:
        return { ...state, settingsBar: true }
    case types.uiSettingClose:
        return { ...state, settingsBar: false }
    case types.uiDeleteButtonOpen:
        return { ...state, deleteButton: true }
    case types.uiDeleteButtonClose:
        return { ...state, deleteButton: false }
    default:
        return state
    }
}
