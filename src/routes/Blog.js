import MainLayout from 'components/layouts/MainLayout';
import AboutPage from 'components/AboutPage';
import { postsPath } from 'helpers/routes/posts';
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import PostContainer from 'containers/PostContainer';
import PostsContainer from 'containers/PostsContainer';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const AboutRoute = {
  path: '/about',
  component: AboutPage
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute
  ]
};
