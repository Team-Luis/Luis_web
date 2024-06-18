import styled from "styled-components";

export const TextField = styled.div`
  width: 485px;
  height: 45px;

  border: none;
  border-bottom: 1px solid #d1d1d1;
  display: flex;
  flex-direction: column;

  gap: 15px;

  label {
    font-size: 1.3rem;
    pointer-events: none;
  }
`;

export const TextFieldInput = styled.input`
  width: 97%;
  height: 45px;

  color: var(--Gray600, #787878);
  font-family: Assistant;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 200;
  border: none;
  border-bottom: 1px solid #d1d1d1;
  outline: none;
  padding-bottom: 10px;

  font-size: 18px;
  font-family: Assistant;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 20px;
  }

  user-select: none;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
