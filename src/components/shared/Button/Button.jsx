import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return <h1>Hello, {name}</h1>;
}

Button.propTypes = {
  name: PropTypes.string
};

export default Button;
