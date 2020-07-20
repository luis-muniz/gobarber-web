import styled, { css } from 'styled-components';

interface ToastStyleProps {
  type: 'sucess' | 'info' | 'error' | 'warning';
}

const toastVariations = {
  error: css`
    background: #d08b89;
    border-left: 8px solid #c73634;
    color: #c73610;
    svg {
      color: #c73634;
    }
  `,
  warning: css`
    background: #c7bc0b;
    border-left: 8px solid #948b15;
    color: #948b05;
    svg {
      color: #948b05;
    }
  `,
  sucess: css`
    background: #98d06a;
    border-left: 8px solid #4c9410;
    color: #4c9410;
    svg {
      color: #4c9410;
    }
  `,
  info: css`
    background: #8e8fd0;
    border-left: 8px solid #292b94;
    color: #292b94;
    svg {
      color: #292b94;
    }
  `,
};

export const ToastStyle = styled.div<ToastStyleProps>`
  width: 360px;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  border-left: 8px solid;

  ${(props) => toastVariations[props.type]}

  svg {
    margin-top: 10px;
    margin-left: 5px;
  }

  div {
    flex: 1;
    padding: 0px 10px;
    margin: 10px 0px;
    line-height: 18px;
    strong {
      font-weight: 700;
    }

    p {
      font-size: 14px;
    }
  }

  button {
    width: 18px;
    height: 18px;
    margin-top: 2px;
    margin-right: 2px;
    border: none;
    background: transparent;
    color: inherit;
    svg {
      margin-top: 0px;
      margin-left: 0px;
    }
  }

  & + div {
    margin-top: 8px;
  }
`;
