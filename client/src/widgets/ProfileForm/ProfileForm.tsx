import React, { useState } from "react";

import { updateUser } from '@/entities/user/api/userThunks';
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { unwrapResult } from "@reduxjs/toolkit";
import { User } from "@/entities/user";
import { clear } from "console";

const ProfileForm: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    if (user) {
      setNickname(user.nickname);
      setFirstName(user.firstName);
      setSecondName(user.secondName);
    }
  };

  const handleSave = async ( event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log({ nickname, firstName, secondName }, 111111111111111111111111111111);
    try {
    
      dispatch(updateUser({ nickname, firstName, secondName }))
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        height: "30vh",
        background: "yellow",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p>Карточка Профиля</p>
        <p>Никнейм: {user?.nickname}</p>
        <p>Имя: {user?.firstName}</p>
        <p> Фамилия: {user?.secondName}</p>
        <p>Email: {user?.email}</p>
        {/* <p>Профиль создан: {user?.createdAt}</p> */}
      </div>
      <div>
        {" "}
        <img
          style={{ padding: "20px", height: "25vh" }}
          src={user?.avatarUrl}
          alt="avatar"
        />
      </div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Nickname"
          />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            type="text"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            placeholder="Second Name"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export const MemorizedProfileForm = React.memo(ProfileForm);
