import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.PNG";
import projImg3 from "../assets/img/project-img3.PNG";
import projImg4 from "../assets/img/project-img4.PNG";
import projImg5 from "../assets/img/project-img5.PNG";
import projImg6 from "../assets/img/project-img6.PNG";
import projImg7 from "../assets/img/project-img7.PNG";
import projImg8 from "../assets/img/project-img8.PNG";
import projImg9 from "../assets/img/project-img9.PNG";
import projImg10 from "../assets/img/project-img10.PNG";
import projImg11 from "../assets/img/project-img11.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Azania Izwe LoKudla",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Azania Izwe LoKudla",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Azania Izwe LoKudla",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Azania Izwe LoKudla",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Azania Izwe LoKudla",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Bachilli Lifestyle",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Bachilli Lifestyle",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "Bachilli Lifestyle",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "Bachilli Lifestyle",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "Bachilli Lifestyle",
      description: "Design & Development",
      imgUrl: projImg11,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>All the projects were created by me from Front-end to Back-end.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0, 6).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.slice(5, 11).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
