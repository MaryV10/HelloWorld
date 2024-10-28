import React from "react";

import {  useAppSelector } from "@/shared/hooks/reduxHooks";


import { MyPlaceItem } from "@/entities/place/ui/MyPlaceItem";


export const MyPlacesList: React.FC = () => {

  const { places } = useAppSelector((state) => state.place);
  const {user} = useAppSelector((state) => state.user);



  return (
    <>
    <p    style={{
        marginTop: "20px",

      }}>Мои места</p>
    <div
      style={{
        marginTop: "10px",
        padding: "20px",
        height: "auto",
        background: "blue",
        display: "flex",
        justifyContent: "space-between",
      }}
    >

{places && places
// .filter(p => p.status === 'approved')
.filter(p => p.userId === user?.id)
.map((p) => (
  
  // <MyPlaceItem key={p.id} place={p}  onPlaceDelete={handlePlaceDelete}
  // onPlaceUpdate={handlePlaceUpdate}/>

  <MyPlaceItem key={p.id} place={p}  />
      

      ))}
 
    </div>
    </>
  );
};

