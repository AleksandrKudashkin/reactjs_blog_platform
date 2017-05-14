import { assign } from 'lodash/object';
import { clone } from 'lodash/lang';
import * as types from 'constants/actionTypes/PostActionTypes';

const initialState =  {
  isFetching: false,
  error: false,
  entry: null
};

function addLikeToClone(object, id) {
  const newObj = clone(object);
  if (newObj.id == id)
    newObj.meta.likes += 1;
  return newObj;
}

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
    case types.ADD_POST_LIKE:
      return assign({}, state, {
        entry: addLikeToClone(state.entry, action.id)
      });
    default:
      return state;
  }
}
