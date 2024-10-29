import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./OnePlaceItem.module.css";
import { getApprovedPlaces } from "@/entities/place/api/placeThunks";
import { addFeedback } from "@/entities/feedback/api/feedbackThunks";
import { MyFeedbackItem } from "@/entities/place/ui/MyFeedbackItem";
import BasicRating from "@/shared/Rating/Rating";



export const OnePlaceItem: React.FC = () => {
  const { approvedPlaces } = useAppSelector((state) => state.place);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [score, setScore] = useState(0);
 
  const [comment, setComment] = useState("");
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
      return averageScore.toPrecision(2);
    }
  };
  const handlerAddFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (user?.id) {
      dispatch(addFeedback({ score, comment, placeId: onePlace!.id }));
    }
    setScore(0);
    setComment("");
  };

  

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        height: "50vh",
      }}
    >
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
      <p>Описание: {onePlace?.description}</p>
      <div>
        <label>
          Ваш комментарий:
          <textarea
            placeholder="Комментарий ..."
            name="comment"
            value={comment}
            style={{ backgroundColor: "pink", margin: "15px 15px" }}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </label>
        <label>
      
        <BasicRating value={totalScore()}/>
  
          Ваша оценка:
          
          <input
            type="number"
            name="score"
            min="0"
            max="10"
            value={score}
            style={{ backgroundColor: "white" }}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0 && value <= 10) {
                setScore(value);
              }
            }}
            onKeyDown={(e) => {
              if (
                !["Backspace", "Delete", "ArrowUp", "ArrowDown"].includes(e.key)
              ) {
                e.preventDefault();
              }
            }}
          ></input>
        </label>
      </div>
      <button onClick={handlerAddFeedback}>Добавить отзыв</button>
      <div className={styles.feedbacks}>
        {onePlace?.Feedbacks.map((feedback) => (
          <div className={styles.feedbacksOneLine}>
            <MyFeedbackItem
              key={feedback.id}
              place={onePlace}
              feedback={feedback}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
