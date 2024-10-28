import React, { useEffect} from "react";


import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";



import { getApprovedPlaces} from "@/entities/place/api/placeThunks";
import { MyFeedbackItem } from "@/entities/place/ui/MyFeedbackItem";



export const MyFeedbackList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { approvedPlaces } = useAppSelector((state) => state.place);
  const {user} = useAppSelector((state) => state.user);


  useEffect(() => {
    dispatch(getApprovedPlaces());
  }, [dispatch]);  
  

  return (
    <>
    <p    style={{
        marginTop: "20px",

      }}>Мои отзывы</p>
    <div
      style={{
        marginTop: "10px",
        padding: "20px",
        height: "auto",
        background: "orange",
        display: "flex",
        justifyContent: "space-between",
      }}
    >

{approvedPlaces.flatMap(place =>   
  place.Feedbacks  
    .filter(feedback => feedback.userId === user?.id)  
    .map(feedback =>(  
    <MyFeedbackItem key={feedback.id} feedback={feedback} place={place} isPlaceEnabled/>  
  ))  
)} 

    </div>
    </>
  );
};

