const DOM = React.DOM;

const Image = ({ args }) => (
  DOM.img( 
    { 
      src: args.src, 
      width: args.width, 
      height: args.height, 
      alt: args.alt 
    } 
  )
);

ReactDOM.render(
  React.createElement(
    Image, 
    args: { 
      src: 'http://www.kernix.com/web/kernix/images/opensource/react.png',
      width: 40,
      height: 40,
      alt: 'React logo'
    }),
  document.getElementById('app')
);