import React, { useState } from 'react';
import { SignUpForm } from '@/features/auth/ui/SignUpForm';
import Modal from '@/shared/ui/Modal/Modal';

export const SignUpPage: React.FC = () => {

  const [active, setActive] = useState(false);

  const onToggle = (): void => {
    setActive((prev) => !prev);
  };



  return (
    <>
    <h1></h1>
      {/* <button type="button" style={{marginTop: "120px"}} onClick={onToggle}>REGISTRATION</button>
      <Modal active={active} onToggle={onToggle}>
        <SignUpForm setActive={setActive} />
        <button type="button" onClick={onToggle}>Закрыть</button>
      </Modal> */}
    </>
  );
};
