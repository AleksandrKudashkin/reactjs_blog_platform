import React, { DOM, PropTypes } from 'react';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';
import { map } from 'lodash';

import MetaInfo from 'components/widgets/blog/elements/MetaInfo';
import ImageItem from 'components/widgets/blog/elements/Image';
import BlogItem from 'components/widgets/blog/Item';
import PieChart from 'components/widgets/blog/PieChart';
import SearchBar from 'components/widgets/blog/elements/Search';

const BlogList = ({ posts, addLike, startSearch }) => (
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
          React.createElement(SearchBar, {
            loading: posts.isFetching
            , error: posts.error,
            startSearch: (event) => {
              startSearch(event.currentTarget.value);
            }
          }),
          map(
            posts,
            (post) => (
              React.createElement(Segment,
                { key: post.id },
                React.createElement(BlogItem, {
                  post,
                  addLike: () => addLike(post.id)
                })
              )
            )
          )
        )
      ),
      React.createElement(Grid.Column, { width: 6 }
        , React.createElement(PieChart
            , { columns: map(posts, (post) => ([post.id, post.meta.likes]))}
          )
      )
    )
  )

);

BlogList.propTypes = {
  posts: React.PropTypes.arrayOf(PropTypes.shape({
    meta: PropTypes.shape(MetaInfo.propTypes)
    , image: PropTypes.shape(ImageItem.propTypes)
    , title: React.PropTypes.string
    , description: React.PropTypes.string
    , likes: React.PropTypes.number
    , addLike: React.PropTypes.func
    , url: React.PropTypes.string
  })
  ),
  addLike: React.PropTypes.func,
  startSearch: React.PropTypes.func
};

export default BlogList;
