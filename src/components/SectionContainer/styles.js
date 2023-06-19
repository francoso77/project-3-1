import styled, { css } from 'styled-components';

export const Title = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: auto;
    padding: ${theme.spacings.large};
  `}
`;
