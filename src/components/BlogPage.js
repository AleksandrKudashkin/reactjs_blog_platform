import React, { DOM } from 'react';
import { clone, bind, map } from 'lodash';

import request from 'superagent';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import { Grid } from 'semantic-ui-react';

import { postsPath } from 'helpers/routes/posts';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.addLike = bind(this.addLike, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => {
        const posts = res.body.map((post) => {
          post.metaInfo.url = postsPath(post.metaInfo.id);
          return post;
        });
        this.setState({ posts });
      }
    );
  }

  addLike(itemId) {
    const posts = this.state.posts.map((post) => {
      if (post.metaInfo.id == itemId) {
        const newPost = clone(post);
        newPost.likes += 1;
        return newPost;
      } else {
        return post;
      }
    });

    this.setState({ posts });
  }

  chartData() {
    return map(this.state.posts, (post) =>
      [post.header, post.likes]
    );
  }

  render() {
    const { posts } = this.state;

    return DOM.div(null,
      React.createElement(Grid, { columns: 2, celled: 'internally' },
        React.createElement(Grid.Column, { width: 10 }
          , React.createElement(BlogList, {
            posts,
            addLike: this.addLike
          })
        ),
        React.createElement(Grid.Column, { width: 6 }
          , React.createElement(PieChart, {
            columns: this.chartData()
          })
        )
      )
    );
  }
}

export default BlogPage;
