import { getUserMock } from '../../user/mocks/get-user-mock';
import { PostedComment } from '../types';

export function getPostedCommentsMock(): PostedComment[] {
  return [
    {
      id: 0,
      date: '12-11-2025',
      user: getUserMock(),
      comment: 'test comment',
      rating: 4,
    },
    {
      id: 1,
      date: '15-11-2025',
      user: getUserMock(),
      comment: 'test comment 1',
      rating: 3,
    },
  ];
}
