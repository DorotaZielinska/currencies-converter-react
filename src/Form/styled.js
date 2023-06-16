import styled from "styled-components";

export const LabelText = styled.span`
    width: 100%;
    max-width: 250px;
    display: inline-block;
    margin-right: 5px;
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.color.hampton};
    padding: 10px;
    width: 100%;
    max-width: 400 px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.twilightBlue};
    color: ${({ theme }) => theme.color.black};

    &:required {
        background-color: ${({ theme }) => theme.color.hampton}; 
    }
`;

export const FormFildset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0px;
`;

export const FormLegend = styled.legend`
    background-color: ${({ theme }) => theme.color.deepForestGreen};
    color: ${({ theme }) => theme.color.aliceBlue};
    border-radius: 5px;
    padding: 10px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.color.deepForestGreen};
    color: ${({ theme }) => theme.color.aliceBlue};
    padding: 10px;
    margin: 1px;
    border-radius: 5px;

    &:hover {
        background-color: ${({ theme }) => theme.color.bilbao};
    }

    &:active {
        background-color: ${({ theme }) => theme.color.salem};
    }
`;

export const Info = styled.p`
    background-color: ${({ theme }) => theme.color.twilightBlue};
    border-radius: 5px;
    text-align: center;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.teal};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.amaranth}; 
`;