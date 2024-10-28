import React, { useState, useEffect } from "react";  

import { Place } from "../../model";  
import { Feedback } from "@/entities/feedback";  
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";  
import { updateFeedback } from "@/entities/feedback/api/feedbackThunks";  

interface MyFeedbackItemProps {  
  place: Place;  
  feedback: Feedback;  
}  

// Используем интерфейс в компоненте  
export const MyFeedbackItem: React.FC<MyFeedbackItemProps> = ({  
  place,  
  feedback,  
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

  const handlerUpdateFeedback = (e: React.FormEvent) => {  
    e.preventDefault();  
    if (user?.id) {  
      dispatch(updateFeedback({ id: feedback.id, comment, score, placeId: place.id }));  
      setIsEditing(false);
    }  
  };  

  return (  
    <div>  
      <p>feedback.id: {feedback.id}</p>  
      <div>  
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
          <button style={{ backgroundColor: 'red', padding: "10px" }} onClick={handleCancel}>Отменить</button>
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