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

const TextBox = ({ content }) => (
  DOM.span(null, `${content}`)
);

const BlogItem = ({ post }) => (
  DOM.div(null,
    React.createElement(Image, { args: post.imageArgs }),
    React.createElement(TextBox, { content: post.text })
  )
);

const posts = [
  {
    imageArgs: {
      src: 'http://www.kernix.com/web/kernix/images/opensource/react.png',
      width: 40,
      height: 40,
      alt: 'React logo',
    },
    text: 'Lorem ipsum dolor sit amet'
  },
  {
    imageArgs: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png',
      width: 40,
      height: 40,
      alt: 'React logo black',
    },
    text: 'Lorem ipsum dolor sit amet2'
  },
  {
    imageArgs: {
      src: 'https://blog.dashlane.com/wp-content/uploads/2016/02/react-logo-2.png',
      width: 80,
      height: 40,
      alt: 'React logo',
    },
    text: 'Lorem ipsum dolor sit amet3'
  },

]

ReactDOM.render(
  React.createElement('div', null, 
    _.map(
      posts, (post, key) => (
        DOM.span({ key }, React.createElement(BlogItem, { post: post }))
        )
      )
    ),
  document.getElementById('app')
);