import React from "react";
import { Container } from "react-bootstrap";
import blackgorllia from "../assests/images/blackgorllia.png";
import line3 from "../assests/images/line3.png";
import roatateline from "../assests/images/roatateline.png";
const NewSection = () => {
  return (
    <div className="light-black py-5">
      <Container>
        <p className="text-white fs-xl lh-109 ff-SansUber fw-normal text-center pb-5">
          Roadmap
        </p>
        <div className="d-flex flex-col xxl-row">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <img
              className="circle-position d_none xxl-block"
              src={roatateline}
              alt="line"
            />
            <img className="pe-5 w-100" src={blackgorllia} alt="big" />
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <img
                className=" object-fit-contain d_none d-lg-block"
                src={line3}
                alt="3"
              />
              <div className="circle d-flex align-items-center justify-content-center ms-lg-3">
                <p className="ff-montserrat fw-900 lh-109 fs-s mb-0">20%</p>
              </div>
              <div className="d-flex flex-column justify-content-center ps-3 ps-lg-0">
                <p className="text-white fs-s fw-normal lh-109 ff-SansUber ps-lg-5 mt-3 mt-lg-0">
                  Phase 1
                </p>
                <p className="text-white fw-normal fs-xs lh-160 ff-montserrat max-width-539 ps-lg-5">
                  Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                  arcu viverra ullamcorper condimentum massa laoree
                </p>
              </div>
            </div>
            <div className="d-flex xxl-pl-79 pl-0 align-items-center justify-content-center lines">
              <span className="d_none d-lg-block">
                <svg
                  width="109"
                  height="12"
                  viewBox="0 0 109 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM97.6667 6.00001C97.6667 8.94553 100.054 11.3333 103 11.3333C105.946 11.3333 108.333 8.94553 108.333 6.00001C108.333 3.05449 105.946 0.666675 103 0.666675C100.054 0.666675 97.6667 3.05449 97.6667 6.00001ZM6 7L103 7.00001L103 5.00001L6 5L6 7Z"
                    fill="white"
                  />
                </svg>
              </span>{" "}
              <div className="circle d-flex align-items-center justify-content-center ms-lg-4">
                <p className="ff-montserrat fw-900 lh-109 fs-s mb-0">40%</p>
              </div>
              <div className="d-flex flex-column justify-content-center ps-3 ps-lg-0">
                <p className="text-white fs-s fw-normal lh-109 ff-SansUber ps-lg-5">
                  Phase 2
                </p>
                <p className="text-white fw-normal fs-xs lh-160 ff-montserrat max-width-550 ps-lg-5">
                  Amet viverra diam netus aenean at mauris, facilisis quis. Urna
                  euismod sed ultricies arcu ullamcorper
                </p>
              </div>
            </div>
            <div className="d-flex xxl-pl-120 pl-0 align-items-center justify-content-center lines">
              <sapn className="d_none d-lg-block">
                <svg
                  width="123"
                  height="12"
                  viewBox="0 0 123 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM111.667 6C111.667 8.94552 114.054 11.3333 117 11.3333C119.946 11.3333 122.333 8.94552 122.333 6C122.333 3.05448 119.946 0.666667 117 0.666667C114.054 0.666667 111.667 3.05448 111.667 6ZM6 7H117V5H6V7Z"
                    fill="white"
                  />
                </svg>
              </sapn>
              <div className="circle d-flex align-items-center justify-content-center ms-lg-4">
                <p className="ff-montserrat fw-900 lh-109 fs-s mb-0">60%</p>
              </div>
              <div className="d-flex flex-column justify-content-center ps-3 ps-lg-0">
                <p className="text-white fs-s fw-normal lh-109 ff-SansUber ps-lg-5">
                  Phase 3
                </p>
                <p className="text-white fw-normal fs-xs lh-160 ff-montserrat max-width-495 ps-lg-5">
                  Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in
                  elit nibh faucibus mauris.
                </p>
              </div>
            </div>
            <div className="d-flex xxl-pl-79 pl-0 align-items-center justify-content-center lines">
              <sapn className="d_none d-lg-block">
                <svg
                  width="97"
                  height="12"
                  viewBox="0 0 97 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM85.6667 6.00001C85.6667 8.94553 88.0545 11.3333 91 11.3333C93.9455 11.3333 96.3333 8.94553 96.3333 6.00001C96.3333 3.05449 93.9455 0.666674 91 0.666674C88.0545 0.666674 85.6667 3.05449 85.6667 6.00001ZM6 7L91 7.00001L91 5.00001L6 5L6 7Z"
                    fill="white"
                  />
                </svg>
              </sapn>
              <div className="circle d-flex align-items-center justify-content-center ms-lg-5">
                <p className="ff-montserrat fw-900 lh-109 fs-s mb-0">80%</p>
              </div>
              <div className="d-flex flex-column justify-content- ps-3 ps-lg-0">
                <p className="text-white fs-s fw-normal lh-109 ff-SansUber ps-lg-5">
                  Phase 4
                </p>
                <p className="text-white fw-normal fs-xs lh-160 ff-montserrat max-width-550 ps-lg-5">
                  Ut egestas lacus nec varius blandit volutpat, malesuada nunc,
                  nisl. Nisl mattis convallis lacus tristique.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center lines">
              <sapn className=" d_none d-lg-block white-line5">
                <svg
                  width="133"
                  height="12"
                  viewBox="0 0 133 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM121.667 6.00001C121.667 8.94553 124.054 11.3333 127 11.3333C129.946 11.3333 132.333 8.94553 132.333 6.00001C132.333 3.05449 129.946 0.666677 127 0.666677C124.054 0.666677 121.667 3.05449 121.667 6.00001ZM6 7L127 7.00001L127 5.00001L6 5L6 7Z"
                    fill="white"
                  />
                </svg>
              </sapn>
              <div className="circle d-flex align-items-center justify-content-center ms-lg-4">
                <p className="ff-montserrat fw-900 lh-109 fs-s mb-0">100%</p>
              </div>
              <div className="d-flex flex-column justify-content-center ps-3 ps-lg-0">
                <p className="text-white fs-s fw-normal lh-109 ff-SansUber ps-lg-5">
                  Phase 5
                </p>
                <p className="text-white fw-normal fs-xs lh-160 ff-montserrat max-width-593 ps-lg-5">
                  Faucibus congue risus nisl dictum. A, viverra malesuada nunc
                  varius. Ut dignissim mauris eu sed nisl neque.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
          <button className="read-btn fs-s ff-SansUber text-black fw-normal lh-109">
            {" "}
            READ OUR WHITPAPER
          </button>
        </div>
      </Container>
    </div>
  );
};

export default NewSection;
