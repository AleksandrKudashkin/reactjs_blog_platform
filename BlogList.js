const { DOM, PropTypes } = React;

const { bind, assign } = _;

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