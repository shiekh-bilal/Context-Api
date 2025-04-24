import React, { useContext } from "react";
import { ThemeContext, UserContext } from "../App";

const ChildC = () => {
  const user = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const handleToggle = () => {
    if(theme === "light")
      setTheme("dark")
    else if (theme === "dark")
      setTheme("light")
  }
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={handleToggle}>Change Theme</button>
    </div>
  )
};

export default ChildC;