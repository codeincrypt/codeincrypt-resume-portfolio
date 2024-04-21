import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import project from "../assets/data/project.json"
import Loader from "../components/Loader";
const Landing = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  
  if(loading){
    return ( 
      <div className="App">
        <Loader />
      </div>
     )
  }

  return (
    <div className="App">
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

          <Link className="main-btn" to="https://github.com/codeincrypt">
            View More
          </Link>
        </div>

        <div>
          <h1 className="main-title mt-5">Technologies</h1>
          <p className="main-para">
            I've worked with a range of Programming Languages and web
            development world from Design to Back-End
          </p>
        </div>

        <div>
          <h1 className="main-title">Projects</h1>
          <p className="main-para">
            I've worked with a range of Programming Languages and web
            development world from Design to Back-End - {process.env.PUBLIC_URL}
          </p>

          <div className="col-lg-12 mt-4">
            <div className="row">
              {project.map((item, index) => (
                <div className="col-lg-4 mb-4" key={index}>
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
                      {item.tools.map((t, index) => (
                        <button type="button" className="chips">{t}</button>
                      ))}
                        </div>
                      <div className="text-right mt-4">
                        {item.githubLink ?? (
                          <Link to={item.githubLink} className="btn btn-view mr-2" >
                            Github
                          </Link>
                        )}
                        {item.projectLink !== "" ? (
                          <Link to={item.projectLink} className="btn btn-view" >
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
          <h1 className="main-title">About me</h1>
          <p className="main-para">
            Hello👋, I'm Kartik Swarnkar A middler at BNMU pursuing BCA
            (Computer Application)👩‍💻. I am an enthusiastic👀 and a person take
            up new challenges🎯 and learn new skills⚙️. I love💛 meeting new
            people👩🏽‍🚀, exchanging ideas💡 and spreading knowledge🗂 and
            positivity🌈.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
