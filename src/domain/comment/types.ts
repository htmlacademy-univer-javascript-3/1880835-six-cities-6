import { User } from '../user';

export interface Comment {
  text: string;
  rating: number;
}

export interface PostedComment extends Comment {
  id: number;
  date: string;
  user: User;
  postDate: string;
}
