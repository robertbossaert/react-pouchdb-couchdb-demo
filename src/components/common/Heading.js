import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../../constants';

const StyledHeader = styled.div`
  text-align: ${props => (props.center ? 'center' : 'left')};

  ${media.tablet`
    text-align: ${props => (props.center ? 'center' : 'left')};
  `};

  > * {
    font-weight: 300;
  }
`;

const Header = ({ size, title, center }) => (
  <StyledHeader center={center}>
    {size === 1 && <h1>{title}</h1>}
    {size === 2 && <h2>{title}</h2>}
    {size === 3 && <h3>{title}</h3>}
  </StyledHeader>
);

Header.propTypes = {
  center: PropTypes.bool,
  title: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Header.defaultProps = {
  center: false,
  size: 1,
};

export default Header;
