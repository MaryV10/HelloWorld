import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { getApprovedPlaces } from "@/entities/place/api/placeThunks";
import { MyFeedbackItem } from "@/entities/place/ui/MyFeedbackItem";
import CarouselShared from "@/shared/CarouselShared/CarouselShared";
import {isMobile} from 'react-device-detect';
import CarouselSharedMobile from "@/shared/CarouselSharedMobileLK/CarouselSharedMobile";

export const MyFeedbackList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { approvedPlaces } = useAppSelector((state) => state.place);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getApprovedPlaces());
  }, [dispatch]);

  const userFeedbacks = approvedPlaces.flatMap(place =>
    place.Feedbacks.filter(feedback => feedback.userId === user?.id)
      .map(feedback => ({ feedback, place })) 
  );


  const renderContent = () => {
    if (isMobile) {
      return <div style={{ marginTop: "20px"}}>
        <h1 style={{ marginTop: "20px" }}>Мои отзывы:</h1>
        <div style={{ marginTop: "20px" }}>
        <CarouselSharedMobile>
        {userFeedbacks.map(({ feedback, place }) => ( 
              <MyFeedbackItem key={feedback.id} feedback={feedback} place={place}  isPlaceEnabled/>
            ))}
      </CarouselSharedMobile>
      </div>
      </div>
    }
    return (
      <>
        <p style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid white", display: "flex", flexDirection: "column", alignItems: "center" }}>Мои отзывы</p>
        <div style={{ marginTop: "10px", padding: "20px", height: "auto", background: "none" }}>
          <CarouselShared>
            {userFeedbacks.map(({ feedback, place }) => ( 
              <MyFeedbackItem key={feedback.id} feedback={feedback} place={place} isPlaceEnabled/>
            ))}
          </CarouselShared>
        </div>
      </>
    );
  };



  return (
    <>
   {renderContent()}
    </>
  );
};
