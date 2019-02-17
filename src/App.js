import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Provider } from 'unstated';

import DbContainer from './store/state';
import Header from './components/Header';
import Home from './containers/Home';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    background-color: ${props => props.theme.document.background};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.document.fontFamily};
    font-size: ${props => props.theme.document.fontSize};
    font-weight: normal;
    font-style: normal;
    line-height: 1.5;
    color: ${props => props.theme.document.color};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  /**
   * Modal - Lock the scroll position by adding this class to the '<html>' element.
   */
  .u-lock-scroll {
    overflow: hidden !important;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  constructor() {
    super();

    this.dbContainer = new DbContainer('react-pouchdb-couchdb-demo');
  }

  render() {
    return (
      <Provider inject={[this.dbContainer]}>
        <StyledContainer>
          <GlobalStyle />
          <Header />
          <Home />
        </StyledContainer>
      </Provider>
    );
  }
}

export default App;
