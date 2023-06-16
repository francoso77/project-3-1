import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children }) => {
  return (
    <Styled.Title>
      {children}
    </Styled.Title>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
