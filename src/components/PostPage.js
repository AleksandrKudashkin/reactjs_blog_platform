import React, { DOM, PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
import BlogItem from 'components/widgets/blog/Item';

const Post = ({ post }) => (
  DOM.div(null,
    React.createElement(Item.Group, {},
      React.createElement(Item, {},
        post && React.createElement(BlogItem,
          { post }
        )
      )
    )
  )
);

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
