import { Switch } from "@mui/material";

export const Checkbox = (props) => {
  return(
    <Switch 
    checked={props.checked}
    onChange={props.changeTheme} 
    color="secondary"/>
  )
}

