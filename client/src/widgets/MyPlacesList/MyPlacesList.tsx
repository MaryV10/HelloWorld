
import React, { useEffect } from "react";
import {  useAppSelector } from "@/shared/hooks/reduxHooks";



import { getMyPlaces } from "@/entities/place/api/placeThunks";

import { MyPlaceItem } from "@/entities/place/ui/MyPlaceItem";
import CarouselShared from "@/shared/CarouselShared/CarouselShared";
import { isMobile } from "react-device-detect";
import CarouselSharedMobile from "@/shared/CarouselSharedMobileLK/CarouselSharedMobile";

export const MyPlacesList: React.FC = () => {

  const { places } = useAppSelector((state) => state.place);

  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user?.id) {
      dispatch(getMyPlaces());
    }
  }, [dispatch, user?.id]);

  const renderContent = () => {
    if (isMobile) {
      return (
        <div style={{marginTop: '20px'}}>
          <h1  >Мои места:</h1>
          <div  style={{marginTop: '20px'}}>
        <CarouselSharedMobile >
          {places
            // .filter(p => p.status === 'approved')
            .filter((p) => p.userId === user?.id)
            .map((p) => (
              // <MyPlaceItem key={p.id} place={p}  onPlaceDelete={handlePlaceDelete}
              // onPlaceUpdate={handlePlaceUpdate}/>


              <MyPlaceItem key={p.id} place={p} />
            ))}
        </CarouselSharedMobile>
        </div>
        </div>
      );
    }
    return (
      <>


      
        <p
          style={{
            marginTop: "20px",
          }}
        >
          Мои места
        </p>
<div style={{display: 'flex', justifyContent: 'center'}}>
        <CarouselShared>
          {places
            // .filter(p => p.status === 'approved')
            .filter((p) => p.userId === user?.id)
            .map((p) => (
              // <MyPlaceItem key={p.id} place={p}  onPlaceDelete={handlePlaceDelete}
              // onPlaceUpdate={handlePlaceUpdate}/>

              <MyPlaceItem key={p.id} place={p} />
            ))}
        </CarouselShared>
        </div>
      </>
    );
  };

  console.log(user, "oooooooooooo");
  return <>{renderContent()}</>;
};
