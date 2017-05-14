import BlogList from 'components/widgets/blog/List';
import React, { DOM } from 'react';
import Meta from 'components/elements/Meta';

const Index = ({ posts, addLike, startSearch }) => (
  DOM.div(null,
    React.createElement(BlogList, {
      posts,
      addLike,
      startSearch
    }),
    React.createElement(Meta, { title: 'Posts list' })
  )
);

Index.propTypes = {
  posts: BlogList.propTypes.posts,
  addLike: BlogList.propTypes.addLike,
  startSearch: BlogList.propTypes.startSearch
};

export default Index;
