import BlogList from 'components/widgets/blog/List';
import { connect } from 'react-redux';
import { addPostLike } from 'actions/Posts';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const mapDispatchToProps = (dispatch) => ({
  addLike: (id) => {
    dispatch(addPostLike(id));
  }
});

export default connect(stateToProps, mapDispatchToProps)(BlogList);
