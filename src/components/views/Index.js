import BlogList from 'components/widgets/blog/List';
import React, { DOM } from 'react';
import Helmet from 'react-helmet';

const Index = ({ posts, addLike, startSearch }) => (
  DOM.div(null,
    React.createElement(BlogList, {
      posts,
      addLike,
      startSearch
    }),
    React.createElement(Helmet, {
      title: 'Posts index'
    })
  )
);

Index.propTypes = {
  posts: BlogList.propTypes.posts,
  addLike: BlogList.propTypes.addLike,
  startSearch: BlogList.propTypes.startSearch
};

export default Index;
