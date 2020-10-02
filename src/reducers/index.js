import { combineReducers } from 'redux'
import postsReducer from './postsReducerpost'
export default combineReducers({
  post: postsReducer,
})
