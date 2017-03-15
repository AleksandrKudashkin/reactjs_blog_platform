import React, { DOM } from 'react';

import _ from 'lodash';

import { posts } from 'constants/static/posts';

import BlogList from 'components/widgets/blog/List';

import PieChart from 'components/widgets/blog/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
    this.addLike = _.bind(this.addLike, this);
  }

  addLike(itemId) {
    const post = _.find(posts, function(o) {
      return o.metaInfo.id == itemId;
    });
    post.likes += 1;
    this.setState({ posts });
  }

  chartData() {
    return _.map(posts, (post) =>
      [post.header, post.likes]
    );
  }

  render() {
    const { posts } = this.state;

    return DOM.div(null,
      React.createElement(BlogList, {
        posts,
        addLike: this.addLike
      })
      , React.createElement(PieChart, {
        columns: this.chartData()
      })
    );
  }
}

export default BlogPage;
