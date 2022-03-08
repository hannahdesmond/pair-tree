import { Col, Card } from "react-bootstrap";
import ChatToButton from "./ChatToButton";
import robot from "../assets/robot.png";

const ProfileCardSmall = ({person}) => {
  return (
    <Col>
      <Card className="card" border="warning" >
      <Card.Header as="h5" bg="warning">{person.name}</Card.Header>
        <Card.Img variant="top" src={robot} />
        <Card.Body>
          <Card.Text>Languages: {person.languages}</Card.Text>
          <Card.Text>Bio: {person.bio}</Card.Text>
          <ChatToButton receiver={person} />
        </Card.Body>
      </Card>
      <br></br>
    </Col>
  )
}

export default ProfileCardSmall
