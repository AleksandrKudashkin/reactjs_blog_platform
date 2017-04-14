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
        to: post.metaInfo.url
      },
      post.header)
    ),
    React.createElement(ImageItem, post.imageArgs),
    React.createElement(TextBox, {}, post.text),
    React.createElement(MetaInfo, post.metaInfo),
    React.createElement(Like, {
      likes: post.likes,
      addLike
    })
  )
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    metaInfo: PropTypes.shape(MetaInfo.propTypes)
    , imageArgs: PropTypes.shape(ImageItem.propTypes)
    , header: React.PropTypes.string
    , text: React.PropTypes.string
    , likes: React.PropTypes.number
  }),
  addLike: React.PropTypes.func
};

export default BlogItem;
