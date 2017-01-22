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

Image.defaultProps = {
  src: 'http://icons.iconarchive.com/icons/guillendesign/variations-3/256/Default-Icon-icon.png',
  width: 50,
  height: 50,
  alt: 'Default Image'
};

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
};

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