const { DOM, PropTypes } = React;

const { bind, assign } = _;

const TextBox = ({ children }) => (
  DOM.span(null, `${children}`)
);

TextBox.defaultProps = {
  children: 'Default lorem ipsum dolor sit amet'
};

TextBox.propTypes = {
  children: PropTypes.string
};

ReactDOM.render(
  React.createElement(
    TextBox
    , {}
    , 'Lorem ipsum dolor sit amet'
  ),
  document.getElementById('app')
);
