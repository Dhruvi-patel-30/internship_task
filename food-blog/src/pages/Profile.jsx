import React from 'react'
import MyBlog from '../components/MyBlog'
import ProfileHead from '../components/ProfileHead'
import ProfileDetail from '../components/ProfileDetail'

const Profile = () => {
  return (
    <div>
      <ProfileHead/>
      <ProfileDetail/>
      <MyBlog/>
    </div>
  )
}

export default Profile