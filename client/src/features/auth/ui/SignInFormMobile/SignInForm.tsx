import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { signIn } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";
import styles from "./SignInForm.module.css";

interface SignInFormProps {
  onToggle1?: () => void;
  setActive1?: (active1: boolean) => void; // Add this line
}

export const SignInFormMobile: React.FC<SignInFormProps> = ({onToggle1}) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

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
        setErrorMessage("Все поля обязательны к заполнению");
        setShowError(true);
        return;
        // alert ("Все поля обязательны к заполнению")
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
      alert("Не правильные почта или пароль !");
    }
  };

  return (
    <>
   
    <form className={styles.signInForm} onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{fontSize: "20px", fontWeight: "bold"}}>Авторизация:</h1>
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
      {showError && (
        <div style={{ border: "3px solid red", padding: "10px" }}>
          {errorMessage}
        </div>
      )}
      <label>
        Password:
        <input
          type="password"
          required
          name="password"
          value={inputs.password}
          onChange={changeInputsHandler}
        />
      </label>
      </div>
      <button className={styles.signInButton} type="submit">
        <div ><span>Авторизоваться</span></div>
      </button>
    </form>
    </>
  );
};
