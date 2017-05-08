import * as types from 'constants/actionTypes/PostsActionTypes';

const addPostsLike = (id) => ({
  type: types.ADD_POSTS_LIKE,
  id
});

export default addPostsLike;
