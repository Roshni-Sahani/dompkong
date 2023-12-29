import React from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";

const Section2 = () => {
  return (
    <>
      <div className="light-black py-5">
              <Container className="py-4">
                  <p className="text-white ff-SansUber fs-xl lh-109 text-center fw-normal">Utilities</p>
          <Cards />
        </Container>
      </div>
    </>
  );
};

export default Section2;
