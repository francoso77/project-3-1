import styled, { css } from 'styled-components';

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
