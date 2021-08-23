import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background-color: ${(props) => props.backgroundColor || 'var(--gold-300)'};
  color: ${(props) => props.color || 'white'};
  min-width: 28px;
  height: 40px;
  padding: 8px 16px;
  text-align: center;
  white-space: nowrap;
  border-radius: ${(props) => props.borderRadius || '0'};
  box-shadow: ${(props) => props.boxShadow || 'none'};
  transition: background-color 0.3s ease, filter 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.hoverBackgroundColor || props.backgroundColor};
    filter: ${(props) =>
      props.hoverBackgroundColor ? 'brightness(1)' : 'brightness(1.1)'};
  }
`;
