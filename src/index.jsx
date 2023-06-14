import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './template/App/App';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import styled, { css } from 'styled-components';

/*export const Heading = styled.h1`
  color: purple;
`;
const changeBackground = (theme, bg) => css`
  background: ${bg};
  color: black;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryColor};

  ${({ theme, bg }) => css`

    color: ${theme.colors.white};
    ${changeBackground(theme, bg)};
  `}

  //O & substitui o nome do componente  
  &:hover{
    background: green;
  }
`;

export const Container2 = styled(Container).attrs({ as: 'article' })`
  background: blue;

  
  //usando como filho

  > ${Heading}:hover {
    color: yellow;
  }
`;
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

