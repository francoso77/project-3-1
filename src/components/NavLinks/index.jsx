import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Title>
      {links.map((link) => (
        <MenuLink key={link.link}{...link} />
      ))}
    </Styled.Title>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.node.isRequired,
      link: P.string.isRequired,
      newtab: P.bool,
    }),
  ).isRequired,
};
