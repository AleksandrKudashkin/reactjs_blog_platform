const { DOM, PropTypes } = React;

const { bind, assign } = _;

const TextBox = ({ content }) => (
  DOM.span(null, `${content}`)
);

TextBox.defaultProps = {
  content: 'Default lorem ipsum dolor sit amet'
};

TextBox.propTypes = {
  content: PropTypes.string
};

ReactDOM.render(
  React.createElement(
    TextBox, 
    { content: 'Lorem ipsum dolor sit amet' }),
  document.getElementById('app')
);
