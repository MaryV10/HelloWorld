import React, { useEffect} from "react";


import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";

import { getApprovedPlaces } from "@/entities/place/api/placeThunks";

export const MyPlacesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { places } = useAppSelector((state) => state.place);

  useEffect(() => {
    dispatch(getApprovedPlaces());
  }, [dispatch]);
  

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
        <div key={p.id}>{p.title}</div>
      ))}
 
    </div>
  );
};

