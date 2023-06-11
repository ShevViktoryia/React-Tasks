import { useContext } from "react"
import { ContactsContext } from "../../context/ContactsContext/ContactsContext";

const ContactsPage = () => {
  const {contacts} = useContext(ContactsContext);
  return(
    <>
      <h1>{contacts.header}</h1>
      <p>{contacts.text}</p>
    </>
  )
}

export default ContactsPage