import { deleteButtonClose, deleteButtonOpen, finishLoading, navbarClose, navbarOpen, setError, settingsClose, settingsOpen, startLoading } from "../../actions/ui";
import { types } from "../../commons/types";


describe('Test ui-actions', () => {

    test('All action ok', () => {
        const deleteButtonCloseAction = deleteButtonClose();
        const deleteButtonOpenAction  = deleteButtonOpen();
        const finishLoadingAction     = finishLoading();
        const navBarCloseAction       = navbarClose();
        const navBarOpenAction        = navbarOpen();
        const setErrorAction          = setError('HELP!!!!');
        const settingsCloseAction     = settingsClose();
        const settingsOpenAction      = settingsOpen();
        const startLoadingAction      = startLoading();

        expect(deleteButtonCloseAction).toEqual({
            type: types.uiDeleteButtonClose
        });
        
        expect(deleteButtonOpenAction).toEqual({
            type: types.uiDeleteButtonOpen
        });

        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        });
        
        expect(navBarCloseAction).toEqual({
            type: types.uiNavBarClose
        });
        
        expect(navBarOpenAction).toEqual({
            type: types.uiNavBarOpen
        });
        
        expect( setErrorAction ).toEqual({
            type: types.uiSetError,
            payload: 'HELP!!!!'
        });
        
        expect(settingsCloseAction).toEqual({
            type: types.uiSettingClose
        });

        expect(settingsOpenAction).toEqual({
            type: types.uiSettingOpen
        });

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        });
        

    })
    
    
})