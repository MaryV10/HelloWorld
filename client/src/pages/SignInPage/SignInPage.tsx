import React from 'react';

import styles from "./SignInPage.module.css"
import { SignInFormMobile } from '@/features/auth/ui/SignInFormMobile/SignInForm';

export const SignInPage: React.FC = () => {
  return (
    <>
    <div className={styles.container}>
     
      <SignInFormMobile />
      </div>
    </>
  );
};
