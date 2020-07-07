import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logo} alt="GoBarber" />
          <form action="">
            <h1>Faça seu cadastro</h1>
            <Input
              icon={FiUser}
              name="name"
              type="text"
              placeholder="Digite seu nome"
            />
            <Input
              icon={FiMail}
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Digite sua senha"
            />
            <Button type="submit">Cadastrar</Button>
          </form>
          <a href="create">
            <FiArrowLeft />
            Voltar para logon
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
