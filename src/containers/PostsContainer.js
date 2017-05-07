import BlogList from 'components/widgets/blog/List';
import { connect } from 'react-redux';
import addLike from 'actions/Like';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const mapDispatchToProps = (dispatch) => ({
  addLike: (id) => {
    dispatch(addLike(id));
  }
});

export default connect(stateToProps, mapDispatchToProps)(BlogList);
