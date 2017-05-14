import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostActionTypes';

const initialState =  {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState,
        { entry: action.response.post }
      );
    case types.ADD_POST_LIKE_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.ADD_POST_LIKE_ERROR:
      return assign({}, state, { error: true });
    case types.ADD_POST_LIKE_SUCCESS:
      return assign({}, state,
        { entry: action.response.post }
      );
    default:
      return state;
  }
}
