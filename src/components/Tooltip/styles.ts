import styled from 'styled-components';

export const TooltipStyle = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  svg {
    margin-right: 0;
  }

  span {
    width: 200px;
    padding: 1px 10px;
    text-align: center;
    background-color: #c53030;
    color: #fff;
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;

    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0px 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    visibility: visible;
  }
`;
