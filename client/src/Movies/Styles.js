import Styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = Styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    padding: 2rem;
    margin: 0 auto;
    border: .1rem solid blue ;
    border-radius: 2rem;
    font-family: helvetica;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`
export const StyledField = Styled(Field)`
    align-self:center;
    width: 70%;
    padding: .7rem;
    margin: 1rem ;
`

export const StyledLabel = Styled.label`
    margin-left: 1.8rem;
    color: red; 
`

export const StyledButton = Styled.button`
   padding: 1.2rem;
   border-radius: 2rem;
   background: blue;
   color: white;
   margin: 0 auto;
`