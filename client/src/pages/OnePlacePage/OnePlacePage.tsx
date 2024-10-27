import { OnePlaceItem } from "@/widgets/OnePlaceItem";
import React from "react";

export const OnePlacePage: React.FC = () => {
  return (
    <>
      <div
        style={{
          marginTop: "100px",
          padding: "10px",
          height: "100vh",
          background: "gray",
        }}
      >
        OnePlacePage
        <OnePlaceItem />
      </div>
    </>
  );
};
