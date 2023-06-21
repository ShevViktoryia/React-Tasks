import { useState, useEffect, useMemo } from "react"
import axios from "axios";
import { Loading } from '../Loading/Loading';
import UserCard from "../UserCard/UserCard";

const UsersPage = () => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      setUsers(res.data);
      setIsLoading(false);
    })
    .catch(() => {
      setIsLoading(false);
    });
  }

  useMemo(() => {
    setIsLoading(true);
    fetchUsers()
  }, []);

  return (
    <div className="users_block">
      <h1>Users Page</h1>
      <div className="users_list">
        {isLoading ? <Loading /> : <UserCard users={users} />}
      </div>
    </div>
  )
}

export default UsersPage