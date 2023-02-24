import React from "react";

import Avatar from "avataaars";

const Navbar = ({ currentUser }) => {
  const { name, avatarProp } = currentUser;

  return (
    <nav className="shadow flex w-full items-center justify-between p-3">
      <div className="font- text-2xl">
        <h2>Comment Manager</h2>
      </div>
      <div className="items flex space-x-2">
        <Avatar
          avatarStyle="Circle"
          style={{ width: "30px", height: "30px" }}
          topType={avatarProp}
        />
        <h4 className="text-lg font-normal">{name}</h4>
      </div>
    </nav>
  );
};

export default Navbar;
