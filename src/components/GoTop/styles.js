import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    position: fixed;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    opacity: 0.7;
  `}
`;
