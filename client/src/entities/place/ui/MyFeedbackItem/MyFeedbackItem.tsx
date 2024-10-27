import React from "react";


import { Place } from "../../model";
import { Feedback } from "@/entities/feedback";

interface MyFeedbackItemProps {

  place: Place;
  feedback: Feedback;
}

// Используем интерфейс в компоненте
export const MyFeedbackItem: React.FC<MyFeedbackItemProps> = ({
  place,
  feedback,
}) => {
  return (
    <div>
      <p>feedback.userId: {feedback.userId}</p>
      <p>Название: {place.title}</p>
      <p>Описание: {place.description}</p>
      <p>place.userId: {place.userId}</p>
      <p>Моя оценка: {feedback.score}</p>
      <p>Мой коммент: {feedback.comment}</p>
    </div>
  );
};
