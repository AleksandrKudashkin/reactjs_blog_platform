import * as types from 'constants/actionTypes/PostActionTypes';

const addPostLike = (id) => ({
  type: types.ADD_POST_LIKE,
  id
});

export default addPostLike;
