const { DOM, PropTypes } = React;

const { bind, assign } = _;

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