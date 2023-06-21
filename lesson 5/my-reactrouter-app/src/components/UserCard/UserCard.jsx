import './UserCard.css'
import { Link } from 'react-router-dom';

const UserCard = (props) => {
  const {users} = props;
  if (!users || users.length === 0) return <p>Not found</p>
  return (
    users.map(user => {
      return (
        <div className="user_card">
          <div className="user_name" key={user.id}>{user.name}</div>
          <div className="user_email">{user.email}</div>
          <div className="user_phone">{user.phone}</div>
          <Link to={`/users/${user.id}`} className='info'>More</Link>
        </div>
      )
    })
  )
}

export default UserCard