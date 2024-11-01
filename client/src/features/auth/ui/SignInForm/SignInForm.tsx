import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { signIn } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";
import styles from "./SignInForm.module.css";
import { notification } from 'antd';

interface SignInFormProps {
  onToggle1?: () => void;
  setActive1?: (active1: boolean) => void; // Add this line
}

export const SignInForm: React.FC<SignInFormProps> = ({onToggle1}) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });


  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const changeInputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password } = inputs;
    try {
      if (!email.trim() || !password.trim()) {
        notification.error(     {message: 'Ошибка',  
          description: 'Введите email и пароль'} )
          return

      }
      const resultAction = await dispatch(signIn({ email, password }));
      unwrapResult(resultAction);
      if (onToggle1) {
        onToggle1();
      }
      navigate(ROUTES.HOME);
      setInputs({ email: "", password: "" });
    } catch (error) {
      console.error("Sign in failed:", error);
      notification.error(     {message: 'Ошибка',  
        description: 'Неверный email или пароль'} )
    }
  };

  return (
    <form className={styles.signInForm} onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <label>
        Email:
        <input
          type="email"
          required
          value={inputs.email}
          name="email"
          onChange={changeInputsHandler}
        />
      </label>
      <label>
        Пароль:
        <input
          type="password"
          required
          name="password"
          value={inputs.password}
          onChange={changeInputsHandler}
        />
      </label>
      </div>
      <button type="submit">
        <div ><span>Авторизоваться</span></div>
      </button>
    </form>
  );
};
