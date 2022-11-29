import './App.css';
import Navbar from './Navbar/navbar';
import {useState,createContext} from 'react'

export const UserContext = createContext()

function App() {
  const [data, setData] = useState(10)
  const [new_data, setNewdata] = useState("Sending data from props")

  return (
    <UserContext.Provider value={data}>
    <div className="App">
      <Navbar/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
