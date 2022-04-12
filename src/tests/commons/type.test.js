import { types } from "../../commons/types";

describe('Test for type', () => {

    test('All type ok', () => {

        expect( types ).toEqual({
            uiNavBarOpen: '[UI] navbar open',
            uiNavBarClose: '[UI] navbar close',
            uiDeleteButtonOpen: '[UI] Delete button open',
            uiDeleteButtonClose: '[UI] Delete button close',
            uiSettingClose: '[UI] setting close',
            uiSettingOpen: '[UI] setting open',
            uiStartLoading: '[UI] start loading',
            uiFinishLoading: '[UI] finish loading',
            uiSetError: '[UI] set error',
            uiRemoveError: '[UI] remove error',
            //weather
            weatherBoxLoaded: '[weatherBox] loaded',
            weatherBoxAdd: '[weatherBox] add',
            weatherBoxRemove: '[weatherBox] remove',
            weatherBoxSettingsUpdate: '[weatherBox] settings update',
        })
        
    })
    

    
})
