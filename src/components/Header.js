import React from 'react';
import styled from 'styled-components';

import media from '../constants';
import Modal from './common/modal/Modal';

/**
 * Styling of the component.
 *
 * @type {Object}
 */
const StyledHeader = styled.div`
  align-items: center;
  background: ${props => props.theme.header.background};
  box-shadow: ${props => props.theme.header.boxShadow};
  display: flex;
  padding: ${props => props.theme.header.padding};
  position: relative;
  margin-bottom: ${props => props.theme.header.marginBottom};
`;

const StyledLogo = styled.a`
  background: url("${props => props.theme.document.logo}") no-repeat;
  background-size: contain;
  height: 100%;
  height: ${props => props.theme.document.logoHeightSmall};
  width: 100%;

  ${media.tablet`
    height: ${props => props.theme.document.logoHeightTablet};
  `};
`;

const StyledHeading = styled.h2`
  font-size: 22px;
  font-weight: 300;
  margin: 0 0 10px;
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  margin: 0 0 20px;
`;

const url = "https://yard.nl";

const Header = () => {
  const modalContent = (
    <div>
      <StyledHeading>PouchDB / CouchDB demo</StyledHeading>
      <StyledParagraph>
        This little demo was accompanied by a presentation given on 19 february 2019 at our inhouse event Yardcon. It was created to demonstrate the use of PouchDB and CouchDB in a React PWA.
      </StyledParagraph>
      <StyledParagraph>
        Visit us at <a href={url} target="_blank" rel="noopener noreferrer">Yard.nl</a>
      </StyledParagraph>
    </div>
  );

  const modalProps = {
    ariaLabel: 'Yard - PouchDB / CouchDB demo',
    triggerText: 'Info',
  };

  return (
    <StyledHeader>
      <StyledLogo href={url} target="_blank" rel="noopener noreferrer" />
      <Modal {...modalProps}>{modalContent}</Modal>
    </StyledHeader>
  );
};

export default Header;
