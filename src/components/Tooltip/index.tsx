import React from 'react';
import { IconBaseProps } from 'react-icons';
import { TooltipStyle } from './styles';

interface TooltipProps {
  messageError: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Tooltip: React.FC<TooltipProps> = ({ icon: Icon, messageError }) => {
  return (
    <>
      <TooltipStyle>
        <Icon size={20} color="#c53030" />
        <span>{messageError}</span>
      </TooltipStyle>
    </>
  );
};

export default Tooltip;
