import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({ title, html, background }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Title>
        <Heading uppercase colorDark={!background}>
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>
            {html}
          </TextComponent>
        </Styled.Html>
      </Styled.Title>
    </SectionBackground >
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
