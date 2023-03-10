import styled from 'styled-components'

export const Form = styled.form`
    padding: 16px 16px;
    background-color:lightgrey;
`
export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%; 

    & [disabled] {
        opacity: .3;
    }
`
// export const Button = styled.button`
//     background-color:#8d00ff;
//     border-radius: 5px;
//     color: #fff;
//     height: 32px;
//     display: block;
//     width: 100%;
//     text-align: center;

//     & [disabled] {
//        opacity: .3;
//     }
// `

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 500;
    padding: 8px 0;
    /* height: 32px;
    display: block;
    width: 100%; */
    text-align: center;
`

export const Error = styled.span`
    color: red;
    font-size: 14px;
`