import styled from "styled-components";

export const LabelText = styled.span`
    width: 100%;
    max-width: 250px;
    display: inline-block;
    margin-right: 5px;
`;
export const Field = styled.input`
    border: 1px solid #e7d6b1;
    padding: 10px;
    width: 100%;
    max-width: 400 px;
    border-radius: 5px;
    background-color: azure;
    color: black;

    &:required {
        background-color: #e7d6b1
    }
`;
export const FormFildset = styled.fieldset`
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0px;
`;
export const FormLegend = styled.legend`
    background-color: #0b360d;
    color: aliceblue;
    border-radius: 5px;
    padding: 10px;
`;
export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: #0b360d;
    color: aliceblue;
    padding: 10px;
    margin: 1px;
    border-radius: 5px;

    &:hover {
        background-color: #147019;
    }

    &:active {
        background-color: rgb(18, 168, 55);
    }
`;
export const Info = styled.p`
    background-color: azure;
    border-radius: 5px;
    text-align: center;
`;