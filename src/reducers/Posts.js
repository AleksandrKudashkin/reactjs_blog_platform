import { assign } from 'lodash/object';
import { clone } from 'lodash/lang';
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
      return assign({}, initialState, { isFetching: true});
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
    case types.ADD_POSTS_LIKE:
      return assign({}, state, {
        entries:
          state.entries.map((post) => {
            if (post.id == action.id) {
              const newPost = clone(post);
              newPost.meta.likes += 1;
              return newPost;
            } else {
              return post;
            }
          })
      });
    default:
      return state;
  }
}
