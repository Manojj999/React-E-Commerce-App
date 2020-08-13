import React from 'react'
// import './CustomButton.scss';
import { CustomButtonContainer } from './CustomButtonStyle';


function CustomButton({ children , ...props }) {
    return (
        <CustomButtonContainer {...props}> {children} </CustomButtonContainer>
        
    )
}

export default CustomButton;
