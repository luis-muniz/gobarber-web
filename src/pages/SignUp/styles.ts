import styled from 'styled-components';
import signUpBackgroundImg from '../../assets/sign-up-background.png';

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
  }

  > a {
    color: #f4ede8;
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
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
