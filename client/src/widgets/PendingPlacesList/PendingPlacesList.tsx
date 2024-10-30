import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";

import { getPendingPlaces } from "@/entities/place/api/placeThunks";
import { PendingPlaceItem } from "@/entities/place/ui/PendingPlaceItem";

export const PendingPlacesList: React.FC = () => {
  const dispatch = useAppDispatch();
  // const {user} = useAppSelector((state) => state.user);
  const { pendingPlaces } = useAppSelector((state) => state.place);

  useEffect(() => {
    dispatch(getPendingPlaces())
  }, [dispatch]);
  
 
  return (
    <>
      <p
        style={{
          marginTop: "20px",
        }}
      >
        Заявки
      </p>
      <div
      style={{
        marginTop: "10px",
        padding: "20px",
       
        background: "grey",
       display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: '20px'
      }}
    >
        {pendingPlaces

          .map((p) => (

            <PendingPlaceItem key={p.id} place={p} />
          ))}
      </div>
    </>
  );
};
