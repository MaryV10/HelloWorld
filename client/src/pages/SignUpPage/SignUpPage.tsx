
import React from "react";
import styles from './SignUpPage.module.css'
import { SignUpFormMobile } from "@/features/auth/ui/SignUpFormMobile/SignUpForm";

export const SignUpPage: React.FC = () => {
  
  return (
    <>
    <div className={styles.container}>
      <SignUpFormMobile />
      </div>
    </>
  );
};
