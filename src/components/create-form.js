import {Form, Button, Container, Row, Col} from 'react-bootstrap';

export default function CreateForm({ onCreate }) {

  function submitHandler(event) {
      event.preventDefault();
      onCreate({
          id: event.target.location.value,
          location: event.target.location.value,
          hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
      });
      event.target.reset();
  }
  return (
      <Container style={{marginTop: "15px"}}>
      <Form onSubmit={submitHandler} style={{backgroundColor: "lightcyan", margin: "auto"}}>

          <legend style={{textAlign: "center"}}>Create Cookie Stand</legend>

          <Form.Group style={{backgroundColor: "lightcyan", margin: "auto"}}>
              <Form.Label htmlFor="location">Location</Form.Label>
              <Form.Control type="text" name="location" />
          </Form.Group>

          <Row style={{backgroundColor: "lightcyan", margin: "auto"}}>

              <Form.Group as={Col}>
                  <Form.Label htmlFor="min-customers">Minimum Customers per Hour</Form.Label>
                  <Form.Control type="number" name="min-customers" />
              </Form.Group>

              <Form.Group as={Col}>
                  <Form.Label htmlFor="max-customers">Maximum Customers per Hour</Form.Label>
                  <Form.Control type="number" name="max-customers" />
              </Form.Group>

              <Form.Group as={Col}>
                  <Form.Label htmlFor="avg-cookies">Average Cookies per Sale</Form.Label>
                  <Form.Control type="number" name="avg-cookies" step=".1" />
              </Form.Group>
              <Col style={{ backgroundColor: "darkcyan", color: "black", textAlign: "center", marginTop: "32px", borderRadius: "5px"}}>
              <Button style={{backgroundColor: "darkcyan", width: "100%", border:"none"}} type="submit">Create</Button></Col>
          </Row>

      </Form>
      </Container>
  )
}

