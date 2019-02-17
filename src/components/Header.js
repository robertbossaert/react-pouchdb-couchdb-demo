import React from 'react';
import styled from 'styled-components';
import { Detector } from 'react-detect-offline';

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
  margin-bottom: ${props => props.theme.header.marginBottom};
  padding: ${props => props.theme.header.padding};
  position: relative;
  width: 100%;

  > * {
    flex: 1;
  }
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

const StyledStatus = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  .online {
    background-color: ${props => props.theme.onlineStatus.background};
    border-radius: ${props => props.theme.onlineStatus.borderRadius};
    font-size: ${props => props.theme.onlineStatus.fontSize};
    padding: ${props => props.theme.onlineStatus.padding};

    ${media.tablet`
      font-size: ${props => props.theme.onlineStatus.fontSizeTablet};
    `};
  }

  .offline {
    background-color: ${props => props.theme.offlineStatus.background};
    border-radius: ${props => props.theme.offlineStatus.borderRadius};
    font-size: ${props => props.theme.offlineStatus.fontSize};
    padding: ${props => props.theme.offlineStatus.padding};

    ${media.tablet`
      font-size: ${props => props.theme.offlineStatus.fontSizeTablet};
    `};
  }
`;

const StyledModalButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledHeading = styled.h2`
  font-size: 22px;
  font-weight: ${props => props.theme.heading.fontWeight};
  margin: 0 0 10px;
`;

const StyledLink = styled.a`
  color: ${props => props.theme.link.color};
  text-decoration: none;
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  margin: 0 0 20px;
`;

const url = 'https://yard.nl';

const Header = () => {
  const modalContent = (
    <div>
      <StyledHeading>PouchDB / CouchDB demo</StyledHeading>
      <StyledParagraph>
        This little demo was accompanied by a presentation given on 19 february 2019 at our inhouse
        event Yardcon. It was created to demonstrate the use of PouchDB and CouchDB in a React PWA.
      </StyledParagraph>
      <StyledParagraph>
        Visit us at{' '}
        <StyledLink href={url} target="_blank" rel="noopener noreferrer">
          Yard.nl
        </StyledLink>
      </StyledParagraph>
      <StyledHeading>Instructions</StyledHeading>
      <StyledParagraph>
        Fill the field, hit <strong>ENTER</strong> and see it synchronized with PouchDB.
      </StyledParagraph>
      <StyledParagraph>
        When you go offline, enter and submit text and go back online, it should
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
      <StyledStatus>
        <Detector
          render={({ online }) => (
            <div className={online ? 'online' : 'offline'}>
              You are currently {online ? 'online' : 'offline'}
            </div>
          )}
        />
      </StyledStatus>
      <StyledModalButton>
        <Modal {...modalProps}>{modalContent}</Modal>
      </StyledModalButton>
    </StyledHeader>
  );
};

export default Header;
