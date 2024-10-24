import { ROUTES } from "@/app/router/routes";
import { signUp } from "@/entities/user";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
// import { useAppDispatch } from '@/shared/hooks/reduxHooks';
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";

export const SignUpForm: React.FC = () => {

  const [nickname, setNickname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");


  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(
        signUp({ nickname, firstName, secondName, email, password, avatarUrl })
      );
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit}>
      <label>
      nickname:
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </label>
      <label>
      firstName:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
      secondName:
        <input
          type="text"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
      </label>
      <label>
      email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
      password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
      avatarUrl:
        <input
          type="text"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};
