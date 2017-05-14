import React, { PropTypes, DOM } from 'react';

import MetaInfo from 'components/widgets/blog/elements/MetaInfo';
import ImageItem from 'components/widgets/blog/elements/Image';
import HeaderItem from 'components/widgets/blog/elements/Header';
import TextBox from 'components/widgets/blog/elements/TextBox';
import Like from 'components/widgets/blog/elements/Like';
import Link from 'components/elements/Link';

const BlogItem = ({ post, addLike }) => (
  DOM.div(null,
    React.createElement(HeaderItem, {},
      React.createElement(Link, {
        to: post.meta.url
      },
      post.title)
    ),
    React.createElement(ImageItem, post.image),
    React.createElement(TextBox, {}, post.description),
    React.createElement(MetaInfo, post.meta),
    React.createElement(Like, {
      likes: post.meta.likes,
      addLike
    })
  )
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    meta: PropTypes.shape(MetaInfo.propTypes)
    , image: PropTypes.shape(ImageItem.propTypes)
    , title: React.PropTypes.string
    , description: React.PropTypes.string
    , likes: React.PropTypes.number
  }),
  addLike: React.PropTypes.func
};

export default BlogItem;
