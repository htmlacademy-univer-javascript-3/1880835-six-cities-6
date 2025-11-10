import { PostedComment } from '../../../../domain/comment';
import { ThunkQuery } from '../../thunk';

export interface CommentsSliceState {
  offerComments: Record<string, ThunkQuery<PostedComment[]> | undefined>;
}

export function getEmptyState(): CommentsSliceState {
  return {
    offerComments: {},
  };
}
