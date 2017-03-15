import React, { PropTypes } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import _ from 'lodash';

import MetaInfo from 'components/widgets/blog/elements/MetaInfo';
import ImageItem from 'components/widgets/blog/elements/Image';
import BlogItem from 'components/widgets/blog/Item';

const BlogList = ({ posts, addLike }) => (
  React.createElement(Container,
    null,
    React.createElement(Header,
      {
        as: 'h2'
        , children: 'My BlogList'
      }
    ),
    _.map(
      posts,
      (post) => (
        React.createElement(Segment,
          { key: post.metaInfo.id },
          React.createElement(BlogItem, {
            post,
            addLike: () => addLike(post.metaInfo.id)
          })
        )
      )
    )
  )
);

BlogList.propTypes = {
  posts: React.PropTypes.arrayOf(PropTypes.shape({
    metaInfo: PropTypes.shape(MetaInfo.propTypes)
    , imageArgs: PropTypes.shape(ImageItem.propTypes)
    , header: React.PropTypes.string
    , text: React.PropTypes.string
    , likes: React.PropTypes.number
    , addLike: React.PropTypes.func
  })
  ),
  addLike: React.PropTypes.func
};

export default BlogList;
