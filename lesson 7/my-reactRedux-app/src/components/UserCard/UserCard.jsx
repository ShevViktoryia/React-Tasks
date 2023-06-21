import './UserCard.css'
import { Link } from 'react-router-dom';

const UserCard = (props) => {
  const {users} = props;
  if (!users || users.length === 0) return <p>Not found</p>
  let id_arr = [];
  const createUniqueId = () => {
    let id = Math.floor(Math.random() * 100) + 1;
    if(!(id_arr.includes(id))) {
      id_arr.push(id);
      return id;
    }
    else {
      return createUniqueId();
    }
  }

  return (
    users.map(user => {
      const id = createUniqueId();
      return (
        <div className="user_card">
          <div className="user_name" key={`${id}`}>{user.name}</div>
          <div className="user_email">{user.email}</div>
          <div className="user_phone">{user.phone}</div>
          <Link to={`/users/${user.id}`} className='info'>More</Link>
        </div>
      )
    })
  )
}

export default UserCard