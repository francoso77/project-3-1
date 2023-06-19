import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children }) => {
  return (
    <Styled.Title dangerouslySetInnerHTML={{ __html: children }} />
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
