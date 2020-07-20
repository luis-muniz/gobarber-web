import React, { useRef, useCallback, useContext } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { title } from 'process';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

interface InputData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const refForm = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleFormSubmit = useCallback(
    async (data: InputData) => {
      try {
        refForm.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório!')
            .email('Digite um e-mail válido!'),
          password: Yup.string().required('Senha obrigatória!'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          refForm.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Usuário não encontrado',
          description: 'E-mail/Senha inválidos.',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="GoBarber" />
          <Form ref={refForm} onSubmit={handleFormSubmit}>
            <h1>Faça seu logon</h1>
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
            <Button type="submit">Entrar</Button>
            <a href="forgot">Esqueci minha senha</a>
          </Form>
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
