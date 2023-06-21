import { useState, useEffect, useMemo } from "react"
import axios from "axios";
import UserCard from "../UserCard/UserCard";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const users = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    setUsers(users.data);
  }

  useMemo(() => {
    fetchUsers()
  }, []);

  return (
    <div className="users_block">
      <h1>Users Page</h1>
      <div className="users_list">
        <UserCard users={users} />
      </div>
    </div>
  )
}

export default UsersPage