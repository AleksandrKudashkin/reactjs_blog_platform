import { PropTypes, DOM } from 'react';

const TextBox = ({ children }) => (
  DOM.p(null, `${children}`)
);

TextBox.defaultProps = {
  children: 'Default lorem ipsum dolor sit amet'
};

TextBox.propTypes = {
  children: PropTypes.string
};

export default TextBox;
