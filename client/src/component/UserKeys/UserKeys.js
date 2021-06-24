import React from "react";

const UserKeys = (props) => {
  console.log(props);
  return (
    <div className="userKeys">
      <figure>
        <img src={props.icon} alt="" />
      </figure>

      <div>
        <p className="numberText">{props.data}</p>
        <p className="legend">{props.text}</p>
      </div>
    </div>
  );
};
export default UserKeys;
