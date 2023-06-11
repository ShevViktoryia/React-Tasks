import { useContext } from "react"
import { ContactsContext } from "../../context/ContactsContext/ContactsContext";
import CustomCard from "../CustomCard/CustomCard";

export const TeamPage = () => {
  const team = useContext(ContactsContext);
  return(
    <div className="team_block">
      <CustomCard persons = {team.team}/>
    </div>
  )
}