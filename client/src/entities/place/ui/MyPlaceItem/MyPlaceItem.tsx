import React from "react";
import styles from "./MyPlaceItem.module.css";
import { Steps } from "antd";
import { LoadingOutlined, CloseOutlined } from "@ant-design/icons";
import { Place } from "../../model";
import { Link } from "react-router-dom";

type Props = {
  place: Place;
};

export const MyPlaceItem: React.FC<Props> = ({ place }) => {
  const steps = [
    {
      title: "На модерации",
      status: place.status === "pending" ? "process" : "finish",

      icon: place.status === "pending" && <LoadingOutlined />,

      className:
        place.status === "approved" || place.status === "rejected"
          ? styles.gray
          : "",
    },
    {
      title:
        place.status === "pending"
          ? "Создано"
          : place.status === "approved"
          ? "Создано"
          : "Отклонено",
      status:
        place.status === "approved"
          ? "finish"
          : place.status === "rejected"
          ? "finish"
          : "wait",
      icon:
        place.status === "rejected" ? (
          <CloseOutlined style={{ color: "red" }} />
        ) : null,
    },
  ];

  return (
    <div className={styles.myPlaceItem}>
      <>
        <>
          {/* @ts-ignore */}
          <Steps items={steps} className={styles.customStep} />
          {place?.status === "approved" ? (
            <Link to={`/OnePlacePage/${place.id}`}>
              <h2 className={styles.title}>{place.title}</h2>
            </Link>
          ) : (
            <h2 className={styles.title}>{place.title}</h2>
          )}
          <p className={styles.description}>{place.description}</p>
          <p >  
          {place.tags.map((tag) => (  
    <span key={tag.id} style={{ backgroundColor: tag.color, color: '#ffffff', padding: '2px 5px', borderRadius: '3px', marginRight: '5px' }}>  
      #{tag.title}  
    </span>  
  ))}   
</p>  

        </>
        <img
          style={{
            height: "20vh",
            margin: "10px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
          src={place.Photos[0]?.imageUrl}
          alt="1"
        />
      </>
    </div>
  );
};
