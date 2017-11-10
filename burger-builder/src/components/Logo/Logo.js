import React from 'react';
import burgerLogo from '../../assests/images/burger-logo.png';
import styledClasses from './Logo.css'

const logo = (props) => (
    <div className={styledClasses.Logo}>
        <img src={burgerLogo} alt="BurgerLogo"/>
    </div>
);

export default logo;
