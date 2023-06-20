import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({ title, description, background, grid }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Title>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>
          {description}
        </TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>
                {el.description}
              </TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Title>
    </SectionBackground >
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(P.shape({
    title: P.string.isRequired,
    description: P.string.isRequired,
  })).isRequired,
};