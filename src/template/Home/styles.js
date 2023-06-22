import styled, { css } from 'styled-components';

/*export const Wrapper = styled.div`
  ${(props) => css`
    background: ${props.background};
  `}
`;*/

/*export const Wrapper = styled.div`
  ${({ background }) => css`
    background: ${background};
  `}
`;*/

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secundaryBg};
  `}
`;
