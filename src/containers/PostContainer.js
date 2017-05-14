import Post from 'components/views/PostPage';
import { connect } from 'react-redux';
import { addPostLike } from 'actions/Post';

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
