import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { ContainerStyle } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <ContainerStyle>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </ContainerStyle>
);

export default Input;
