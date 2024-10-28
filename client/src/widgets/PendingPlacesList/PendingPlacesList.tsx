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
  // console.log(state.place, "pending places");
 
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
          height: "auto",
          background: "grey",
          display: "flex",
          justifyContent: "space-between",
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
