export type Feedback = {
  id: number;
  userId: number;
  placeId: number;
  score: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
};

export type FeedbackList = Feedback[];
