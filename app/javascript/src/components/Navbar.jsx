import React from 'react';
import Avatar from 'avataaars';

const Navbar = ({ currentUser }) => {
    const { name, avatarProp } = currentUser;
    return (
      <nav className="flex justify-between items-center w-full p-3 shadow">
        <div className="text-2xl font-">
        <h2>Comment Manager</h2>
        </div>
        <div className="flex items space-x-2">
        <Avatar avatarStyle="Circle"
        style={{ width: '30px', height: '30px'}} topType={avatarProp}/>
        <h4 className="text-lg font-normal">{name}</h4>
        </div>
      </nav>
    )
}

export default Navbar;