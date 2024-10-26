import MyPlacesList from '@/widgets/MyPlacesList';
import ProfileForm from '@/widgets/ProfileForm';
import React from 'react';


export const ProfilePage: React.FC = () => {

  return (
    <div style={{ marginTop: '100px', padding: '20px', height: '80vh', background:'pink' }}> 
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

        <MyPlacesList/>
      {/* </Suspense> */}
      {/* <Suspense fallback={<Loader />}> */}
        {/* <LazyTaskList /> */}
      {/* </Suspense> */}
    </div>
  );
};
