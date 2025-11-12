import { store } from '../../../config/redux';
import { Comment } from '..';
import { postCommentThunk } from '../../../config/redux/slice/comments/action';

export function postComment(body: { offerId: string; comment: Comment }) {
  store.dispatch(postCommentThunk(body));
}
