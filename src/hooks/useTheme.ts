import {useContext} from 'react';

import {ThemeContext} from "../hoc";

const useTheme = () => {
    return useContext(ThemeContext);
};

export {useTheme};