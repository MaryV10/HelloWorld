import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./OnePlaceItem.module.css";
import {
  getApprovedPlaces,
} from "@/entities/place/api/placeThunks";

export const OnePlaceItem: React.FC = () => {
  const { approvedPlaces } = useAppSelector((state) => state.place);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const onePlace = approvedPlaces.find((place) => place.id === Number(id));


  if (approvedPlaces.length === 0 && user?.id) {
    dispatch(getApprovedPlaces());
  }


  const totalScore = () => {
    if (!onePlace?.Feedbacks || onePlace?.Feedbacks.length === 0) {
      return "Нет оценок";
    } else {
      const totalScore: number | undefined = onePlace?.Feedbacks.reduce(
        (acc, feedback) => acc + feedback.score,
        0
      );
      const averageScore: number | undefined =
        totalScore / onePlace?.Feedbacks.length;
      return averageScore;
    }
  };
//  ======================= CREATE FEEDBACK ===========================
  // const handlerAddFeedback = () => {
  //   if (user?.id) {
  //     dispatch(());
  //   }
  // }

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        height: "50vh",
      }}
    >
      OnePlaceItem
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Место: {onePlace?.title}</p>

        <p>Средняя оценка: {totalScore()}</p>
      </div>
      <div className={styles.photos}>
        <p>Фотографии:</p>
        {onePlace?.Photos.map((photo, index) => (
          <div style={{ width: "300px" }} key={index}>
            <img src={photo.imageUrl}></img>
          </div>
        ))}
      </div>
      <p>Description: {onePlace?.description}</p>
      <div>
        Ваш отзыв:
        <textarea style={{ backgroundColor: "white" }}></textarea>
      </div>
      <button >Добавить отзыв</button>
     
      <div className={styles.feedbacks}>
        {onePlace?.Feedbacks.map((feedback) => (
          <div className={styles.feedbacksOneLine}>
            <div>
              <div>Комментарий:</div> <div>{feedback.comment}</div>
            </div>
            <div>Оценка: {feedback.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
