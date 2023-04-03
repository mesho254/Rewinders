import React from 'react';
import Navigation from '../components/Navigation';
import UpdateEmail from '../components/UpdateEmail';
import '../styles/Navbar';
import { AvatarUser, AvatarText } from '../styles/Profile';
import { useAuth } from '../context/AuthContext'; 
 
export default function Profile() {
    const {currentUser, loading} = useAuth()

    if (loading ) return <div>loading...</div>
  return (
    <div>
      <Navigation/>
      <AvatarUser>
        <AvatarText>{currentUser.email[0]}</AvatarText>
      </AvatarUser>
      <h1>{currentUser.email}</h1>
      <UpdateEmail/>
    </div>
  )
};

