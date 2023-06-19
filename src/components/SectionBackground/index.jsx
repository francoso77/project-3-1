import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <Styled.Title background={background}>
      <SectionContainer>
        {children}
      </SectionContainer>
    </Styled.Title>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
