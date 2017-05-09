import BlogList from 'components/widgets/blog/List';
import { connect } from 'react-redux';
import addPostsLike from 'actions/PostsLike';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const mapDispatchToProps = (dispatch) => ({
  addLike: (id) => {
    dispatch(addPostsLike(id));
  }
});

export default connect(stateToProps, mapDispatchToProps)(BlogList);
