import React, { useEffect, useState } from "react";
import styles from "./ProfileForm.module.css";

import { getUser, updateUser } from '@/entities/user/api/userThunks';
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";


const ProfileForm: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [isEditing, setIsEditing] = useState(false);


  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {  
    if (user?.id) {  
      const fetchUser = async () => {  
        try {  
          await dispatch(getUser(user.id));  
        } catch (error) {  
          console.error('Error fetching user:', error);  
        }  
      };  

      fetchUser();  
    }  
  }, [dispatch, user?.id]); 

  


  const handleEdit = () => {
    setIsEditing(true);
    if (user) {
      setNickname(user.nickname);
      setFirstName(user.firstName);
      setSecondName(user.secondName);
    }
 
  };

  const handleCancel = () => {
    
    if (user) {
      setIsEditing(false);
  
    }
  };

  const handleSave = ( event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log({ nickname, firstName, secondName }, 111111111111111111111111111111);
    try {
    
     dispatch(updateUser({ nickname, firstName, secondName }))

      console.log(user,'00011')
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div
      className={styles.container}
    >
       <div>
        {" "}
        <img
          style={{  height: "100px", width: "100px" , borderRadius: "50%",objectFit: "cover", marginBottom: "20px"}}
          src={user?.avatarUrl}
          alt="avatar"
        />
      <div style={{ textAlign: "left" , background: "#f1e8d9", padding: "10px", borderRadius: "10px"}}>
        <p>Карточка Профиля</p>
        <p>Никнейм: {user?.nickname}</p>
        <p>Имя: {user?.firstName}</p>
        <p> Фамилия: {user?.secondName}</p>
        <p>Email: {user?.email}</p>
        {/* <p>Профиль создан: {user?.createdAt}</p> */}
      </div>
     
      </div>
      {isEditing ? (
        <>
       
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Nickname"
            style={{ backgroundColor:'white'}}
          />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            style={{ backgroundColor:'white'}}
          />
          <input
            type="text"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            placeholder="Second Name"
            style={{ backgroundColor:'white'}}
          />
          <button style={{ backgroundColor:'white', padding: "10px" }}onClick={handleSave}>Save</button>
          <button style={{ backgroundColor:'white', padding: "10px" }}onClick={handleCancel}>Cancel</button>
         
        </>
      ) : (
        <>
          <button style={{ backgroundColor:'white', padding: "10px" }}onClick={handleEdit}>Edit</button>
      
          </>
      )}
    </div>
  );
};

export const MemorizedProfileForm = React.memo(ProfileForm);
