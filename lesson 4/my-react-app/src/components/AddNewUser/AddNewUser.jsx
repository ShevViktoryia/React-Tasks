import { UserData } from '../UserData/UserData';

export const AddNewUser = (props) => {
  return (
    <UserData persons={props.children}/>
  )
}