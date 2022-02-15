import { types } from "../commons/types"

export const startLoading  = () => ({
    type: types.uiStartLoading
})
export const finishLoading  = () => ({
    type: types.uiFinishLoading
})

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
})

export const removeError = () => ({
    type: types.uiRemoveError
}) 

export const navbarOpen = ()=>({
    type: types.uiNavBarOpen
})
 
export const navbarClose = ()=>({
    type: types.uiNavBarClose
})

export const settingsOpen = ()=>({
    type: types.uiSettingOpen
}) 

export const settingsClose = ()=>({
    type: types.uiSettingClose
}) 


export const deleteButtonOpen = ()=>({
    type: types.uiDeleteButtonOpen
})
 
export const deleteButtonClose = ()=>({
    type: types.uiDeleteButtonClose
})  