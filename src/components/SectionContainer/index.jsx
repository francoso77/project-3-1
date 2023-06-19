import P from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children }) => {
  return (
    <Styled.Title>
      {children}
    </Styled.Title>
  );
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
