const DOM = React.DOM;

const TextBox = ({ content }) => (
  DOM.span(null, `${content}`)
);

ReactDOM.render(
  React.createElement(
    TextBox, 
    { content: 'Lorem ipsum dolor sit amet' }),
  document.getElementById('app')
);
