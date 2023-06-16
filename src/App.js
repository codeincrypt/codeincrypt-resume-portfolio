import "./App.css";
import React from "react";
import data from "./resume.json";

function App() {
  const [cursorStyle, setCursorStyle] = React.useState({});

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const cursorSize = 50; // Adjust the size of the cursor

    const cursorStyle = {
      top: clientY - cursorSize / 2,
      left: clientX - cursorSize / 2,
      width: cursorSize,
      height: cursorSize,
    };

    setCursorStyle(cursorStyle);
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      {/* <div className="cursor" style={cursorStyle}></div> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="sidebarfixed">
              <div className="sidebarcenter">
                <h1 className="name">{data.personal.name}</h1>
                <h4 className="stacks">{data.personal.tech}</h4>
                {/* <p className="paragraph">{data.personal.aboutus}</p> */}

                <ul className="mylist-array margintop">
                  <li className="mylist items-center">
                    <span className="nav-indicator"></span>
                    <span className="nav-text"> About </span>
                  </li>
                  <li className="mylist items-center">
                    <span className="nav-indicator"></span>
                    <span className="nav-text"> Work Experience </span>
                  </li>
                  <li className="mylist items-center">
                    <span className="nav-indicator"></span>
                    <span className="nav-text"> Projects </span>
                  </li>
                  <li className="mylist items-center">
                    <span className="nav-indicator"></span>
                    <span className="nav-text"> Skills </span>
                  </li>
                  <li className="mylist items-center">
                    <span className="nav-indicator"></span>
                    <span className="nav-text"> Education </span>
                  </li>
                  <li className="mylist items-center">
                    <span className="nav-indicator"></span>
                    <span className="nav-text"> Language </span>
                  </li>
                </ul>

                <div className="margin2">
                  {data.socialMedia.map((item, index) => (
                    <a target="_blank" rel="noreferrer" href={item.link} class="fa-stack">
                      <i class={`fa ${item.icon} default-color`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-1"></div>
          <div className="col-lg-5 rightsidebar">
            <div id="summary" className="summary ">
              <h4 className="title">Summary</h4>
              {data.about.map((item, index) => (
                <p className="card-text4 mb-0">{item}</p>
              ))}
            </div>

            <div id="work-experience" className="work-experience margintop">
              <h4 className="title">Work Experience</h4>
              {data.workExperience.map((item, index) => (
                <div className="main-card">
                  <div className="row">
                    <div className="col-4 p-1">
                      <p className="card-text2">{item.date}</p>
                    </div>
                    <div className="col-8 p-1">
                      <h4 className="card-text1">{item.position}</h4>
                      <h5 className="card-text3">{item.organisation}</h5>

                      <ul className="lists">
                        {item.summary.map((item, index) => (
                          <li>{item}</li>
                        ))}
                      </ul>

                      <div>
                        {item.technology.map((item, index) => (
                          <button className="chips">{item}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div id="education" className="education margintop">
              <h4 className="title">PROJECTS</h4>
              {data.projects.map((item, index) => (
                <div className="main-card">
                  <h4 className="card-text1">{item.name}</h4>
                  <ul className="lists">
                    {item.summary.map((item, index) => (
                      <li>{item}</li>
                    ))}
                  </ul>

                  <div>
                    {item.technology.map((item, index) => (
                      <button className="chips">{item}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div id="education" className="education margintop">
              <h4 className="title">EDUCATION</h4>
              {data.education.map((item, index) => (
                <div className="main-card">
                  <h4 className="card-text1">{item.degree}</h4>
                  <h5 className="card-text3">{item.college}</h5>
                  <p className="card-text2 mb-0">{item.year}</p>
                </div>
              ))}
            </div>

            <div id="skills" className="skills margintop">
              <h4 className="title">skills</h4>
              {data.skills.map((item, index) => (
                <div className="main-card">
                  <h6 className="mb-0">
                    <b className="card-text5">{item.name}</b> :{" "}
                    <span className="card-text4">{item.details}</span>
                  </h6>
                </div>
              ))}
            </div>

            <div id="language" className="language margintop">
              <h4 className="title">LANGUAGE</h4>
              {data.language.map((item, index) => (
                <div className="main-card">
                  <h4 className="card-text1">{item.name}</h4>
                  <h5 className="card-text2 text-right mb-0">{item.level}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
