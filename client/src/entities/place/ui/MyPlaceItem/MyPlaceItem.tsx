import React from "react";
import styles from "./MyPlaceItem.module.css";
import { Steps } from "antd"; 


import { useAppDispatch } from "@/shared/hooks/reduxHooks";

import { removePhoto } from "@/entities/photo/api/photoThunks";

import { Place } from "../../model";
import { Link } from "react-router-dom";


// import { Place, PlaceWithoutStatusTagsPhotosFeedbacks } from "../../model";

type Props = {
  place: Place;
  // onPlaceDelete: (id: number) => void;
  // onPlaceUpdate: (updatedPlace: PlaceWithoutStatusTagsPhotosFeedbacks) => void;
};

export const MyPlaceItem: React.FC<Props> = ({
  place,
  // onPlaceDelete,
  // onPlaceUpdate,
}) => {
  const dispatch = useAppDispatch();
  // const [isEditing, setIsEditing] = useState(false);
  // const [title, setTitle] = useState(place.title);
  // const [description, setDescription] = useState(place.description);
  // const [width, setWidth] = useState(place.width);
  // const [longitude, setLongitude] = useState(place.longitude);

  // const handleEdit = () => {
  //   setIsEditing(true);
  // };

  const onDeleteHandeler = () => {
    dispatch(removePhoto({ id: place.Photos[0].id}));
  };

  // const handleCancel = () => {
  //   setIsEditing(false);
  //   setTitle(place.title);
  //   setDescription(place.description);
  // };

  // const handleSave = async () => {
  //   try {
  //     onPlaceUpdate({ id: place.id, title, description, width, longitude, userId: place.userId });
  //     setIsEditing(false);
  //   } catch (error) {
  //     console.error("Error updating place:", error);
  //   }
  // };

  const steps = [
    {
      title: 'На модерации',
      status: place.status === 'pending' ? 'finish' : 'wait',
    },
    {
      title: place.status === 'approved' ? 'Создано' : 'Отклонено',
      status: place.status === 'approved' ? 'finish' : (place.status === 'rejected' ? 'finish' : 'wait'),
      
    },
  ];

  return (
    <div className={styles.myPlaceItem}>
      
      <>
        <Link to={`/profile/${place.id}`}>
          <h2 className={styles.title}>{place.title}</h2>
        </Link>
          <p className={styles.description}>{place.description}</p>
          <p>{place.status}</p>
          <p>{place.userId}</p>
          {place.Photos.map((photo, index) => (  
    <img style={{height: '20vh', margin: '10px'}}key={index} src={photo.imageUrl} alt={`Photo ${index + 1}`} />  
  ))}  
          {/* <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onPlaceDelete(place.id)}>Delete</button> */}
      </>
      </div>
    // </div>
  );
}


      <Steps items={steps} className={styles.customStep}/>
{/* {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className={styles.input}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            className={styles.input}
          />
          <input
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Width"
            className={styles.input}
          />
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Longitude"
            className={styles.input}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : ( */}