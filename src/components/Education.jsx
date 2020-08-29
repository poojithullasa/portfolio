import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  return (
    <React.Fragment>
      <Container style={{ margin: "80px auto 80px auto" }}>
      <div style={{textAlign:"center",paddingBottom:"22px"}}>
                <h1><b>My Education</b></h1>
            </div>
        <Row>
          <Col xs={4} md={4}>
            <Card>
                <Card.Img variant="top" src="https://d3jlwjv6gmyigl.cloudfront.net/images/2019/11/school1.jpg"/>
              <Card.Body>
                <Card.Title>D A V Public School</Card.Title>
                <Card.Text>
                    Vijayawada, Andhra Pradesh <br />
                    GPA- 9.7/10
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4}>
            <Card>
                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/students-interacting-each-other-making-friends-university-college-campus-tours-university-campus-events-campus-learning-161716781.jpg" />
              <Card.Body>
                <Card.Title>Srigayatri Education Institute</Card.Title>
                <Card.Text>
                    Vijayawada, Andhra Pradesh <br />
                    Percentage- 96.4%
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4}>
            <Card>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_jvbVFYhtEqf171QljkRj_2HEx8XayHA3YQ&usqp=CAU" />
              <Card.Body>
                <Card.Title>Lovely Professional University</Card.Title>
                <Card.Text>
                    Phagwara, Punjab <br />
                    GPA- 8.27/10 (Pursuing)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Home;
