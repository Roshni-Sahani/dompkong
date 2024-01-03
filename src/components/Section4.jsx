import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import bottleimg from "../assests/images/bottleimg.png";
import {Container, Row ,Col } from "react-bootstrap";

const Section4 = () => {
 const [count, setCount] = useState(1);
 const decrement = () => {
   if (count >= 2) {
     setCount(count - 1);
   }
 };
 if (count == 10) {
   document.getElementById("addzero").style.display = "none";
 } else if (count == 9) {
   document.getElementById("addzero").style.display = "block";
 }
  return (
    <>
      <div className="bg-img position-relative overflow-hidden py-5">
        <Container>
          <Row className="row align-items-center">
            <Col lg={6} className="text-center text-lg-center">
              <img src={bottleimg} alt="bottleimg" className="max-w-100" />
            </Col>
            <Col lg={6} className="text-center text-lg-start">
              <p className="text-white fs-xl lh-109 fw-normal ff-SansUber mt-3 mt-lg-0">
                Mint NFT
              </p>
              <Row>
                <Col className="col-6">
                  <p className="ff-montserrat fw-900 text-white fs-lg lh-109">
                    9999{" "}
                  </p>
                  <p className="fs-xs ff-montserrat fw-normal text-white lh-109">
                    of 10,000 minted
                  </p>
                </Col>
                <Col className="col-6">
                  <p className="ff-montserrat fw-900 text-white fs-lg lh-109">
                    .2 ETH
                  </p>
                  <p className="fs-xs ff-montserrat fw-normal text-white lh-109">
                    per NFT
                  </p>
                </Col>
                <Col className="col-6">
                  <p className="ff-montserrat fw-900 text-white fs-lg lh-109 pt-4">
                    Max 9{" "}
                  </p>
                  <p className="fs-xs ff-montserrat fw-normal text-white lh-109">
                    NFTs per transaction
                  </p>
                </Col>
                <Col className="col-6">
                  <p className="ff-montserrat fw-bolder text-white fs-lg lh-109 pt-4">
                    Max 2
                  </p>
                  <p className="fs-xs ff-montserrat fw-normal text-white lh-109">
                    Transaction per wallet
                  </p>
                </Col>
                <div className="d-flex align-items-center gap-3">
                  <Button
                    className="small-btn text-black fw-900 fs-lg lh-109 ff-montserrat pb-2"
                    onClick={decrement}
                  >
                    -
                  </Button>
                  <div className="count-btn d-flex align-items-center justify-content-center">
                    <p className="mx-auto text-white lh-109 text-center mb-0 fw-900  fs-lg ff-montserrat d-flex">
                      {" "}
                      <span id="addzero">0</span>
                      {count}
                    </p>
                  </div>
                  <Button
                    className="small-btn text-black fw-900 fs-lg lh-109 ff-montserrat pb-2"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </Button>
                </div>
                {/* <div className="d-flex align-items-center gap-3 mt-5 justify-content-center justify-content-lg-start">
                  <Button
                    onClick={decrementCount}
                    className="small-btn text-black fw-900 lh-109 ff-montserrat fs-lg"
                  >
                    -
                  </Button>
                  <div className="count-btn d-flex align-items-center justify-content-center">
                    <p className=" mx-auto text-white lh-109 d-flex  text-center mb-0 fw-900">
                      {" "}
                      {count}
                    </p>
                  </div>
                  <Button
                    onClick={incrementCount}
                    className="small-btn text-black fw-900 fs-lg lh-109 ff-montserrat"
                  >
                    +
                  </Button>
                </div> */}
              </Row>
              <div className="mt-4">
                <button className="mint-btn ff-SansUber fw-normal lh-109 text-nowrap fs-md text-nowrap">
                  MINT NOW
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="ellpise6"></div>
        <div className="ellpise6-yellow"></div>
      </div>
    </>
  );
};

export default Section4;
