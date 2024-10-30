import React from "react";
import { useAppSelector } from "@/shared/hooks/reduxHooks";

import { MyPlaceItem } from "@/entities/place/ui/MyPlaceItem";
import CarouselShared from "@/shared/CarouselShared/CarouselShared";
import { isMobile } from "react-device-detect";

import CarouselSharedMobile from "@/shared/CarouselSharedMobileLK/CarouselSharedMobile";

export const MyPlacesList: React.FC = () => {
  const { places } = useAppSelector((state) => state.place);
  const { user } = useAppSelector((state) => state.user);

  const renderContent = () => {
    if (isMobile) {
      console.log(123456);
      return (
        <div style={{ marginTop: "20px" }}>
          <h1>Мои места:</h1>
          <div style={{ marginTop: "20px" }}>
            <CarouselSharedMobile>
              {places
                .filter((p) => p.status === "approved")
                .filter((p) => p.userId === user?.id)
                .map((p) => (
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
        <div style={{ display: "flex", justifyContent: "center" }}>
  <CarouselShared>
    {places
      .filter((p) => p.userId === user?.id)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .map((p) => (
        <MyPlaceItem key={p.id} place={p} />
      ))}
  </CarouselShared>
</div>
      </>
    );
  };

  if (!places || places.length === 0) {
    return <p>Загрузка...</p>;
  }

  return <>{renderContent()}</>;
};
