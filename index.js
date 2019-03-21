import styled, { keyframes } from 'styled-components';

const hueRotate = keyframes`
  from {
    transform: hue-rotate(0deg);
  }

  to {
    transform: hue-rotate(360deg);
  }
`;

const Sparkles = styled.div`
  &:hover {
    animation: ${hueRotate} 2s linear infinite;
  };
`;

export default Sparkles;
