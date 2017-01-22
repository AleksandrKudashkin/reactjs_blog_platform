const { DOM, PropTypes } = React;

const { bind, assign } = _;

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

const TextBox = ({ content }) => (
  DOM.span(null, `${content}`)
);

TextBox.defaultProps = {
  content: 'Default lorem ipsum dolor sit amet'
};

TextBox.propTypes = {
  content: PropTypes.string
};

const MetaInfo = ({ author, createdAt, updatedAt }) => (
  DOM.p(null, 
        `Author: ${author} | Created: ${createdAt} | Last Update: ${updatedAt}`
       )
);

MetaInfo.defaultProps = {
  author: 'John Smith',
  createdAt: '01/01/2017',
  updatedAt: '02/01/2017'
};

MetaInfo.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
}

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.likes };
    
    this.handleClick = bind(this.handleClick, this);
  }
  
  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }
  
  render() {
    return (
      <div>
        {this.state.count > 0 &&
          <p>Likes: { this.state.count }</p>
        }
      <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
};

Like.defaultProps = {
  likes: 0
}

Like.propTypes = {
  likes: PropTypes.number
}

const BlogItem = ({ post }) => (
  DOM.div(null,
    React.createElement(MetaInfo, post.metaInfo),
    React.createElement(Image, post.imageArgs),
    React.createElement(TextBox, { content: post.text }),
    React.createElement(Like, { likes: post.likes })
  )
);

const posts = [
  {
    metaInfo: {
      author: 'Jimmy',
      createdAt: moment('2017-01-01', 'YYYY-MM-DD').calendar(),
      updatedAt: moment('2017-01-02', 'YYYY-MM-DD').calendar()
    },
    imageArgs: {
      src: 'http://www.kernix.com/web/kernix/images/opensource/react.png',
      width: 40,
      height: 40,
      alt: 'React logo',
    },
    text: 'Lorem ipsum dolor sit amet'
  },
  {
    metaInfo: {
      author: 'Billy',
      createdAt: moment('2017-01-03', 'YYYY-MM-DD').calendar(),
      updatedAt: moment('2017-01-04', 'YYYY-MM-DD').calendar()
    },
    imageArgs: {
      src: 'https://raw.githubusercontent.com/rexxars/react-hexagon/master/logo/react-hexagon.png',
      width: 40,
      height: 40,
      alt: 'React logo black',
    },
    text: 'Lorem ipsum dolor sit amet2',
    likes: 11
  },
  {
    metaInfo: {
      author: 'Villy',
      createdAt: moment('2017-01-05', 'YYYY-MM-DD').calendar(),
      updatedAt: moment('2017-01-06', 'YYYY-MM-DD').calendar(),
    },
    imageArgs: {
      src: 'https://blog.dashlane.com/wp-content/uploads/2016/02/react-logo-2.png',
      width: 80,
      height: 40,
      alt: 'React logo',
    },
    text: 'Lorem ipsum dolor sit amet3',
    likes: 5
  },

]

const BlogList = ({ posts }) => (
  DOM.ul(
    null,
    _.map(
      posts,
      (post, key) => (
        DOM.li(
          { key },
          React.createElement(BlogItem, { post: post })
        )
      )
    )
  )
);

ReactDOM.render(
  React.createElement(BlogList, { posts: posts }),
  document.getElementById('app')
);