import React from "react";
import styles from "./MyPlaceItem.module.css";
import { Steps } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Place } from "../../model";
import { Link } from "react-router-dom";
import Loader from "@/shared/Loader/Loader";

type Props = {
  place: Place;
};

export const MyPlaceItem: React.FC<Props> = ({ place }) => {

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  const steps = [];

  if (place.status === "pending") {
    steps.push({
      title: <span >На модерации</span>,
      status: "process",
      icon: <Loader />,
    });
  } else if (place.status === "approved") {
    steps.push({
      title: <span >Опубликовано</span>,
      status: "finish",
    });
  } else if (place.status === "rejected") {
    steps.push({
      title: <span >Отклонено</span>,
      status: "finish",
      icon: <CloseOutlined style={{ color: "red" }} />,
    });
  }

  
  return (
    <div className={styles.myPlaceItem}>
      <>
        <>
          {/* @ts-ignore */}
          <Steps items={steps} className={styles.customStep} style={{ marginBottom: "20px" }} />
          {place?.status === "approved" ? (
            <Link to={`/OnePlacePage/${place.id}`}>
              <h2 className={styles.title}>{place.title}</h2>
            </Link>
          ) : (
            <h2 className={styles.title}>{place.title}</h2>
          )}
          <p className={styles.description}><h1 >Описание:</h1>  {truncateText(place.description, 100)}</p>
          <div style={{  display:'flex', flexWrap:'wrap', overflow: 'hidden', whiteSpace: 'nowrap'  }}>
          {place.tags.map((tag) => (  
      <span key={tag.id} style={{ backgroundColor: tag.color, color: '#ffffff', padding: '2px 5px', borderRadius: '3px', marginRight: '5px' }}>  
      #{tag.title}  
    </span>   
  ))}   
  </div>
 

        </>
        <img
          style={{
            height: "20vh",
            margin: "10px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
          // src={place.Photos[0]?.imageUrl}
          src={`${window.location.origin}/images/${place.Photos[0]?.imageUrl}`}
          
         
          alt="1"
        />
      </>
    </div>
  );
};
