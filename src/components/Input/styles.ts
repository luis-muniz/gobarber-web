import styled, { css } from 'styled-components';

interface ContainerStyleProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const ContainerStyle = styled.div<ContainerStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #232129;
  border-radius: 10px;
  padding: 17px;
  background: #232129;
  width: 100%;
  max-width: 340px;
  height: 56px;
  color: #666360;

  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
      border: 2px solid #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border: 2px solid #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}


  input {
    border: 0;
    background: #232129;
    color: #fff;
    flex: 1;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 18px;
  }

  & + div {
    margin-top: 8px;
  }
`;
