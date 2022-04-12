import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { CloseDelete } from '../../../components/ui/CloseDelete';
import { Provider } from 'react-redux'
import { mount } from 'enzyme';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
    ui:{
        loading: false,
        msgError: null,
        navbar:false,
        settingsBar: false,
        deleteButton: true
    },
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
store.dispatch = jest.fn();
let container = null;
const wrapper = mount( 
    <Provider store={ store }>
        <CloseDelete   /> 
    </Provider>

)
describe('Test ui components', () => {
    beforeEach(() => {
        // configurar un elemento del DOM como objetivo del renderizado
        container = document.createElement("div");
        document.body.appendChild(container);
       
       
    })

    test('show close delete button', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
})