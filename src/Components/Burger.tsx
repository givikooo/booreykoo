import React, { useState } from 'react'
import styled from 'styled-components'
import Colors from '../assets/colors'



const Burger: React.FC<{
    divType?: string
}> = ({
    divType
}) => {
        return (
            <StyledBurger >
                <Div $divColor={divType} />
                <Div $divColor={divType} />
            </StyledBurger>
        )
    }

const StyledBurger = styled.div`
    width: 32px;
    height: 32px;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    z-index: 10;

`
const Div = styled.div<{ $divColor?: string }>`
    background-color: ${({ $divColor }) => ($divColor === "black" ? Colors.Black : $divColor === "white" ? Colors.White : Colors.Orange )};
    width: 32px;
    height: 4px;
    border-radius: 10px;
`


export default Burger