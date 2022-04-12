import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { NavBar } from '../../../components/ui/NavBar';
import { Provider } from 'react-redux'
import { mount } from 'enzyme';
import { startAddCity } from '../../../actions/weatherBox';

jest.mock('../../../actions/weatherBox', () => ({
    startAddCity: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
    ui:{
        loading: false,
        msgError: null,
        navbar:true,
        settingsBar: false,
        deleteButton: false
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
        <NavBar   /> 
    </Provider>

)
describe('Test ui components', () => {
    beforeEach(() => {
        // configurar un elemento del DOM como objetivo del renderizado
       /*  container = wrapper;
        document.body.appendChild(container); */
       
       
    })

    test('show navbar', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    test('send new city', () => {
        wrapper.find('input[type="submit"]').prop('onClick')();
        expect(  store.dispatch ).toHaveBeenLastCalledWith(
            startAddCity('London')
        );

        
    })
    
})