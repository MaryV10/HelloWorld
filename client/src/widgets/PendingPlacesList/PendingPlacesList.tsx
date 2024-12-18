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
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center'}}>
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
       justifyContent: 'center',
        background: "grey",
       display: "flex",

        flexWrap: "wrap",
        gap: '20px'
      }}
    >
        {pendingPlaces

          .map((p) => (

            <PendingPlaceItem key={p.id} place={p} />
          ))}
      </div>
      </div>
    </>
  );
};
