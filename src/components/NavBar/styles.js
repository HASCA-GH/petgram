import styled from "styled-components";
import {Link as LinkRouter} from '@reach/router'

import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top:1px solid #e0e0e0;
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: space-around;
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 1000;
`

export const Link = styled(LinkRouter)`
    align-items:center;
    color: #888;
    display: inline-flex;
    height:100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;

    /* El padre que es el Link y además que presente un atributo "aria-current", deberá cambiar el color para que nos muestre el current objeto que hemos accedido del NavBar   */
    &[aria-current] {
        color: #000;

        &:after  {
            ${fadeIn ({time: '0.5s'})};
            content: '-🌰-';
            position:absolute;
            bottom: 10px;
            font-size: 10px;
            /* line-height: 40px;  */
            line-height: 1px; 
            /* padding: -0px; */
            z-index: 1001;
        }
    }
`