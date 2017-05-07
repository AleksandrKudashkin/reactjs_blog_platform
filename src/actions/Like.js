import * as types from 'constants/actionTypes/PostsActionTypes';

const addLike = (id) => ({
  type: types.ADD_LIKE_SUCCESS,
  id
});

export default addLike;
