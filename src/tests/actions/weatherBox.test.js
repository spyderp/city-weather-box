import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddCity, startLoad, startRemoveCity } from '../../actions/weatherBox';

import { types } from "../../commons/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
    weatherBox:{
        cities:[],
        settings: {
            formatTime:'AM/PM',
            template: 'bottom',
            temperature: 'c',
            wind:'km',
        }
    }
}

let store = mockStore(initialState);



describe('Test weatherbox-actions', () => {
    beforeEach( () => {
        store = mockStore(initialState);
    });

    test('Load initialState', async() => {
        await store.dispatch( startLoad() );
        const actions = store.getActions();
        expect( actions[0] ).toEqual({
            type: types.uiStartLoading,
        });
        expect( actions[1] ).toEqual({
            type: types.weatherBoxLoaded,
            payload: []
        });
    })

    test('Add new city', async() => {
        const fakeCities = require('../mockdata/fakeCurrentCity.json');
        
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeCities)
            })
        );    
        await store.dispatch( startAddCity('London') );
        const actions = store.getActions();
        expect( actions).toEqual([
            {
                type: types.weatherBoxAdd,
                payload: fakeCities
            }
        ]);
    })
    test('remove city', async() => {
        const fakeCities = require('../mockdata/fakeCurrentCity.json');
        
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeCities)
            })
        );    
        await store.dispatch( startAddCity('London') );
        await store.dispatch( startRemoveCity('London') );
        const actions = store.getActions();
        expect( actions[1]).toEqual(
            {
                type: types.weatherBoxRemove,
                payload: "London"
            }
        );
    })
    
    
})