import { Card, CardContent, Typography } from "@mui/material";
import './CustomCard.css'

const CustomCard = (props) => {
  const {persons} = props;
  return (
    persons.map(person => {
      return (
        <Card key = {person.name} className="card">
          <CardContent>
            <Typography component="div">{person.name}</Typography>
            <Typography variant="body2" color="text.secondary">{person.position}</Typography>
          </CardContent>
        </Card>
      )
    })
  )
}

export default CustomCard