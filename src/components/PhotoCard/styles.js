import styled from "styled-components";
import { fadeIn } from "../../styles/animation";


// const fadeInKeyFrames = keyframes`
//     from {
//         filter: blur(5px);
//         opacity: 0;
//     }

//     to {
//         filter: blur(0);
//         opacity: 1;
//     }
// `

// const fadeIn = ({time = '1s', type = 'ease'} = {}) => 
//     css`animation: ${time} ${fadeInKeyFrames} ${type};`

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`

export const Img = styled.img`
    
    ${fadeIn( {time: '2s'})}
    box-shadow: 0 10px 14px rgba(0,0,0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
    top: 0;
    width: 100%;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 8px;
    & svg {
        margin-right: 4px;
    }
`