import './UserData.css'

export const UserData = data => {
  const { persons } = data;
  if (!persons || persons.length === 0) return <p>Not found</p>
  let arr = [];

  const createUniqueId = () => {
    let id = Math.floor(Math.random() * 100) + 1;
    if(!(arr.includes(id))) {
      arr.push(id);
      return id;
    }
    else {
      return createUniqueId();
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {
            persons.map(item => {
              const id = createUniqueId();
              let address = '';
              for(let adr in item.address) {
                if(adr == 'city' || adr == 'street') {
                  address += item.address[adr] + ", ";
                }
              }
              return (
                <tr key={`${id}`}>
                  <td>{`${id}`}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{`${address}`}</td>
                </tr>
              )
              }
            )
          }
        </tbody>
      </table>
    </div>
  )
}