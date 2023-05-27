import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import {UserData} from './components/UserData/UserData'
import './App.css'
import { Loading } from './components/Loading/Loading';
import { AddNewUser } from './components/AddNewUser/AddNewUser';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';

function App() {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState([]);
  const [inputName, setName] = useState('');
  const [inputUsername, setUsername] = useState('');
  const [inputEmail, setEmail] = useState('');
  const [inputAddress, setAddress] = useState('');

    
  const resetInput = () => {
    setInputData(prevState => ([{name: inputName, username: inputUsername, email: inputEmail, address: {inputAddress}}, ...prevState]));
    setUserData(prevState => [inputData, ...prevState]);
    setName('');
    setUsername('');
    setEmail('');
    setAddress('');
  }

  useEffect(() => {
    setIsLoading(true);
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then(response => {
      setUserData(response.data);
      setIsLoading(false);
    })
    .catch(() => {
      setIsLoading(false);
    });
  }, []);

  // useMemo(() => {
  //   console.log(inputData)
  // }, [])

  return (
    <>
    <div className='form_wrapper'>
      <div className="add_user">
        <Input
        id="input_name"
        value={inputName} 
        onChange={e => setName(e.target.value)}
        placeholder="Name" />
        <Input
        id="input_username"
        value={inputUsername} 
        onChange={e => setUsername(e.target.value)}
        placeholder="Username" />
        <Input
        id="input_email"
        value={inputEmail} 
        onChange={e => setEmail(e.target.value)}
        placeholder="Email" />
        <Input
        id="input_address"
        value={inputAddress} 
        onChange={e => setAddress(e.target.value)}
        placeholder="Address" />
      </div>
      <Button onClick={resetInput}/>
    </div>
      {isLoading ? <Loading /> : <UserData persons={userData}/>}
    </>
  )
}

export default App
