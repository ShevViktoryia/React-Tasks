import { useEffect, useState } from 'react'
import axios from 'axios'
import {UserData} from './components/UserData/UserData'
import './App.css'

function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then(response => {
      setUserData(response.data);
    });
  }, []);

  return (
    <>
      <UserData persons={userData}/>
    </>
  )
}

export default App
