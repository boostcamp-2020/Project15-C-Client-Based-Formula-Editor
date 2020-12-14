import styled from '@emotion/styled';
import { LoadingProps } from './index';

export const LoadingContainer = styled.div<LoadingProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: animate 4s linear infinite;

  & .pencil {
    width: ${(props) => (props.size === 'mini' ? '100px' : '180px')};
    height: 15px;
    background: #ffc334;
    border-top: 10px solid #ffd268;
    border-bottom: 10px solid #e2af38;
    box-sizing: content-box;
    overflow: hidden;
    transform-origin: top;
  }

  & .pencil p {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 8px;
    line-height: 15px;
    text-transform: uppercase;
    font-weight: bold;
    color: #d09200;
    white-space: nowrap;
  }

  & .pencil:before {
    content: '';
    position: absolute;
    left: -80px;
    top: 0;
    border-style: solid;
    border-color: transparent #e29663 transparent transparent;
    border-width: 17px 40px 18px;
  }

  & .pencil:after {
    content: '';
    position: absolute;
    left: -80px;
    top: 0;
    border-style: solid;
    border-color: transparent #262626 transparent transparent;
    border-width: 17px 40px 18px;
    transform: scale(0.3);
  }

  & .top {
    position: absolute;
    top: 0;
    right: 0;
    height: 15px;
    width: ${(props) => (props.size === 'mini' ? '20px' : '30px')};
    background: #ccc;
    border-top: 10px solid #dedede;
    border-bottom: 10px solid #b9bfbf;
  }

  & .top:before {
    content: '';
    position: absolute;
    top: -10px;
    right: -100%;
    width: 150%;
    height: 100%;
    background: #d76f7e;
    border-top: 10px solid #d76f6e;
    border-bottom: 10px solid #d76f6e;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 2;
  }

  & .stroke_big {
    position: absolute;
    top: 50%;
    left: calc(50% - 5px);
    transform: translate(-50%, -50%) rotate(45deg);
    border: 5px solid transparent;
    border-left-color: #000;
    border-top-color: #000;
    width: ${(props) => (props.size === 'mini' ? '130px' : '240px')};
    height: ${(props) => (props.size === 'mini' ? '130px' : '240px')};
    border-radius: 50%;
    z-index: 1;
    box-sizing: content-box;
  }

  & .stroke_mini {
    position: absolute;
    top: 50%;
    left: calc(50% - 10px);
    transform: translate(-50%, -50%) rotate(45deg);
    border: 5px solid transparent;
    border-left-color: #000;
    border-top-color: #000;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    z-index: 1;
    box-sizing: content-box;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) roate(0deg);
    }
  }
`;
