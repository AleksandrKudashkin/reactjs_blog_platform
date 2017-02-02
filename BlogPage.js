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

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.children };
    
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
  children: 0
}

Like.propTypes = {
  children: PropTypes.number
}

const MetaInfo = ({ id, author, createdAt, updatedAt }) => (
  DOM.p(null, 
        `Id: ${id} | Author: ${author} | Created: ${createdAt} | Last Update: ${updatedAt}`
       )
);

MetaInfo.defaultProps = {
  author: 'John Smith',
  createdAt: '01/01/2017',
  updatedAt: '02/01/2017',
  id: 0
};

MetaInfo.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  id: PropTypes.number
}

const BlogItem = ({ post }) => (
  DOM.div(null,
    React.createElement(MetaInfo, post.metaInfo),
    React.createElement(Image, post.imageArgs),
    React.createElement(TextBox, {}, post.text),
    React.createElement(Like, {}, post.likes)
  )
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    metaInfo: PropTypes.shape(MetaInfo.propTypes)
    , imageArgs: PropTypes.shape(Image.propTypes)
    , text: React.PropTypes.string
    , likes: React.PropTypes.number
  })
};

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

class BlogPage extends React.Component {  
  render() {
    const { posts } = this.props;
    return React.createElement(BlogList, { posts });
  }
}

const posts = [
  {
    metaInfo: {
      id: 1,
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
      id: 2,
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
      id: 3,
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

ReactDOM.render(
  React.createElement(BlogPage, { posts: posts }),
  document.getElementById('app')
);