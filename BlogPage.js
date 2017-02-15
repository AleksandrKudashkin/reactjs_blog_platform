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

const TextBox = ({ children }) => (
  DOM.span(null, `${children}`)
);

TextBox.defaultProps = {
  children: 'Default lorem ipsum dolor sit amet'
};

TextBox.propTypes = {
  children: PropTypes.string
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
  updatedAt: PropTypes.string,
  id: PropTypes.number
}

const Like = ({ likes, addLike }) => (
    <div>
      <p>Likes: { likes }</p>
      <button onClick={ addLike }>+1</button>
    </div>
);

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number,
  addLike: PropTypes.func
};

const BlogItem = ({ post, addLike }) => (
  DOM.div(null,
    React.createElement(MetaInfo, post.metaInfo),
    React.createElement(Image, post.imageArgs),
    React.createElement(TextBox, {}, post.text),
    React.createElement(Like, { 
      likes: post.likes, 
      addLike: addLike 
    })
  )
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    metaInfo: PropTypes.shape(MetaInfo.propTypes)
    , imageArgs: PropTypes.shape(Image.propTypes)
    , text: React.PropTypes.string
    , likes: React.PropTypes.number
    , addLike: React.PropTypes.func
  })
};

const BlogList = ({ posts, addLike }) => (
  DOM.ul(
    null,
    _.map(
      posts,
      (post, key) => (
        DOM.li(
          { key: post.metaInfo.id },
          React.createElement(BlogItem, { 
            post: post, 
            addLike: () => addLike(post.metaInfo.id)
          })
        )
      )
    )
  )
);

class BlogPage extends React.Component {
  constructor(props){
    super(props)
    this.state = { posts }
    this.addLike = bind(this.addLike, this);
  }
  
  addLike(itemId) {
    let post = _.find(posts, function(o) { 
      return o.metaInfo.id == itemId; 
    });
    post.likes += 1;
    this.setState({ posts: posts });
  }
  
  render() {
    const { posts } = this.state;
    return React.createElement(BlogList, { 
      posts: posts, 
      addLike: this.addLike 
    });
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