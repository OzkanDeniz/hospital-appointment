import { Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"


const AppointmentList = ({appoinments}) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {appoinments.data(({id,patient,day,consulted,doctor})=>(
        <div>
          <Row>
            <Col>
            <h4>{patient}</h4>
            <h5>{doctor}</h5>
            </Col>
            <Col>
            <h3>{day}</h3>
            <h3>{consulted}</h3>
            </Col>
          </Row>
        </div>

      ))}

    </Container>
  )
}

export default AppointmentList
