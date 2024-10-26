import { useAppSelector } from '@/shared/hooks/reduxHooks';
import React from 'react'
import { useParams } from 'react-router-dom'

export const OnePlaceItem: React.FC = () => {

  const { places } = useAppSelector((state) => state.place);
  const {id} = useParams();
  
  const onePlace = places.find((place) => place.id === Number(id));

   return (
    <div style={{ marginTop: '20px', padding: '10px', height: '20vh', background:'yellow' }}>OnePlaceItem
      <p>Имя места: {onePlace?.title}</p>
      <p>Description: {onePlace?.description}</p>
          </div>
  )
}

