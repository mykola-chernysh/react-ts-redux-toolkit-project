import React, {createContext, useState} from 'react';

import {IContext} from "../interfaces";

const ThemeContext = createContext<IContext>(null);

const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = useState('Light');
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};


export {ThemeProvider, ThemeContext};