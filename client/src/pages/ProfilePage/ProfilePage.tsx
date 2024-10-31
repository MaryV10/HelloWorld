
import {  useAppSelector } from '@/shared/hooks/reduxHooks';
import MyFeedbackList from '@/widgets/MyFeedbackList';
import MyPlacesList from '@/widgets/MyPlacesList';
import { PendingPlacesList } from '@/widgets/PendingPlacesList/PendingPlacesList';
import ProfileForm from '@/widgets/ProfileForm';
import React from 'react';


export const ProfilePage: React.FC = () => {
  const {user} = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(refreshAccessToken());
  // }, [dispatch]);


  return (
    <div style={{  padding: '20px', height: '250vh', background:'#f8ebda', display: 'flex', flexDirection: 'column', gap: '20px' }}> 
  

      <ProfileForm />
      <MyFeedbackList/>
      <MyPlacesList/>
      {user?.id===1 && <PendingPlacesList/>} 

    </div>
  );
};
