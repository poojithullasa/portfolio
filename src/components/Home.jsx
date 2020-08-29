import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card,Button } from "react-bootstrap";
import pic from "./pic.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <Container style={{margin:"100px auto 100px auto"}}>
        <Row>
          <Col xs={7} mb={6}>
            <Card
              style={{
                borderStyle: "none",
                textAlign: "center",
                alignItems: "center",
                height: "25rem",
              }}
            >
              <Card.Body>
                <Card.Title style={{ marginTop:"50px",fontSize: "50px", fontWeight: "bolder" }}>
                  Hi, I'm Ullasa Poojith Sindhur.
                </Card.Title>
                <Card.Text style={{ fontSize: "25px" }}>
                  Cyber Security Student | Full Stack Developer | Seeking the
                  truth in Great Coding | Board Member of Thalassemia Free India
                  (LPU)
                </Card.Text>
                <Button variant="dark">
                  <Link to="/education">Education</Link>
                </Button>
                <Button variant="dark" style={{marginLeft:"30px"}}>
                  <Link to="/projects">Projects</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={5} mb={6}>
            <Card style={{ borderStyle: "none", height: "25rem" }}>
              <Card.Img variant="top" src={pic} />
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Home;
