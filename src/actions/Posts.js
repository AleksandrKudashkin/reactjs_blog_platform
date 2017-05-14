import * as types from 'constants/actionTypes/PostsActionTypes';
import { API_CALL } from 'middleware/API';

export function fetchPosts() {
  return {
    [API_CALL]: {
      endpoint: '/posts',
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}

export const addPostLike = (id) => ({
  [API_CALL]: {
    endpoint: `/posts/${id}/like`,
    method: 'PATCH',
    query: {},
    types: [
      types.ADD_POSTS_LIKE_REQUEST,
      types.ADD_POSTS_LIKE_SUCCESS,
      types.ADD_POSTS_LIKE_ERROR
    ]
  }
});
