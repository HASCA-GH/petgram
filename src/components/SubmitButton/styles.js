import styled from "styled-components";

export const Button = styled.button`
    background-color:#8d00ff;
    border-radius: 5px;
    color: #fff;
    height: 32px;
    display: block;
    width: 100%;
    text-align: center;

    & [disabled] {
       opacity: .3;
    }
`