import React, { useEffect} from "react";


import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";

import { getApprovedPlaces} from "@/entities/place/api/placeThunks";
import { MyPlaceItem } from "@/entities/place/ui/MyPlaceItem";


export const MyPlacesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { places } = useAppSelector((state) => state.place);

  useEffect(() => {
    dispatch(getApprovedPlaces());
  }, [dispatch]); 
  
  // const handlePlaceDelete = (id: number) => {
  //   dispatch(removePlace({id}));
  // };

  // const handlePlaceUpdate = (updatedPlace: PlaceWithoutStatusTagsPhotosFeedbacks) => {
  //   dispatch(updatePlace(updatedPlace));
  // };
// console.log(places);
  return (
    <>
    <p    style={{
        marginTop: "20px",

      }}>Мои места</p>
    <div
      style={{
        marginTop: "10px",
        padding: "20px",
        height: "60vh",
        background: "blue",
        display: "flex",
        justifyContent: "space-between",
      }}
    >

{places.map((p) => (
  
  // <MyPlaceItem key={p.id} place={p}  onPlaceDelete={handlePlaceDelete}
  // onPlaceUpdate={handlePlaceUpdate}/>

  <MyPlaceItem key={p.id} place={p}  />

       
      ))}
 
    </div>
    </>
  );
};

