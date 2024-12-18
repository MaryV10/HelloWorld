import React, { useEffect, useState } from "react";
import styles from "./ProfileForm.module.css";

import { getUser, updateUser } from "@/entities/user/api/userThunks";
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
          console.error("Error fetching user:", error);
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

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      dispatch(updateUser({ nickname, firstName, secondName }));

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        {" "}
        <img
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
          }}
          src={user?.avatarUrl}
          alt="avatar"
        />
        <div
          style={{
            textAlign: "left",
            background: "#f1e8d9",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
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
            placeholder="Никнейм"
            style={{ backgroundColor: "white" }}
          />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Имя"
            style={{ backgroundColor: "white" }}
          />
          <input
            type="text"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            placeholder="Фамилия"
            style={{ backgroundColor: "white" }}
          />
          <button
           style={{ border: "2px solid rgb(20, 18, 19)"}}
            onClick={handleSave}
          >
            Сохранить
          </button>
          <button
            style={{ backgroundColor: "rgb(20, 18, 19)"}}
            onClick={handleCancel}
          >
            Выйти
          </button>
        </>
      ) : (
        <>
          <button
           style={{ backgroundColor: "rgb(20, 18, 19)"}}
            onClick={handleEdit}
          >
            Редактировать
          </button>
        </>
      )}
    </div>
  );
};

export const MemorizedProfileForm = React.memo(ProfileForm);
