import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newtab = false }) => {
  const target = newtab ? '_blank' : '_self';
  return (
    <Styled.Title href={link} target={target}>
      {children}
    </Styled.Title>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newtab: P.bool,
};
