import React, { useContext } from "react";
import { UserContext } from "../App";

const ChildC = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <p>{user.name}</p>
    </div>
  )
};

export default ChildC;