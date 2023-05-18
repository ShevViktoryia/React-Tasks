import './UserData.css'

export const UserData = data => {
  const { persons } = data;
  console.log(persons)
  if (!persons || persons.length === 0) return <p>Not found</p>

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {
            persons.map(item => 
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}