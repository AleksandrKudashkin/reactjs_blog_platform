import BlogPage from 'components/BlogPage';
import MainLayout from 'components/layouts/MainLayout';
import Post from 'components/PostPage';
import AboutPage from 'components/AboutPage';
import { postsPath } from 'helpers/routes/posts';

const Index = {
  path: '/',
  component: BlogPage
};

const AboutRoute = {
  path: '/about',
  component: AboutPage
}

const PostRoute = {
  path: postsPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute
  ]
};
