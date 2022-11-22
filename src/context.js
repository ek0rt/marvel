import {createContext} from 'react';

const dataContext = createContext({
    mail: 'props',
    text: '2',
    forceApp: () => {},
});

export default dataContext;