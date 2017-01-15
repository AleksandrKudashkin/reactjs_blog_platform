const DOM = React.DOM;

const Image = ({ src, width, height, alt }) => (
  DOM.img( 
    { 
      src, 
      width, 
      height, 
      alt 
    } 
  )
);

ReactDOM.render(
  React.createElement(
    Image, 
    { 
      src: 'http://www.kernix.com/web/kernix/images/opensource/react.png',
      width: 40,
      height: 40,
      alt: 'React logo'
    }),
  document.getElementById('app')
);