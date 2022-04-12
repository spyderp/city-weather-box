import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Test useForm', () => {

    const initialForm = {
        name: 'fernando',
        email: 'fernando@gmail.com'
    };


    test('should return a default form', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
        

    });

    test('must change the value of the form (change name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, name: 'Melissa' } );

    });


    test('you must re-establish the form with RESET ', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });

            reset();

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );
        


    })
    
    
    

    
})
