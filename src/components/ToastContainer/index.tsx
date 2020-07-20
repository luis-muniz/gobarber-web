import React from 'react';

import { ToastContainerStyle } from './styles';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/Toast';

interface ToastContainerProps {
  toasts: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  return (
    <ToastContainerStyle>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </ToastContainerStyle>
  );
};

export default ToastContainer;
