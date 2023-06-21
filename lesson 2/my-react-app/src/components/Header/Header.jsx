import './Header.css';

export const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        Todo
      </div>
      <div className="menu">
        <ul className="menu_list">
          <li className="list_item">Home</li>
          <li className="list_item">Login</li>
        </ul>
      </div>
    </div>
  )
}