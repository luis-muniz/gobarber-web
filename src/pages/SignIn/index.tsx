import React from 'react';
import { FiLogIn, FiUser, FiMail } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="GoBarber" />
          <form action="">
            <h1>Faça seu logon</h1>
            <Input
              icon={FiMail}
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
            <Input
              icon={FiUser}
              name="password"
              type="password"
              placeholder="Digite sua senha"
            />
            <Button type="submit">Entrar</Button>
            <a href="forgot">Esqueci minha senha</a>
          </form>
          <a href="create">
            <FiLogIn />
            Criar conta
          </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
