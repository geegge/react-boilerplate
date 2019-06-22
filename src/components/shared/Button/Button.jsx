import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  color: ${props => props.color || 'palevioletred'};
  border: 2px solid ${props => props.color || 'palevioletred'};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${props => props.color || 'palevioletred'};
    color: white;
  }
`;

function Button(props) {
  const { name, color } = props;
  return (
    <StyledButton type="button" name="button" color={color}>
      Hello, {name}!
    </StyledButton>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
};

export default Button;
