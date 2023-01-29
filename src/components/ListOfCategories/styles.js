import styled, {css} from "styled-components";

export const  List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    ${props => props.fixed && css`
        {
            background: #fff;
            border-radius: 60px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            left: 0;
            margin: 0 auto;
            max-width: 400px;
            padding: 5px;
            position: fixed;
            right: 0;
            top: -20px;
            transform: scale(.5);
            z-index: 1;
        }
    `}
    /* &.fixed {
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
    } */
`
export const  Item = styled.li`
    padding: 0px 8px;
    & .lds-hourglass {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    & .lds-hourglass:after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: 32px solid #dfc;
        border-color: #dfc transparent #dfc transparent;
        animation: lds-hourglass 1.2s infinite;
    }
    @keyframes lds-hourglass {
    0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
        transform: rotate(1800deg);
    }
    }

`