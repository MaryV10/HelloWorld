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
  setActive: (active: boolean) => void;
}


export const SignUpForm: React.FC<SignUpFormProps> = () => {

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

      // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;  
  // if (!passwordRegex.test(password)) {  
  //   return res.status(400).json({  
  //     message: 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'  
  //   });  
  // }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  

    if (!emailRegex.test(email)) {  
       setErrorMessage("Не верный формат почты !!!");
       return
      } 

    else if (password !== rpassword) {
      setErrorMessage("Пароли не совпадают");
      setShowError(true);
      return
    } else if (!nickname.trim() || !password.trim() || !rpassword.trim() || !email.trim()) 
      {
      setErrorMessage("Поля Nickname, Password, Email обязательные !");
      setShowError(true);
      return
      
    }  else {
      setShowError(false);



    
      const resultAction = await dispatch(
        signUp({ nickname, firstName, secondName, email, password, avatarUrl })
      );
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
      //   const isEmailExists = await checkEmailExists(email);
      // if (!isEmailExists) {
      //   message.error('Please enter a real email');}
    }
  }
    catch (error) {
      console.error("Sign up failed:", error);
    }
   
  };




  return (
    <>
    <form className={styles.signUpForm} onSubmit={handleSubmit}>
      <label>
        <p>nickname:</p>
      
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </label>
      <label>
      <p>firstName:</p>
      
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
      <p>secondName:</p>
      
        <input
          type="text"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
      </label>
      <label>
      <p>email:</p>
      
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
      </label>
      <label>
      <p>password:</p>
      
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
      </label>
      <label>
      <p>Repeat password:</p>
      
        <input
          type="password"
          value={rpassword}
          onChange={(e) => setRPassword(e.target.value.trim())}
        />
      </label>
      <label>
      <p>avatarUrl:</p>
      
        <input
          type="text"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
     {showError && (
      <div style={{ border: "5px solid red", padding: "10px" }}>{errorMessage}</div>
    )}
    </>
  );
};
