import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
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
      types.ADD_POST_LIKE_REQUEST,
      types.ADD_POST_LIKE_SUCCESS,
      types.ADD_POST_LIKE_ERROR
    ]
  }
});
