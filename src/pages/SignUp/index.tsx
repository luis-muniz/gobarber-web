import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

interface InputData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const refForm = useRef<FormHandles>(null);

  const handleFormSubmit = useCallback(async (data: InputData) => {
    try {
      refForm.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório!'),
        email: Yup.string()
          .required('E-mail obrigatório!')
          .email('Digite um e-mail válido!'),
        password: Yup.string()
          .min(6, 'Senha deve ter no mínimo 6 caracteres!')
          .max(12, 'Senha deve ter no máximo 12 caracteres!'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);
      refForm.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logo} alt="GoBarber" />
          <Form ref={refForm} onSubmit={handleFormSubmit}>
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
          </Form>
          <a href="create">
            <FiArrowLeft size={20} />
            Voltar para logon
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
