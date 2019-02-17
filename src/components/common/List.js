import React, { PureComponent } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

import isEmpty from '../../utils/is-empty';
import InputWrapper from '../InputWrapper';

/**
 * Styling of the component.
 *
 * @type {Object}
 */
const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  background: ${props => props.theme.listItem.background};
  cursor: pointer;
  margin: ${props => props.theme.listItem.margin};
  padding: ${props => props.theme.listItem.padding};
  text-align: left;

  &:hover {
    background: ${props => props.theme.listItem.backgroundHover};
  }
`;

class List extends PureComponent {
  render() {
    const { handleClick, items } = this.props;

    return (
      <InputWrapper>
        <StyledList>
          {items.map((item, index) => (
            <StyledListItem onClick={handleClick(index)} key={uuid()}>
              {item}
            </StyledListItem>
          ))}
        </StyledList>
        {isEmpty(items) && <div>There are no items yet...</div>}
      </InputWrapper>
    );
  }
}

List.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default List;
