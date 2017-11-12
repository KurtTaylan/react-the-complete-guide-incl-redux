import React from 'react';
import burgerLogo from '../../assests/images/burger-logo.png';
import styledClasses from './Logo.css'

const logo = (props) => (
    <div className={styledClasses.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="BurgerLogo"/>
    </div>
);

export default logo;
