import { GETARTICLES, GETFRIENDS } from "./Constants";
import article from '../Data/article';
import friends from '../Data/friends';

export const getArticleData = () => {
  return ({
    type: GETARTICLES,
    payload: article,
  });
};

export const getFriendsData = () => {
  return ({
    type: GETFRIENDS,
    payload: friends,
  });
};