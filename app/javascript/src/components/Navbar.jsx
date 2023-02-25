import React from "react";

import Avatar from "avataaars";

const Navbar = ({ currentUser }) => {
  const { name, avatarProp } = currentUser;

  return (
    <nav className="shadow flex w-full items-center justify-between p-3">
      <div className="font-sans font-light md:text-2xl">
        <h2>Comment Manager</h2>
      </div>
      <div className="flex items-center space-x-2">
        <Avatar
          avatarStyle="Circle"
          style={{ width: "30px", height: "30px" }}
          topType={avatarProp}
        />
        <h4 className="font-normal md:text-lg">{name}</h4>
      </div>
    </nav>
  );
};

export default Navbar;
