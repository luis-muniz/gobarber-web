import styled from 'styled-components';
import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    width: 340px;
    justify-content: center;
    align-items: center;

    h1 {
      margin-top: 90px;
      margin-bottom: 24px;
      color: #f4ede8;
      font-weight: 500;
    }

    input {
      border: 2px solid #232129;
      border-radius: 10px;
      padding: 17px;
      background: #232129;
      width: 100%;
      height: 56px;
      color: #fff;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
        margin-bottom: 24px;
      }
    }

    button {
      border: none;
      font-weight: 500;
      background: #ff9000;
      border-radius: 10px;
      color: #312e38;
      width: 100%;
      height: 56px;
      transition: 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      margin-top: 24px;
      transition: 0.2s;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  > a {
    color: #ff9000;
    text-decoration: none;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    &:hover {
      opacity: 0.7;
    }
    svg {
      margin-right: 18px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
