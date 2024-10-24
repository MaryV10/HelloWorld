import React from 'react';
import styles from './UserCard.module.css';
import { User } from '../../model';

type Props = {
  user: User;
};



export const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <img
          src={'/userAvatar.jpeg'}
          alt={`${user.nickname}'s avatar`}
          className={styles.avatar}
        />
      </div>
    </div>
  );
};