import React from "react";
import groupimg from "../assests/images/groupimg.png";
import { Col, Container, Row } from "react-bootstrap";
const Section1 = () => {
  return (
    <>
      <div className="light-black py-lg-5 pt-3 postion-relative z-1">
        <Container className="py-lg-5">
          <Row>
            <Col
              lg={6}
              className="text-center text-lg-start"
            >
              <p className="fs-xl fw-normal lh-109 text-white ff-SansUber">
                About
              </p>
              <p className="text-white lh-160 fs-xs fw-normal ff-montserrat mw-522">
                Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae
                viverra amet et. Erat nam molestie. Vitae mollis lacus senectus
                mattis nisl. Porta , adipiscing sed mus diam amet, ac sed
                tellus.{" "}
              </p>
            </Col>
            <Col lg={6}>
              <div className="d-none d-lg-block">
                <div className="yellow-ellipse"></div>
              </div>
              <img src={groupimg} alt="logo" className="w-100 aiimg" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Section1;
