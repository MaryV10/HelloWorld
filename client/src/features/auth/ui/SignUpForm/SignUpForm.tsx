import { ROUTES } from "@/app/router/routes";
import { signUp } from "@/entities/user";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";

import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";





import { notification } from "antd";


interface SignUpFormProps {
  onToggle: () => void;
  setActive: (active: boolean) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onToggle }) => {
  const [nickname, setNickname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRPassword] = useState("");
  // const [avatarUrl, setAvatarUrl] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        notification.error({
          message: "Ошибка",
          description:
            "Пароль должен содержать не менее 8 символов и содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один спецсимвол",
        });
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        notification.error({
          message: "Ошибка",
          description: "Неверный формат почты",
        });
        return;
      } else if (password !== rpassword) {
        notification.error({
          message: "Ошибка",
          description: "Пароли не совпадают",
        });
        return;
      } else if (
        !nickname.trim() ||
        !firstName.trim() ||
        !password.trim() ||
        !rpassword.trim() ||
        !email.trim()
      ) {
        notification.error({
          message: "Ошибка",
          description: "Пожалуйста, введите данные",
        });
        return;
      } else {
        const resultAction = await dispatch(
          signUp({
            nickname,
            firstName,
            secondName,
            email,
            password,
            avatarUrl:
              "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
          })
        );
        unwrapResult(resultAction);
        onToggle();
        setNickname("");
        setFirstName("");
        setSecondName("");
        setEmail("");
        setPassword("");
        setRPassword("");

        navigate(ROUTES.HOME);
      }
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  return (
    <>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <label>
            <p>Никнейм:</p>

            <input
              type="text"
              placeholder="Никнейм"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </label>
          <label>
            <p>Имя:</p>

            <input
              type="text"
              placeholder="Имя"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            <p>Фамилия:</p>

            <input
              type="text"
              placeholder="Фамилия"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </label>
          <label>
            <p>Email:</p>

            <input
              type="Email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
          </label>
          <label>
            <p>Пароль:</p>

            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
          </label>
          <label>
            <p>Повторите пароль:</p>

            <input
              type="password"
              placeholder="Повторите пароль"
              value={rpassword}
              onChange={(e) => setRPassword(e.target.value.trim())}
            />
          </label>
          {/* <label>
          <p>Аватар:</p>

          <input
            type="text"
            placeholder="Аватар"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
        </label> */}
          {/* <label style={{display: "flex", alignItems: "center"}}><p>Загрузить аватар: </p> 
            <Upload
                onChange={handleFileChange}
                listType="picture"
                beforeUpload={() => false}
                
              >
                <UploadButton  icon={<CloudUploadOutlined  />}>
                Нажмите для загрузки
                </UploadButton>
              </Upload>
              </label> */}
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
};
