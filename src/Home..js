import React from "react";
// import image4 from "./img/4.png";
//import image5 from "./img/5.png";
//import image9 from "./img/9.png";
//import image10 from "./img/10.png";
import ProjectSee from "./img/ProjectSee.png";
import "./Home.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="row">
       
        <div
          className="col-sm-12 col-lg-6"
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <div className="container">
            <h1 className="name">I'm Praveen Yadav</h1>
            <span className="subh">Full Stack Web Developer</span>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
         <a href="#next" className="text-decoration-none "><button className="btn btn-outline d-block mx-auto"
         style={{color:"#D5C455"}}
         >Know More</button></a>

        </div>
        <div className="col-lg-6 col-sm-12" style={{ backgroundColor: "#D5C455" }}>
          <img className="profileImg mx-auto d-block" src="https://praveenyadav.netlify.app/img/portfolio/004-large.jpg" alt="" />
        </div>
      </div>

      {/* Skill section */}


<div className="container">
      <div id="next" className="row skillsection mb-5">
        <hi className="skill mt-5 pb-5">
          <u style={{ textDecorationColor: "#D5C455" }}>My Skills</u>
        </hi>

        <div className="col-lg-3   mt-5 skillCircle mx-auto">
          <div className="badge text-dark progress-text" >
            <h3 className="" > <br/><br/> HTML & CSS</h3>
          </div>
        </div>

        <div className="col-lg-3   mt-5 skillCircle mx-auto">
          <div className="badge text-dark progress-text" >
            <h3 className="" > <br/><br/>PHP</h3>
          </div>
        </div>


        <div className="col-lg-3   mt-5 skillCircle mx-auto">
          <div className="badge text-dark progress-text" >
            <h3 className="" > <br/><br/>MySql</h3>
          </div>
        </div>


        <div className="col-lg-3   mt-5 skillCircle mx-auto">
          <div className="badge text-dark progress-text" >
            <h3 className="" > <br/><br/>ReactJs</h3>
          </div>
        </div>


        <div className="col-lg-3   mt-5 skillCircle mx-auto">
          <div className="badge text-dark progress-text" >
            <h3 className="" > <br/><br/>ExpressJs</h3>
          </div>
        </div>


        <div className="col-lg-3   mt-5 skillCircle mx-auto">
          <div className="badge text-dark progress-text" >
            <h3 className="" > <br/><br/>NodeJs</h3>
          </div>
        </div>


        <div className="col-lg-3   mt-5 skillCircle mx-auto">
          <div className="badge text-dark progress-text" >
            <h3 className="" > <br/><br/>Core Java</h3>
          </div>
        </div>


        <div className="col-lg-3   mt-5 skillCircle mx-auto">
          <div className="badge text-dark progress-text" >
            <h3 className="" > <br/><br/>C / C++</h3>
          </div>
        </div>


        <div className="col-lg-3   mt-5 skillCircle mx-auto">
          <div className="badge text-dark progress-text" >
            <h3 className="" > <br/><br/>Git / GitHub</h3>
          </div>
        </div>



        </div>

        {/* <div className="col-lg-5 mx-auto mt-5 progress-text progress-column">
          <div className="progress-wrap">
            <h3 className="progress-text">HTML & CSS</h3>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="col-lg-5 mx-auto mt-5 progress-text progress-column">
          <h3 className="progress-text">PHP</h3>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="col-lg-5 mx-auto mt-5 progress-text progress-column">
          <h3 className="progress-text">SQL</h3>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="col-lg-5 mx-auto mt-5 progress-text progress-column">
          <h3 className="progress-text">Core Java</h3>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="col-lg-5 mx-auto mt-5 progress-text progress-column">
          <h3 className="progress-text">C Programming</h3>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="col-lg-5 mx-auto mt-5 progress-text progress-column">
          <h3 className="progress-text">C++</h3>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="col-lg-5 mx-auto mt-5 progress-text progress-column">
          <h3 className="progress-text">ReactJS</h3>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="col-lg-5 mx-auto mt-5 progress-text progress-column">
          <h3 className="progress-text">GitHub & Git</h3>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="col-lg-5 mx-auto mt-5 progress-text progress-column">
          <h3 className="progress-text">JavaScript</h3>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div> */}
      </div>

      {/* Education Section */}

      <div className="row educationsection mb-5">
        <h1 className="skill mt-5 pb-5">
          <u style={{ textDecorationColor: "#D5C455" }}>Education</u>
        </h1>
        <ul>
          <li>
            <div className="circle text-center">
              <br />
              <h4>2017</h4>-<h4>2021</h4>
            </div>

            <div className="graduation float-end educationsection-panel">
              {" "}
              <b>
                <h3>Graduation</h3>
                <h4 style={{ color: "#D5C455" }}>Bachelor Of Technology</h4>
                <h5>Computer Science & Engineering</h5>
                Veer Bahadur Singh Purvanchal University{" "}
              </b>
            </div>
          </li>
          <div className="vl"></div>
          <li>
            <div className="circle text-center">
              <br />
              <br />
              <h4>2017</h4>
            </div>

            <div className="inter float-start">
              {" "}
              <b>
                <h3>Intermediate</h3>
                <h4 style={{ color: "#D5C455" }}>
                  Board of High School and Intermediate
                  <br />
                  Education Uttar Pradesh
                </h4>
                KAR Inter College{" "}
              </b>
            </div>
          </li>
          <div className="vl"></div>

          <li>
            <div className="circle text-center">
              <br />
              <br />
              <h4>2014</h4>
            </div>

            <div className="graduation float-end">
              {" "}
              <b>
                <h3>High School</h3>
                <h4 style={{ color: "#D5C455" }}>
                  Centeral Board of Secondary
                  <br />
                  Education
                </h4>
                Radhika Bal Vidya Mandir Sr. Sec. School
              </b>
            </div>
          </li>
        </ul>
      </div>

      {/* Project Section */}

      {/* <div className="row">
        <h1 className="skill mt-5 pb-5">
          <u style={{ textDecorationColor: "#D5C455" }}>My Projects</u>
        </h1>

        <div className="col-lg-4 col-sm-10 mx-auto mt-5">
          <div class="card card-flip h-100">
            <div className="card card-front">
              <div className="card-img">
                <img src="project01.png" alt="" style={{ width: "100%" }} />
              </div>
            </div>
            <div class="card-back bg-success">
              <div class="card-body">
                <h3 class="card-title text-center text-white">
                  <b>Weather Homelication</b>
                </h3>
                <div className="row fixed-bottom">
                  <div className="col-4 mx-auto text-center">
                    <a href="https://github.com/praveen12math/mobileWeather-Homelication">
                      <i class="fab fa-github text-white display-7">
                        {" "}
                        Source Code
                      </i>
                    </a>
                  </div>
                  <div className="col-4 mx-auto text-center">
                    <a href="https://myweathercondition.netlify.Home/">
                      <i class="fab fa-chrome text-white display-7"> Live</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-10 mx-auto mt-5">
          <div class="card card-flip h-100">
            <div className="card card-front">
              <div className="card-img">
                <img src="project02.png" alt="" style={{ width: "100%" }} />
              </div>
            </div>

            <div class="card-back bg-success">
              <div class="card-body">
                <h3 class="card-title text-center text-white">
                  <b>Online Quiz</b>
                </h3>
                <div className="row fixed-bottom">
                  <div className="col-4 mx-auto text-center">
                    <a
                      href="https://github.com/praveen12math/onlineQuiz"
                      target="_blank"
                    >
                      <i class="fab fa-github text-white display-7">
                        {" "}
                        Source Code
                      </i>
                    </a>
                  </div>
                  <div className="col-4 mx-auto text-center">
                    <a href="https://onlinexam.netlify.Home/" target="_blank">
                      <i class="fab fa-chrome text-white display-7"> Live</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-10 mx-auto mt-5">
          <div class="card card-flip h-100">
            <div className="card card-front">
              <div className="card-img">
                <img src="project03.png" alt="" style={{ width: "100%" }} />
              </div>
            </div>

            <div class="card-back bg-success">
              <div class="card-body">
                <h3 class="card-title text-center text-white">
                  <b>jaunpurbuilders</b>
                </h3>
                <div className="row fixed-bottom">
                  <div className="col-4 mx-auto text-center">
                    <a
                      href="https://github.com/praveen12math/jaunpurbuilders"
                      target="_blank"
                    >
                      <i class="fab fa-github text-white display-7">
                        {" "}
                        Source Code
                      </i>
                    </a>
                  </div>
                  <div className="col-4 mx-auto text-center">
                    <a href="http://jaunpurbuilders.rf.gd/" target="_blank">
                      <i class="fab fa-chrome text-white display-7"> Live</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-10 mx-auto mt-5">
          <div class="card card-flip h-100">
            <div className="card card-front">
              <div className="card-img">
                <img src="project04.png" alt="" style={{ width: "100%" }} />
              </div>
            </div>

            <div class="card-back bg-success">
              <div class="card-body">
                <h3 class="card-title text-center text-white">
                  <b>GitHub Dashboard</b>
                </h3>
                <div className="row fixed-bottom">
                  <div className="col-4 mx-auto text-center">
                    <a
                      href="https://github.com/praveen12math/GitHub-Api"
                      target="_blank"
                    >
                      <i class="fab fa-github text-white display-7">
                        {" "}
                        Source Code
                      </i>
                    </a>
                  </div>
                  <div className="col-4 mx-auto text-center">
                    <a
                      href="https://praveen12math.github.io/GitHub-Api/"
                      target="_blank"
                    >
                      <i class="fab fa-chrome text-white display-7"> Live</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-10 mx-auto mt-5">
          <div class="card card-flip h-100">
            <div className="card card-front">
              <div className="card-img">
                <img src="project05.png" alt="" style={{ width: "100%" }} />
              </div>
            </div>

            <div class="card-back bg-success">
              <div class="card-body">
                <h3 class="card-title text-center text-white">
                  <b>Tic Tac Toe Game</b>
                </h3>
                <div className="row fixed-bottom">
                  <div className="col-4 mx-auto text-center">
                    <a
                      href="https://github.com/praveen12math/Tic-Tac-Toe-Game"
                      target="_blank"
                    >
                      <i class="fab fa-github text-white display-7">
                        {" "}
                        Source Code
                      </i>
                    </a>
                  </div>
                  <div className="col-4 mx-auto text-center">
                    <a href="https://tictac-game.netlify.Home/" target="_blank">
                      <i class="fab fa-chrome text-white display-7"> Live</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-10 mx-auto mt-5">
          <div class="card card-flip h-100">
            <div className="card card-front">
              <div className="card-img">
                <img src="project06.png" alt="" style={{ width: "100%" }} />
              </div>
            </div>

            <div class="card-back bg-success">
              <div class="card-body">
                <h3 class="card-title text-center text-white">
                  <b>Generate Random User</b>
                </h3>
                <div className="row fixed-bottom">
                  <div className="col-4 mx-auto text-center">
                    <a
                      href="https://github.com/praveen12math/Generate-Random-User"
                      target="_blank"
                    >
                      <i class="fab fa-github text-white display-7">
                        {" "}
                        Source Code
                      </i>
                    </a>
                  </div>
                  <div className="col-4 mx-auto text-center">
                    <a href="http://userrandom.netlify.Home/" target="_blank">
                      <i class="fab fa-chrome text-white display-7"> Live</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <br />
      <br />
      <br />
      <br />

      <div className="row project  mt-5 mb-5">
        <div className="container">
          <img src={ProjectSee} className="mx-auto d-block" alt="" />
          <h1 className="text-center">
            <Link to="/project">See My Work / My Project</Link>
            <hr />
          </h1>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
