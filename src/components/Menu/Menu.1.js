import React from "react";

export const Menu = ({ menuItems, type }) => {
  return (
    <div>
      <li>
        <a href={menuItems[0]}> {menuItems[0]}</a>
      </li>
      <br />
      <li>
        <a href={menuItems[1]}> {menuItems[1]}</a>
      </li>
      <br />
      <li>
        <a href={menuItems[2]}> {menuItems[2]}</a>
      </li>
    </div>
  );
};
