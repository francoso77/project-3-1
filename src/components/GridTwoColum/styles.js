import styled, { css } from 'styled-components';
import { Title as TitleHeading } from '../Heading/styles';

export const Title = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium}{
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${TitleHeading}{
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
  @media ${theme.media.lteMedium}{
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;
export const ImageContainer = styled.div`
  ${({ theme }) => css`

  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`

  `}
`;