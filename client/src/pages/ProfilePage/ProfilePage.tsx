import { useAppSelector } from '@/shared/hooks/reduxHooks';
import MyFeedbackList from '@/widgets/MyFeedbackList';
import MyPlacesList from '@/widgets/MyPlacesList';
import { PendingPlacesList } from '@/widgets/PendingPlacesList/PendingPlacesList';
import ProfileForm from '@/widgets/ProfileForm';
import React from 'react';


export const ProfilePage: React.FC = () => {
  const {user} = useAppSelector((state) => state.user);


  return (
    <div style={{ marginTop: '100px', padding: '20px', height: '250vh', background:'pink' }}> 
      <p>Личный кабинет</p>
      {/* <button type='button' onClick={() => dispatch(decrement())}>
        -
      </button>
      <span>{count}</span>
      <button type='button' onClick={() => dispatch(increment())}>
        +
      </button> */}
      {/* <Suspense fallback={<Loader />}> */}
        <ProfileForm />
        <MyFeedbackList/>
        <MyPlacesList/>
        {user?.id===1 && <PendingPlacesList/>}
      {/* </Suspense> */}
      {/* <Suspense fallback={<Loader />}> */}
        {/* <LazyTaskList /> */}
      {/* </Suspense> */}
    </div>
  );
};
