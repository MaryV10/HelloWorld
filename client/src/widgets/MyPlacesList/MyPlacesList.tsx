import React, { useEffect} from "react";


import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";

import { getApprovedPlaces } from "@/entities/place/api/placeThunks";
import { Link } from "react-router-dom";


export const MyPlacesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { places } = useAppSelector((state) => state.place);
  
    useEffect(() => {
    dispatch(getApprovedPlaces());
  }, [dispatch]);
  
// console.log(places);
  return (
    <div
      style={{
        marginTop: "100px",
        padding: "20px",
        height: "30vh",
        background: "blue",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {places.map((p) => (
        <div key={p.id}>
          <Link to={`/profile/${p.id}`}>
          {p.title}
          </Link>
          {p.description}</div>
      ))}
 
    </div>
  );
};

