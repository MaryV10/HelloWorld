import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./OnePlaceItem.module.css";
import {
  getApprovedPlaces,
  removePlace,
  updatePlace,
} from "@/entities/place/api/placeThunks";
import { addFeedback } from "@/entities/feedback/api/feedbackThunks";
import { MyFeedbackItem } from "@/entities/place/ui/MyFeedbackItem";

import { ROUTES } from "@/app/router/routes";

import BasicRating from "@/shared/Rating/Rating";

export const OnePlaceItem: React.FC = () => {
  const { approvedPlaces } = useAppSelector((state) => state.place);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [score, setScore] = useState(0);

  const [comment, setComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const onePlace = approvedPlaces.find((place) => place.id === Number(id));
  const [title, setTitle] = useState(onePlace?.title);
  const [description, setDescription] = useState(onePlace?.description);
  const [longitude, setLongitude] = useState(onePlace?.longitude);
  const [width, setWidth] = useState(onePlace?.width);
  const navigate = useNavigate();

  // ======================================== CHANGE PLACE =====================================
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    dispatch(getApprovedPlaces());
  }, [dispatch]);

  const handlerUpdatePlace = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user?.id && onePlace) {
      await dispatch(
        updatePlace({
          id: onePlace.id,
          title: title!,
          description: description!,
          longitude: longitude!,
          width: width!,
        })
      );
      setIsEditing(false);
      await dispatch(getApprovedPlaces());
    }
  };

  const handlerDeletePlace = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user?.id && onePlace) {
      await dispatch(
        removePlace({
          id: onePlace.id,
        })
      );
      setIsEditing(false);
    }

    navigate(ROUTES.PROFILE);
  };

  useEffect(() => {
    if (isEditing) {
      setTitle(onePlace?.title);
      setDescription(onePlace?.description);
      setLongitude(onePlace?.longitude);
      setWidth(onePlace?.width);
    }
  }, [isEditing, onePlace]);
  // ========================================  TOTAL SCORE FUNC =================================

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
  // ======================================== ADD FEEDBACK =====================================

  const handlerAddFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (user?.id) {
      dispatch(addFeedback({ score, comment, placeId: onePlace!.id }));
    }
    setScore(0);
    setComment("");
  };

  // ========================================RETURN=====================================

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        height: "50vh",
      }}
    >
      {/* =======================================PLACE CHANGING======================== */}

      <div style={{ backgroundColor: "green", margin: "15px 15px" }}>
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
          <p>Описание: {onePlace?.description}</p>
        </div>
        {isEditing ? (
          <>
            <label>
              Изменить название места:
              <input
                name="comment"
                value={title}
                style={{ backgroundColor: "pink", margin: "15px 15px" }}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Изменить описание:
              <input
                name="comment"
                value={description}
                style={{ backgroundColor: "pink", margin: "15px 15px" }}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              Изменить ширину:
              <input
                type="number"
                name="comment"
                value={longitude}
                style={{ backgroundColor: "pink", margin: "15px 15px" }}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </label>
            <label>
              Изменить долготу:
              <input
                type="number"
                name="comment"
                value={width}
                style={{ backgroundColor: "pink", margin: "15px 15px" }}
                onChange={(e) => setWidth(e.target.value)}
              />
            </label>
            {user?.id && (
              <>
                {" "}
                <button
                  style={{ backgroundColor: "green", padding: "10px" }}
                  onClick={handlerUpdatePlace}
                >
                  Сохранить
                </button>
                <button
                  style={{ backgroundColor: "red", padding: "10px" }}
                  onClick={handlerDeletePlace}
                >
                  Удалить
                </button>
                <button
                  style={{ backgroundColor: "gray", padding: "10px" }}
                  onClick={handleCancel}
                >
                  Отменить
                </button>
              </>
            )}
          </>
        ) : (
          <>
            {user?.id && (
              <button
                style={{ backgroundColor: "grey", padding: "10px" }}
                onClick={handleEdit}
              >
                РедактироватьМЕСТО
              </button>
            )}
          </>
        )}
      </div>

      {/* ================================   COMMENTS Creates and CHANGE ================================================== */}
      <div style={{ backgroundColor: "green", margin: "15px 15px" }}>
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
          <BasicRating value={totalScore()} />
          Ваша оценка:
          <input
            type="number"
            name="score"
            min="0"
            max="5"
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
