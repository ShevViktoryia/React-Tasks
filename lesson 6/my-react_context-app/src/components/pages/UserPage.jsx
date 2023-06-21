import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
  const [user, setUser] = useState([]);
  const {id} = useParams();

  const fetchUsers = async () => {
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUser(user.data);
  }

  useMemo(() => {
    fetchUsers()
  }, []);

  return (
    <div className="user_block">
      <div key={user.id} className="user_name">{user.name}</div>
      <div className="user_username">{`Username: ${user.username}`}</div>
      <div className="user_email">{`Email: ${user.email}`}</div>
      <div className="user_phone">{`Phone: ${user.phone}`}</div>
      <div className="user_website">{`Website: ${user.website}`}</div>
    </div>
  )
}

export default UserPage