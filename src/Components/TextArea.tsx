import React from 'react'
import styled from 'styled-components';


const TextArea: React.FC<{
    cols?: number;
    rows?: number; 
    placeholder: string;
    value:string;
    onChange: (value: string) => void;

}> = ({
    cols,
    rows,
    placeholder,
    value,
    onChange
 }) => {
    return (
        <>
            <TextAreatag
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </>
    )
}

const TextAreatag = styled.textarea`
    width: 100%;
    padding: 8px 12px;
    border: 2px solid #161616;
    background-color: transparent;
`


export default TextArea