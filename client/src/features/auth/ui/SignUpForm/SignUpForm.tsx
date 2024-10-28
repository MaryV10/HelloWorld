import { ROUTES } from "@/app/router/routes";
import { signUp } from "@/entities/user";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
// import { checkEmailExists } from '@/shared/utils/checkEmailExists';
// import { message } from 'antd';
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";


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
  const [avatarUrl, setAvatarUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // REGEXP on password
      // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      // if (!passwordRegex.test(password)) {
      //   return res.status(400).json({
      //     message: 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      //   });
      // }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(email)) {
        setErrorMessage("Не верный формат почты !!!");
        setShowError(true);
        return;
      } else if (password !== rpassword) {
        setErrorMessage("Пароли не совпадают");
        setShowError(true);
        return;
      } else if (
        !nickname.trim() ||
        !firstName.trim() ||
        !password.trim() ||
        !rpassword.trim() ||
        !email.trim()
      ) {
        setErrorMessage(
          "Поля Nickname, firstName, Password, Email обязательные !"
        );
        setShowError(true);
        return;
      } else {
        setShowError(false);

        const resultAction = await dispatch(
          signUp({
            nickname,
            firstName,
            secondName,
            email,
            password,
            avatarUrl,
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
        setAvatarUrl("");
        navigate(ROUTES.HOME);
      }
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  return (
    <>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <label>
          <p>Nickname:</p>

          <input
            type="text"
            placeholder="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </label>
        <label>
          <p>FirstName:</p>

          <input
            type="text"
            placeholder="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          <p>SecondName:</p>

          <input
            type="text"
            placeholder="secondName"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
        </label>
        <label>
          <p>Email:</p>

          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </label>
        <label>
          <p>Password:</p>

          <input
            type="password"
            placeholder="password"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
        </label>
        <label>
          <p>Repeat password:</p>

          <input
            type="password"
            placeholder="Repeat password"
            value={rpassword}
            onChange={(e) => setRPassword(e.target.value.trim())}
          />
        </label>
        <label>
          <p>AvatarUrl:</p>

          <input
            type="text"
            placeholder="AvatarUrl"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
      {showError && (
        <div style={{ border: "3px solid red", padding: "10px" }}>
          {errorMessage}
        </div>
      )}
    </>
  );
};
