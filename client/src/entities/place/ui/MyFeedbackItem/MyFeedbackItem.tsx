import React, { useState, useEffect } from "react";  

import { Place } from "../../model";  
import { Feedback } from "@/entities/feedback";  
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";  
import { removeFeedback, updateFeedback } from "@/entities/feedback/api/feedbackThunks";  
import { getApprovedPlaces } from "../../api/placeThunks";


interface MyFeedbackItemProps {  
  place?: Place; 
  feedback: Feedback; 
  isPlaceEnabled?: boolean; 
}  

// Используем интерфейс в компоненте  
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
      setIsEditing(false);
      await dispatch(getApprovedPlaces()); 
    }  
  };  

  const handlerDeleteFeedback = async (e: React.FormEvent) => {  
    e.preventDefault();  
    if (user?.id) {  
      await dispatch(removeFeedback({ id: feedback.id}));  
      setIsEditing(false);
      await dispatch(getApprovedPlaces()); 
    }  
  };

  return (  
    <div>  
      <div>  
      {isPlaceEnabled && (
        <>
          <p>Название: {place?.title}</p>
          <p>Описание: {place?.description}</p>
        </>
      )}
        <div>Комментарий:</div>  
        <div>{feedback.comment}</div>  
      </div>  
      <div>Оценка: {feedback.score}</div>  

      {isEditing ? (  
        <>  
          <label>  
            Ваш отзыв:  
            <input  
              type="text"  
              name="comment"  
              value={comment}  
              style={{ backgroundColor: "white" }}  
              onChange={(e) => setComment(e.target.value)}  
            />  
          </label>  
          <label>  
            Ваша оценка:  
            <input  
              type="number"  
              name="score"  
              value={score}  
              style={{ backgroundColor: "white" }}  
              onChange={(e) => setScore(Number(e.target.value))}  
            />  
          </label>  
           {user?.id===feedback.userId&&(
            <> <button style={{ backgroundColor: 'green', padding: "10px" }} onClick={handlerUpdateFeedback}>Сохранить</button>  
            <button style={{ backgroundColor: 'red', padding: "10px" }} onClick={handlerDeleteFeedback}>Удалить</button>
          <button style={{ backgroundColor: 'gray', padding: "10px" }} onClick={handleCancel}>Отменить</button>
          </>  )}
       
        </>  
      ) : (  
        <>  
         {user?.id===feedback.userId&&( <button style={{ backgroundColor: 'grey', padding: "10px" }} onClick={handleEdit}>Редактировать</button> )} 
        </>  
      )}  
    </div>  
  );  
}; 

