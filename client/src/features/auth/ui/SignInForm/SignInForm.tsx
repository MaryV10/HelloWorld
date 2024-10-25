import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/app/router/routes';
import { useAppDispatch } from '@/shared/hooks/reduxHooks';
import { signIn } from '@/entities/user';
import { unwrapResult } from '@reduxjs/toolkit';
import styles from './SignInForm.module.css';

export const SignInForm: React.FC = () => {

  const [inputs, setInputs] = useState({ password: '', email: '' });
 
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
      const resultAction = await dispatch(signIn({ email, password }));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };

  return (







    
    <form className={styles.signInForm} onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type='email'
          value={inputs.email}
          name='email'
          onChange={changeInputsHandler}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={inputs.password}
          onChange={changeInputsHandler}
        />
      </label>
      <button type='submit'>
        <span>Sign In</span>
      </button>
    </form>
  );
};
