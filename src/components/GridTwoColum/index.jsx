import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColum = ({ title, text, srcImg, background }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Title>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>
            {text}
          </TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Title>
    </SectionBackground >
  );
};

GridTwoColum.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
