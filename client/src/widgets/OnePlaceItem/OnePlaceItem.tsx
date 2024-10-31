import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import deleteIcon from "@/assets/free-icon-delete-7104075.png";
import styles from "./OnePlaceItem.module.css";
import {isMobile} from 'react-device-detect';
import {
  getApprovedPlaces,
  removePlace,
  updatePlace,
} from "@/entities/place/api/placeThunks";
import { addFeedback } from "@/entities/feedback/api/feedbackThunks";
import { MyFeedbackItem } from "@/entities/place/ui/MyFeedbackItem";

import { ROUTES } from "@/app/router/routes";

import BasicRating from "@/shared/Rating/Rating";
import CarouselShared from "@/shared/CarouselShared/CarouselShared";
import { Modal } from "antd";
import { Upload } from "antd";
import { Button as UploadButton } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/es/upload";
import { notification } from 'antd';
import CarouselSharedMobile from "@/shared/CarouselSharedMobileLK/CarouselSharedMobile";
import CarouselPhotosMobile from "@/shared/CarousellPhotosMobile/CarouselPhotosMobile";


export const OnePlaceItem: React.FC = () => {
  const { approvedPlaces } = useAppSelector((state) => state.place);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [score, setScore] = useState(0);

  const [comment, setComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const onePlace = approvedPlaces.find((place) => place.id === Number(id));
  const [title, setTitle] = useState(onePlace?.title);
  const [description, setDescription] = useState(onePlace?.description);
  const [longitude, setLongitude] = useState(onePlace?.longitude);
  const [width, setWidth] = useState(onePlace?.width);
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);

  // ======================================== CHANGE PLACE =====================================
  const handleFileChange = (info: UploadChangeParam) => {
    const file = info.fileList[0].originFileObj;
    setFile(file as File);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    dispatch(getApprovedPlaces());
  }, [dispatch]);

  const renderContent = () => {
    if (isMobile) {
      return (
        <select
          name="score"
          value={score}
          style={{ backgroundColor: "white", width: '60px', borderRadius:'15px', padding: '5px' }}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value >= 0 && value <= 5) {
              setScore(value);
            }
          }}
        >
          <option value="">Выберите оценку</option>
          {[...Array(6).keys()].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      )
    
    } else {
    return ( <input
    type="number"
    name="score"
    min="0"
    max="5"
    value={score}
    style={{ backgroundColor: "white" }}
    onChange={(e) => {
      const value = Number(e.target.value);
      if (value >= 0 && value <= 10) {
        setScore(value);
      }
    }}
    onKeyDown={(e) => {
      if (
        !["Backspace", "Delete", "ArrowUp", "ArrowDown"].includes(e.key)
      ) {
        e.preventDefault();
      }
    }}
  ></input>)
  }
  }

  const handlerUpdatePlace = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
      }
    if (title?.trim()==='' || description?.trim()==='' || longitude?.trim()==='' || width?.trim()==='') {  
      notification.error({  
        message: 'Ошибка',  
        description: 'Пожалуйста, заполните все поля.',  
      });  
      return;  
    }  
    if (user?.id && onePlace) {
      await dispatch(
        updatePlace({
          formData,
          id: onePlace.id,
          title: title!,
          description: description!,
          longitude: longitude!,
          width: width!,
        })
      );
      setIsEditing(false);
      await dispatch(getApprovedPlaces());
    }
  };

  const handlerDeletePlace = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user?.id && onePlace) {
      await dispatch(
        removePlace({
          id: onePlace.id,
        })
      );
      setIsEditing(false);
    }

    navigate(ROUTES.PROFILE);
  };

  useEffect(() => {
    if (isEditing) {
      setTitle(onePlace?.title);
      setDescription(onePlace?.description);
      setLongitude(onePlace?.longitude);
      setWidth(onePlace?.width);
    }
  }, [isEditing, onePlace]);
  // ========================================  TOTAL SCORE FUNC =================================

  const totalScore = () => {
    if (!onePlace?.Feedbacks || onePlace?.Feedbacks.length === 0) {
      return "Нет оценок";
    } else {
      const totalScore: number | undefined = onePlace?.Feedbacks.reduce(
        (acc, feedback) => acc + feedback.score,
        0
      );
      const averageScore: number | undefined =
        totalScore / onePlace?.Feedbacks.length;
      return averageScore.toPrecision(2);
    }
  };
  // ======================================== ADD FEEDBACK =====================================

  const handlerAddFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (user?.id) {
      dispatch(addFeedback({ score, comment, placeId: onePlace!.id }));
    }
    setScore(0);
    setComment("");
  };

  // ========================================RETURN=====================================

  return (
    <div
      style={{
        marginTop: "100px"
      
      }}
    > 
      {/* =======================================PLACE CHANGING======================== */}

      <div style={{ backgroundColor: "#027147", borderRadius: "15px", padding: '20px' }}>

        <div className={styles.name}>
      <p style={{textAlign: 'center', background: 'white', maxWidth: '500px', padding: '10px', borderRadius: '20px', fontWeight: 'bold'}}> {onePlace?.title}</p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
        </div>
          
<div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", background: 'white', borderRadius: '20px', padding: '10px', paddingRight: '15px', paddingLeft: '15px' }}>
  <p>{totalScore()}</p>
         <BasicRating value={Number(totalScore())}  />
         </div>
        </div>

        <p >  
          {onePlace?.tags.map((tag) => (  
    <p key={tag.id} style={{ display:"inline-block", marginTop: "15px", backgroundColor: tag.color, color: '#ffffff', padding: '2px 5px', borderRadius: '3px', marginRight: '5px' }}>  
      #{tag.title}  
    </p>  
  ))}   
</p> 
        <div className={styles.photos}>

          <p>Фотографии:</p>

          {/* @ts-ignore */}  

          {!isMobile && 
         ( <CarouselShared>
           
          {onePlace?.Photos.map((photo, index) => (
            <>
            <div className={styles.imageContainer} style={{ width: "100%", height: "100%" }} key={index}>
              
              <img className={styles.image} src={`${window.location.origin}/images/${photo.imageUrl}`}></img>
              
            </div>
            </>
          ))}
            </CarouselShared>)
}

{isMobile && 
         ( <CarouselPhotosMobile>
           
          {onePlace?.Photos.map((photo, index) => (
            <div className={styles.imageContainer} style={{ width: "100%", height: "100%" }} key={index}>
              
              <img className={styles.image} src={`${window.location.origin}/images/${photo.imageUrl}`}></img>
              
            </div>
          ))}
            </CarouselPhotosMobile>)
}

            </div>
        
            <div style={{background: "white", borderRadius: "15px", padding: '20px', marginBottom: '20px'}}>
          <h1 style={{fontWeight: 'bold'}}>Описание: </h1> 
          <p>{onePlace?.description}</p>
          </div>
     
        {isEditing ? (
              <Modal

              visible={isEditing}
              onCancel={handleCancel}
              footer={null}
            >
          <>
            <label>
              Изменить название места:
              <input
                name="comment"
                maxLength={35}
                value={title}
                style={{backgroundColor: "#141213",color: "white", margin: "15px 15px" }}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Изменить описание:
              <input
                name="comment"
                value={description}
                className={styles.textarea1}
                style={{backgroundColor: "#141213",color: "white", margin: "15px 15px" }}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              Изменить широту:
              <input
                type="number"
                name="comment"
                value={longitude}
                style={{backgroundColor: "#141213",color: "white", margin: "15px 15px" }}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </label>
            <label>
              Изменить долготу:
              <input
                type="number"
                name="comment"
                value={width}
                style={{backgroundColor: "#141213",color: "white", margin: "15px 15px" }}
                onChange={(e) => setWidth(e.target.value)}
              />
            </label>
            <label style={{display: "flex", alignItems: "center"}}><p>Загрузить фото: </p> 
            <Upload
                onChange={handleFileChange}
                listType="picture"
                beforeUpload={() => false}
                
              >
                <UploadButton  icon={<CloudUploadOutlined  />}>
                Нажмите для згрузки
                </UploadButton>
              </Upload>
              </label>
            {user?.id && (
              <>
                {" "}
                <button
                  style={{ backgroundColor: "#03754a",color: "white", padding: "10px" }}
                  onClick={handlerUpdatePlace}
                >
                  Сохранить
                </button>
            
<img
            className={styles.delIcon}
            src={deleteIcon}
            alt="Редактировать отзыв"
            onClick={handlerDeletePlace}
          />
              
      
              </>
                   
            )}
          </>
          </Modal>
          
        ) : (
          <>
            {user?.id === onePlace?.userId && (
              <button
                style={{ backgroundColor: "#141213", padding: "10px", color: "white" }}
                onClick={handleEdit}
              >
                Редактировать
              </button>
            )}
          </>
          
        )}
      </div>

      {/* ================================   COMMENTS Creates and CHANGE ================================================== */}
    <div className={styles.container} >
      <div className={styles.feedback} style={{color: "black", borderRadius: "15px"}}>
        <label style={{display: 'flex', flexDirection: 'column'}}>
          Ваш комментарий:
          <textarea
            placeholder="Комментарий ..."
            name="comment"
            value={comment}
            className={styles.textarea1}
            style={{ backgroundColor: "white",color: "black" , margin: "15px 15px" , height: "150px", maxWidth: "100px" }}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
      

        <label>
          {/* <BasicRating value={totalScore()} /> */}

          Ваша оценка:
         <div>{renderContent()}</div>
          <button onClick={handlerAddFeedback}>Добавить отзыв</button>
        </label>
        </label>
        
      </div>
      
      <div className={styles.feedback}>Все комментарии:
        {onePlace?.Feedbacks.map((feedback) => (
          <div className={styles.feedbacksOneLine}>
            <MyFeedbackItem
              key={feedback.id}
              place={onePlace}
              feedback={feedback}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
