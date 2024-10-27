import { useAppSelector } from "@/shared/hooks/reduxHooks";
import React from "react";
import { useParams } from "react-router-dom";


export const OnePlaceItem: React.FC = () => {
  const { places } = useAppSelector((state) => state.place);
  const { id } = useParams();

  const onePlace = places.find((place) => place.id === Number(id));

  const totalScore = () => {
    if(!onePlace?.Feedbacks || onePlace?.Feedbacks.length === 0) {
      return 0
    }
    else{
      const totalScore: number | undefined = onePlace?.Feedbacks.reduce((acc, feedback) => acc + feedback.score, 0);
       const averageScore: number | undefined = totalScore / onePlace?.Feedbacks.length;
       return averageScore;
    }
        
  }
 totalScore()


  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        height: "50vh",
        background: "yellow",
      }}
    >
      OnePlaceItem
      <p>Место: {onePlace?.title}</p>
      <div>
        Фото:
        {onePlace?.Photos.map((photo, index) => (
          <div key={index}>
            <img src={photo.imageUrl}></img>
          </div>
        ))}
      </div>
      <p>Description: {onePlace?.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between", background: "aqua", padding: "10px" }}>
        <p>
          Комментарий: {onePlace?.Feedbacks.map((feedback) => feedback.comment)}
        </p>
        <p>Оценка: {onePlace?.Feedbacks.map((feedback) => feedback.score)}</p>
      </div>
    </div>
  );
};
