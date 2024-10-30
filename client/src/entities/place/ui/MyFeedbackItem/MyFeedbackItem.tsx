import React, { useState, useEffect } from "react";
import editIcon from "@/assets/free-icon-edit-992664.png";
import deleteIcon from "@/assets/free-icon-delete-7104075.png";
import { Place } from "../../model";
import { Feedback } from "@/entities/feedback";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { removeFeedback, updateFeedback } from "@/entities/feedback/api/feedbackThunks";
import { getApprovedPlaces } from "../../api/placeThunks";
import { Link } from "react-router-dom";
import styles from "./MyFeedbackItem.module.css"; 
import { Modal } from "antd";

interface MyFeedbackItemProps {
  place?: Place;
  feedback: Feedback;
  isPlaceEnabled?: boolean;
}

export const MyFeedbackItem: React.FC<MyFeedbackItemProps> = ({
  place,
  feedback,
  isPlaceEnabled,
}) => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [score, setScore] = useState(feedback.score);
  const [comment, setComment] = useState(feedback.comment);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setScore(feedback.score);
      setComment(feedback.comment);
    }
  }, [isEditing, feedback]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setScore(feedback.score);
    setComment(feedback.comment);
  };

  const handlerUpdateFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user?.id && place) {
      await dispatch(updateFeedback({ id: feedback.id, comment, score, placeId: place.id }));
      await dispatch(getApprovedPlaces());
      setIsEditing(false);
    }
  };

  const handlerDeleteFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user?.id) {
      await dispatch(removeFeedback({ id: feedback.id }));
      setIsEditing(false);
      await dispatch(getApprovedPlaces());
    }
  };

  return (
    <div>
      <div style={{ margin: "15px" }}>
        {isPlaceEnabled && (
          <>
            <Link to={`/OnePlacePage/${place?.id}`}>
              <h1 className={styles.title}>Название: {place?.title}</h1>
            </Link>
            <p>Описание: {place?.description}</p>
          </>
        )}
        <div>Комментарий:</div>
        <div>{feedback.comment}</div>
        <div>Оценка: {feedback.score}</div>
      </div>

      {isEditing ? (
        
        <Modal

          visible={isEditing}
          onCancel={handleCancel}
          footer={null}
        >
          
          <label style={{display: 'flex', flexDirection: 'column', fontWeight: 'bold', fontSize: '18px'}}>
            Изменить комментарий:
            <textarea
            maxLength={200}
              placeholder="Комментарий ..."
              value={comment}
              className={styles.textarea}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
          <label style={{display: 'flex', justifyContent: 'left', fontWeight: 'bold', fontSize: '18px', marginTop: '10px'}}>
            Изменить оценку:
            <input 
            style={{background: '#141213', color: 'white', border: 'none', borderRadius: '10px', padding: '5px 10px', fontSize: '18px', marginTop: '10px', marginBottom: '10px'}} 
              type="number"
              min="0"
              max="5"
              value={score}
              className={styles.input}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 0 && value <= 5) {
                  setScore(value);
                }
              }}
              onKeyDown={(e) => {
                if (!["Backspace", "Delete", "ArrowUp", "ArrowDown"].includes(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </label>
          {user?.id === feedback.userId && (
            <>
              <button className={styles.saveButton} onClick={handlerUpdateFeedback}>
                Сохранить
              </button>
              <img
            className={styles.delIcon}
            src={deleteIcon}
            alt="Редактировать отзыв"
            onClick={handlerDeleteFeedback}
          />
            </>
          )}
        
        </Modal>
      ) : (
        user?.id === feedback.userId && (
          <img
            className={styles.editIcon}
            src={editIcon}
            alt="Редактировать отзыв"
            onClick={handleEdit}
          />
        )
      )}
    </div>
  );
};
