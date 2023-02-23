import React from 'react';
import Avatar from 'avataaars';


const UserAvatar = ({ avatarProp }) =>
    <Avatar avatarStyle="Circle" style={{ width: '80px', height: '40px'}} topType={avatarProp}/>

export default UserAvatar;
