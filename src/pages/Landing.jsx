import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import project from "../assets/data/project.json";
import Loader from "../components/Loader";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiAmazonaws,
  SiTypescript,
  SiGrafana,
  SiPython,
  SiPrometheus,
  SiAntdesign,
  SiOracle,
  SiUbuntu,
  SiGithub,
  SiLinkedin,
  SiMedium,
  SiBookstack,
} from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import Header from "../components/Header";

const Landing = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 9000);
  }, []);

  if (loading) {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <div className="container containers margintop">
        <div className="margintop">
          <h1 className="main-title">
            Welcome to <br />
            My Personal Portfolio
          </h1>

          <p className="main-para">
            I'm Kartik Swarnkar, a passionate Programmer having proficiency in
            multi programming languages. I love coding and interested to
            collaborate to an open source projects.
          </p>

          <Link className="main-btn" to="/resume">
            View More
          </Link>
        </div>

        <div className="margintop">
          <span className="top-border"></span>
          <h1 className="main-title mt-5">Technologies</h1>
          <p className="main-para">
            I've worked with a range of Programming Languages and web
            development world from Design to Back-End
          </p>

          <div className="row tech mb-5">
            <div className="col-lg-4 mb-5">
              <h2 className="font-weight-bold">Front-End</h2>
              <h6 className="mb-3">
                Experiece with Javascript & Typescript React Js & Next Js, Harness
              </h6>
              <FaReact title="React Js" />
              <SiNextdotjs title="Next Js" />
              <SiAntdesign title="Ant Design" />
              <BsFillBootstrapFill title="Bootstrap, React Bootsrap" />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4 mb-5">
              <h2 className="font-weight-bold">Back-End</h2>
              <h6 className="mb-3">
                Experiece with Javascript & Typescript in Node Js and Python
              </h6>
              <FaNodeJs title="Node Js" />
              <SiPython title="Python" />
              <SiTypescript title="Typescript" />
              <SiJavascript title="Javascript" />
            </div>

            <div className="col-lg-4 mb-5">
              <h2 className="font-weight-bold">Database</h2>
              <h6 className="mb-3">
                Experiece with MySQL (Type ORM), MongoDB (Mongoose), Oracle DB &
                Postgres DB
              </h6>
              <SiMysql title="Mysql DB" />
              <SiMongodb title="Mongo DB" />
              <SiPostgresql title="Postgresql DB" />
              <SiOracle title="Oracle DB" />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4 mb-5">
              <h2 className="font-weight-bold">Cloud & Devops</h2>
              <h6 className="mb-3">
                Experiece with AWS (S3, EC2, SNS, KMS, Secret Manager), Grafana &
                Prometheus
              </h6>
              <SiAmazonaws title="Amazon Web Services - S3, EC2, Secret Manager, SNS" />
              <SiGrafana title="Grafana" />
              <SiPrometheus title="Prometheus" />
              <SiUbuntu title="Ubuntu Server - Commands" />
            </div>
          </div>
        </div>

        <div>
          <span className="top-border"></span>
          <h1 className="main-title">Projects</h1>
          <p className="main-para">
            I've worked with a range of Programming Languages and web
            development world from Design to Back-End
          </p>

          <div className="col-lg-12 mt-4">
            <div className="row">
              {project.map((item, index) => (
                <div className="col-lg-4 mb-4" key={item.name}>
                  <div className="card p-0">
                    <img
                      src={require(`./../assets/images/${item.image}`)}
                      alt={item.name}
                      className="img-fluid img-responsive"
                    />
                    <div className="card-body p-4">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <div className="text-right mt-4">
                        {item.tools.map((element, index) => (
                          <button type="button" className="chips">
                            {element}
                          </button>
                        ))}
                      </div>
                      <div className="text-right mt-4">
                        {item.githubLink !== "" ? (
                          <Link
                            to={item.githubLink}
                            className="btn btn-view me-3"
                          >
                            Github
                          </Link>
                        ) : null}
                        {item.projectLink !== "" ? (
                          <Link to={item.projectLink} className="btn btn-view">
                            Project
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <span className="top-border"></span>
          <h1 className="main-title">About me</h1>
          <p className="main-para">
            Hello👋, I'm Kartik Swarnkar A middler at BNMU pursuing BCA
            (Computer Application)👩‍💻. I am an enthusiastic👀 and a person take
            up new challenges🎯 and learn new skills⚙️. I love💛 meeting new
            developers👩🏽‍🚀, exchanging ideas💡 and spreading knowledge🗂 and
            positivity🌈.
          </p>

          <p className="main-para">
          <SiBookstack /> <br />
            <b>BCA (Bachelor of Computer Applications)</b> <br />
            <i>Purnea College Purnea (BNMU), Bihar</i>
          </p>
        </div>

        <div className="mt-5">
          <hr />
          <div className="row">
            <div className="col-lg-6">
              <p className="mt-4">EMAIL</p>
              <p className="main-para">dev.kartikswarnkar@gmail.com</p>
            </div>
            <div className="col-lg-6" style={{ textAlign: "right" }}>
              <h2 className="mt-4">
                <Link
                  className="text-white me-3"
                  to="https://github.com/codeincrypt"
                >
                  <SiGithub />
                </Link>
                <Link
                  className="text-white me-3"
                  to="https://www.linkedin.com/in/codeincrypt/"
                >
                  <SiLinkedin />
                </Link>
                <Link
                  className="text-white me-3"
                  to="https://medium.com/@codeincrypt"
                >
                  <SiMedium />
                </Link>
              </h2>
            </div>
          </div>
          <div className="row justify-content-center mb-5 text-center">
            <p>
              ©️ Designed with 💖 by{" "}
              <Link className="text-white" to="https://github.com/codeincrypt">
                Kartik Swarnkar
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
