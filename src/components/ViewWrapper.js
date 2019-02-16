import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../constants';

/**
 * Styling of the component.
 *
 * @type {Object}
 */
const OuterContainer = styled.div`
  height: 100%;
  max-width: 100%;
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 490px;
  padding: 0 20px;
  text-align: ${props => (props.center ? 'center' : 'left')};

  ${media.tablet`
    padding: 0;
  `};
`;

const ViewWrapper = ({ children, center }) => (
  <OuterContainer>
    <InnerContainer center={center}>{children}</InnerContainer>
  </OuterContainer>
);

ViewWrapper.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ViewWrapper.defaultProps = {
  center: false,
};

export default ViewWrapper;
