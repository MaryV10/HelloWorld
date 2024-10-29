import React from "react";
import styles from "./MyPlaceItem.module.css";
import { Steps } from "antd"; 
import Lottie from 'lottie-react';
import animationData from '@/assets/Animation - 1730132037572.json'
import { CloseOutlined} from '@ant-design/icons';



import { Place } from "../../model";
import { Link } from "react-router-dom";


type Props = {
  place: Place;
};

export const MyPlaceItem: React.FC<Props> = ({
  place,

}) => {

  const steps = [
    {
      title: 'На модерации',
      status: place.status === 'pending' ? 'process' : 'finish',
      icon: place.status === 'pending' ?  <Lottie 
      animationData={animationData} 
      loop 
      style={{ width: '100%', height: '100%', overflow: 'hidden'}} 
    /> : null,
      className: place.status === 'approved' || place.status === 'rejected' ? styles.gray : '',
    },
    {
      title: place.status === 'pending' ? 'Создано' : (place.status === 'approved' ? 'Создано' : 'Отклонено'),
      status: place.status === 'approved' ? 'finish' : (place.status === 'rejected' ? 'finish' : 'wait'),
      icon: place.status === 'rejected' ? <CloseOutlined style={{ color: 'red' }} /> : null,
    },
  ];
  

  return (
    <div className={styles.myPlaceItem}>
      
      <>
      <Steps items={steps} className={styles.customStep}/>
        <Link to={`/OnePlacePage/${place.id}`}>
          <h2 className={styles.title}>{place.title}</h2>
        </Link>
          <p className={styles.description}>{place.description}</p>
          <p>{place.status}</p>
          <p>{place.userId}</p>
          
    <img style={{height: '20vh', margin: '10px', borderRadius: '10px'}} src={place.Photos[0].imageUrl} alt='1' />  

      </>
      </div>

  );
}

