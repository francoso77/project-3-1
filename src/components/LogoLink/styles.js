import styled, { css } from 'styled-components';

export const Title = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;


  > img {
    max-height: 5rem;

  }
  `}
`;
