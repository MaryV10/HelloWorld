import React, { useEffect } from "react";
import styles from "./PendingPlaceItem.module.css";

import { Place } from "../../model";
import { useAppDispatch} from "@/shared/hooks/reduxHooks";
import { approvePlace, getPendingPlaces, rejectPlace } from "../../api/placeThunks";

// import { Place, PlaceWithoutStatusTagsPhotosFeedbacks } from "../../model";

type Props = {
  place: Place;
  // onPlaceReject: (rejectedPlace: PlaceWithoutStatusTagsPhotosFeedbacks) => void;
  // onPlaceApprove: (approvedPlace: PlaceWithoutStatusTagsPhotosFeedbacks) => void;
};

export const PendingPlaceItem: React.FC<Props> = ({
  place,

}) => {
  const dispatch = useAppDispatch();

  const handleReject =  () => {  
    dispatch(rejectPlace({ id: place.id }));  

  };  
  
  const handleApprove =  () => {
   dispatch(approvePlace({ id: place.id }))

};

  return (
    <div>
           
      <h2 className={styles.title}>{place.title}</h2>
      <p className={styles.description}>{place.description}</p>
      <p>{place.status}</p>
      <p>{place.userId}</p>
      {place.Photos.map((photo, index) => (
        <img
          style={{ height: "20vh", margin: "10px" }}
          key={index}
          src={photo.imageUrl}
          alt={`Photo ${index + 1}`}
        />
      ))}
      <button onClick={() => handleReject()}>Reject</button>
      <button onClick={() => handleApprove()}>Approve</button>
    </div>
  );
};
