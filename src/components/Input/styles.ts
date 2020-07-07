import styled from 'styled-components';

export const ContainerStyle = styled.div`
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
    color: #666360;
    margin-right: 18px;
  }

  & + div {
    margin-top: 8px;
  }
`;
