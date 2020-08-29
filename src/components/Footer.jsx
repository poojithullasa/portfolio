import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <hr />
      <div>
        <Container>
          <Row>
            <Col xs={6}>
              <Card style={{ border: "hidden", textAlign: "center" }}>
                <Card.Body>
                  <Card.Title>Let's Work Together</Card.Title>
                  <Card.Text>Have a project you'd like to discuss?</Card.Text>
                  <Button variant="dark">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={6}
              style={{
                paddingTop: "1.5%",
              }}
            >
              <div>
                <ul>
                  <li>
                    <svg
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                    </svg>
                    <a
                      style={{ display: "inline", textDecoration: "none" }}
                      href="mailto:upsy.0515@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      upsy.0515@gmail.com
                    </a>
                  </li>
                  <li>
                    <svg
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                    <a
                      style={{ display: "inline", textDecoration: "none" }}
                      href="mailto:upsy.0515@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <svg
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM6 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                    </svg>
                    <a
                      style={{ display: "inline", textDecoration: "none" }}
                      href="https://github.com/poojithullasa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
    </React.Fragment>
  );
};
export default Footer;
