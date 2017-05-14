import React, { DOM, PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
import BlogItem from 'components/widgets/blog/Item';

const Post = ({ post, addLike }) => (
  DOM.div(null,
    React.createElement(Item.Group, {},
      React.createElement(Item, {},
        post && React.createElement(BlogItem,
          {
            post,
            addLike: () => addLike(post.id)
          }
        )
      )
    )
  )
);

Post.propTypes = {
  post: PropTypes.object,
  addLike: React.PropTypes.func
};

export default Post;
