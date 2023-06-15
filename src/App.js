import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <h1 className="name">Kartik Swarnkar</h1>
            <h4 className="stacks">Full Stack Developer</h4>
            <p className="paragraph">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>

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
          </div>

          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="summary ">
              <p>
                Software Engineer possessing Comprehensive 5 years of experience
                as IT Professional
              </p>
              <p>3+ years of experience as Node Js Developer</p>
              <p>
                Hands on experience developing web-based applications with Node
                Js, Express in specific with React Js framework & Redux library.
              </p>
              <p>
                Experience on Cross Platform Server & Client-Server side
                applications design and development using Javascript language.
              </p>
              <p>
                Experience on ORACLE, SQL, MySQL, MongoDB & SQL Server concepts.
                And DB Design, DB normalization and writing SQL queries.
              </p>
            </div>

            <div className="work-experience margintop">
              <div className="main-card">
                <div className="row">
                  <div className="col-4 p-1">
                    <p className="card-text2">AUGUST 2021 - PRESENT</p>
                  </div>
                  <div className="col-8 p-1">
                    <h4 className="card-text1">
                      Node Js & Blockchain Developer (React Js)
                    </h4>
                    <h5 className="card-text3">
                      Hashcash Consultants 
                    </h5>

                    <ul className="lists">
                      <li>
                        Created & Implemented RESTful API for Blockchain
                        Exchange services
                      </li>
                      <li>
                        Creating detailed functional specifications, work-flow
                        diagrams & relevant documentation.
                      </li>
                      <li>
                        Planning, Designing, Implementing and maintenance of API
                        count & rate limit based applications
                      </li>
                      <li>
                        Developed a support system in React & Node Js for
                        generating issues tickets
                      </li>
                      <li>
                        Developed Newsletter (Subscriber) Marketing Web Application in React, Node Js & MySQL
                      </li>
                      <li>
                        Developed Application, Server & Logs monitoring in React
                        & Node Js
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="main-card">
                <div className="row">
                  <div className="col-4 p-1">
                    <p className="card-text2">AUGUST 2021 - PRESENT</p>
                  </div>
                  <div className="col-8 p-1">
                    <h4 className="card-text1">
                      Node Js & Blockchain Developer (React Js)
                    </h4>
                    <h5 className="card-text3">
                      Hashcash Consultants 
                    </h5>

                    <ul className="lists">
                      <li>
                        Created & Implemented RESTful API for Blockchain
                        Exchange services
                      </li>
                      <li>
                        Creating detailed functional specifications, work-flow
                        diagrams & relevant documentation.
                      </li>
                      <li>
                        Planning, Designing, Implementing and maintenance of API
                        count & rate limit based applications
                      </li>
                      <li>
                        Developed a support system in React & Node Js for
                        generating issues tickets
                      </li>
                      <li>
                        Developed Newsletter (Subscriber) Marketing Web Application in React, Node Js & MySQL
                      </li>
                      <li>
                        Developed Application, Server & Logs monitoring in React
                        & Node Js
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
