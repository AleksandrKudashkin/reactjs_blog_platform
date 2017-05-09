import React, { DOM, PropTypes } from 'react';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';
import { map } from 'lodash';

import MetaInfo from 'components/widgets/blog/elements/MetaInfo';
import ImageItem from 'components/widgets/blog/elements/Image';
import BlogItem from 'components/widgets/blog/Item';
import PieChart from 'components/widgets/blog/PieChart';

const BlogList = ({ posts, addLike }) => (
  DOM.div(null,
    React.createElement(Grid, { columns: 2, celled: 'internally' },
      React.createElement(Grid.Column, { width: 10 }
        , React.createElement(Container,
          null,
          React.createElement(Header,
            {
              as: 'h2'
              , children: 'My BlogList'
            }
          ),
          map(
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
      ),
      React.createElement(Grid.Column, { width: 6 }
        , React.createElement(PieChart
            , { columns: map(posts, (post) => ([post.metaInfo.id, post.likes]))}
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
    , url: React.PropTypes.string
  })
  ),
  addLike: React.PropTypes.func
};

export default BlogList;
