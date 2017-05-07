import Post from 'components/PostPage';
import { connect } from 'react-redux';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

// const mapDispatchToProps = (dispatch) => ({
//   addLike: (id) => {
//     dispatch(addLike(id));
//   }
// });

export default connect(stateToProps)(Post);
