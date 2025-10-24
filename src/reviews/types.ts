export interface User {
  name: string;
  avatar: string;
}

export interface Feedback {
  text: string;
  rating: number;
}

export interface Review extends Feedback {
  id: number;
  user: User;
  postDate: string;
}
