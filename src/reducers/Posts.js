import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostsActionTypes';
import { postsPath } from 'helpers/routes/posts.js';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, {
        entries:
          action.response.posts.map((post) => {
            post.meta.url = postsPath(post.id);
            return post;
          })
      });
    case types.ADD_POSTS_LIKE_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.ADD_POSTS_LIKE_ERROR:
      return assign({}, state, { error: true });
    case types.ADD_POSTS_LIKE_SUCCESS:
      return assign({}, state, {
        entries:
          state.entries.map((post) => {
            if (post.id == action.response.post.id) {
              return action.response.post;
            } else {
              return post;
            }
          })
      });
    case types.SEARCH_POSTS_LIKE_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.SEARCH_POSTS_LIKE_ERROR:
      return assign({}, state, { error: true });
    case types.SEARCH_POSTS_LIKE_SUCCESS:
      return assign({}, state, {
        entries: action.response.posts.map((post) => {
          post.meta.url = postsPath(post.id);
          return post;
        })
      });
    default:
      return state;
  }
}
