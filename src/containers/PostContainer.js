import Post from 'components/PostPage';
import { connect } from 'react-redux';
import addPostLike from 'actions/PostLike';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

const mapDispatchToProps = (dispatch) => ({
  addLike: (id) => {
    dispatch(addPostLike(id));
  }
});

export default connect(stateToProps, mapDispatchToProps)(Post);
