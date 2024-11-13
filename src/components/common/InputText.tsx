import React ,{ ForwardedRef } from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    placeholder? : string;
    InputType?: "text" | "email" | "password" | "number";
}

const InputText = React.forwardRef((
    {placeholder , InputType, onChange, ...props} : Props,
    ref : ForwardedRef<HTMLInputElement>
) => {
    return <InputTextStyle placeholder={placeholder}
    ref={ref} type={InputType} onChange={onChange} {...props} />;
})

const InputTextStyle = styled.input`
    padding : 0.25rem 0.75rem;
    border : 1px solid ${({theme}) => theme.color.border};
    border-radius : ${({theme}) => theme.borderRadius.default};
    font-size : "1rem";
    line-height : 1.5; // 행간
    color : ${({theme}) => theme.color.text};
`;

export default InputText;