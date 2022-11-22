import {useContext} from 'react';
import dataContext from './context'

function InputComponent() {

    const context = useContext(dataContext);

    console.log(context)

        return (
            <input value={context.mail}
            type="email" className='form-control' 
            id="exampleFormControlInput1"
            onFocus={context.forceApp}
            placeholder="name@example.com"/>
        )
    }
export default InputComponent;