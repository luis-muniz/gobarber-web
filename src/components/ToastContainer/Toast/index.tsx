import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiX,
  FiInfo,
  FiCheckCircle,
  FiAlertTriangle,
} from 'react-icons/fi';
import { ToastStyle } from './styles';
import { ToastMessage, useToast } from '../../../hooks/Toast';

interface ToastProps {
  toast: ToastMessage;
}

const toastIcons = {
  error: <FiAlertCircle size={20} />,
  info: <FiInfo size={20} />,
  sucess: <FiCheckCircle size={20} />,
  warning: <FiAlertTriangle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ toast }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, toast.id]);

  return (
    <ToastStyle type={toast.type}>
      {toastIcons[toast.type]}
      <div>
        <strong>{toast.title}</strong>
        {toast.description && <p>{toast.description}</p>}
      </div>
      <button type="button" onClick={() => removeToast(toast.id)}>
        <FiX size={18} />
      </button>
    </ToastStyle>
  );
};

export default Toast;
