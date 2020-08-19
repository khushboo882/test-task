import { combineReducers } from 'redux';
import ArticleReducer from './articles'
import FriendsReducer from './friends'

export default combineReducers({ article: ArticleReducer, friends: FriendsReducer})
