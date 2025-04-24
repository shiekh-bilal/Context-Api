import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

const UserContext = createContext();
const ThemeContext = createContext();
function App() {
  const [user, setUser] = useState({name: "Lazy Land"});
  const [theme, setTheme] = useState('light')
  return (
    <div id='container' style={{background: theme === "light" ? "#F5DF4D" : "#0F4C81"}}>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value= {[theme, setTheme]}>
          <ChildA />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App;
export {UserContext};
export {ThemeContext};
