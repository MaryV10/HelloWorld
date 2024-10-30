import React from "react";
import styles from "./PendingPlaceItem.module.css";

import { Place } from "../../model";
import { useAppDispatch} from "@/shared/hooks/reduxHooks";
import { approvePlace,  rejectPlace } from "../../api/placeThunks";

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
    <div style={{display: 'flex',  flexDirection: 'column', justifyContent:'flex-start',width: '400px', background: 'white', padding: '10px', gap: '10px', borderRadius: '15px'}}>
         <div>
      <h2 className={styles.title}>{place.title}</h2>
      <p className={styles.description}>{place.description}</p>
      {place.Photos.map((photo, index) => (
        <img
          style={{ height: "20vh", margin: "10px" , objectFit: "cover", borderRadius: "15px"}}
          key={index}
          src={photo.imageUrl}
          alt={`Photo ${index + 1}`}
        />
      ))}
      </div>  
      <div>
      <button  onClick={() => handleReject()}>Отклонить</button>
      <button onClick={() => handleApprove()}>Одобрить</button>
      </div>
    </div>
  );
};
