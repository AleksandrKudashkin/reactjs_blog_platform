import React, { DOM, PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
import BlogItem from 'components/widgets/blog/Item';
import Meta from 'components/elements/Meta';

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
    ),
    post && React.createElement(Meta, {
      title: post.title
    })
  )
);

Post.propTypes = {
  post: PropTypes.object,
  addLike: React.PropTypes.func
};

export default Post;
