import React from "react";

import "react-toggle/style.css";
import Toggle from 'react-toggle';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

interface Props {
    setTheme(): void
}

const Toogle: React.FC<Props> = ({ setTheme }) => {

    const onCheck = (e) => {
        setTheme();
    }

    return (
        <Toggle
            name='theme'
            onChange={onCheck}
            icons={{ checked: < BsFillMoonFill />, unchecked: < BsFillSunFill /> }}
        />
    )
};
export default Toogle;