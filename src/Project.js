import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import "./Project.css"

const Project = () => {

   
useEffect(() => {

    function doAnime(){
        const left = document.querySelector(".left");
        const right = document.querySelector(".right");
        const container = document.querySelector(".container");
        
        left.addEventListener("mouseenter", () => {
          container.classList.add("hover-left");
        });
        
        left.addEventListener("mouseleave", () => {
          container.classList.remove("hover-left");
        });
        
        right.addEventListener("mouseenter", () => {
          container.classList.add("hover-right");
        });
        
        right.addEventListener("mouseleave", () => {
          container.classList.remove("hover-right");
        });
    }


    function doAnime1(){
        const left = document.querySelector(".left1");
        const right = document.querySelector(".right1");
        const container = document.querySelector(".container1");
        
        left.addEventListener("mouseenter", () => {
          container.classList.add("hover-left1");
        });
        
        left.addEventListener("mouseleave", () => {
          container.classList.remove("hover-left1");
        });
        
        right.addEventListener("mouseenter", () => {
          container.classList.add("hover-right1");
        });
        
        right.addEventListener("mouseleave", () => {
          container.classList.remove("hover-right1");
        });
    }


    function doAnime2(){
      const left = document.querySelector(".left2");
      const right = document.querySelector(".right2");
      const container = document.querySelector(".container2");
      
      left.addEventListener("mouseenter", () => {
        container.classList.add("hover-left2");
      });
      
      left.addEventListener("mouseleave", () => {
        container.classList.remove("hover-left2");
      });
      
      right.addEventListener("mouseenter", () => {
        container.classList.add("hover-right2");
      });
      
      right.addEventListener("mouseleave", () => {
        container.classList.remove("hover-right2");
      });
  }

  function doAnime3(){
    const left = document.querySelector(".left3");
    const right = document.querySelector(".right3");
    const container = document.querySelector(".container3");
    
    left.addEventListener("mouseenter", () => {
      container.classList.add("hover-left3");
    });
    
    left.addEventListener("mouseleave", () => {
      container.classList.remove("hover-left3");
    });
    
    right.addEventListener("mouseenter", () => {
      container.classList.add("hover-right3");
    });
    
    right.addEventListener("mouseleave", () => {
      container.classList.remove("hover-right3");
    });
}


function doAnime4(){
  const left = document.querySelector(".left4");
  const right = document.querySelector(".right4");
  const container = document.querySelector(".container4");
  
  left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left4");
  });
  
  left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left4");
  });
  
  right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right4");
  });
  
  right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right4");
  });
}


function doAnime5(){
  const left = document.querySelector(".left5");
  const right = document.querySelector(".right5");
  const container = document.querySelector(".container5");
  
  left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left5");
  });
  
  left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left5");
  });
  
  right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right5");
  });
  
  right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right5");
  });
}


doAnime()
doAnime1()
doAnime2()
doAnime3()
doAnime4()
doAnime5()
},[])

    return ( 
        <>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
  <Link class="navbar-brand" to="/">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#project1">Project 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#project2">Project 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#project3">Project 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#project4">Project 4</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#project5">Project 5</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#project6">Project 6</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


        <div className="projectPage">

  <div id="project1" className="container">
  <div className="split left">

  </div>
  
  <div className="split right">
    <h1>Weather Forecast
    <br/><br/>
    <h4 >Tech Stack</h4>
    <h6>AccuWeather API used &nbsp;&nbsp; <img src="AccuWeather.png" width="30" alt=""/></h6>
    <h6>Design on ReactJs &nbsp;&nbsp; <img src="logo192.png" width="30" alt=""/></h6>
    <h6>Tool used Bootstrap &nbsp;&nbsp;<img src="bootstrap.png" width="30" alt=""/></h6>
    <h6 style={{opacity:"0.9"}}><a href="#project2" className="text-white text-decoration-none"> Next</a></h6>

    </h1>
    
    <a href="https://github.com/praveen12math/mobileWeather-Application" target="_blank" className="button1 text-white"
    style={{opacity:"0.9"}}
    >Go to code</a>
    
    <a href="https://myweathercondition.netlify.app/" target="_blank" className="button2 btn text-white"
    style={{opacity:"0.9"}}
    >Go to live</a>
  </div>
  </div>



        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>



<div id="project2" className="container1">
<div className="split1 left1">

</div>
<div className="split1 right1">
<h1>Online Quiz
    <br/><br/>
    <h4 >Is is a quiz application</h4>
    <h6>Design on ReactJs &nbsp;&nbsp; <img src="logo192.png" width="30" alt=""/></h6>
    <h6>Used Bootstrap for UI design &nbsp;&nbsp; <img src="bootstrap.png" width="30" alt=""/></h6>
    <h6>Firebase used for database &nbsp;&nbsp; <img src="firebase.png" width="30" alt=""/></h6>
    <h6 style={{opacity:"0.9"}}><a href="#project3" className="text-white text-decoration-none"> Next</a></h6>

    </h1>
    
    <a  href="https://github.com/praveen12math/onlineQuiz" target="_blank"
    className="button1 text-white"
    style={{opacity:"0.9"}}
    >Go to code</a>
    
    <a href="https://onlinexam.netlify.app" target="_blank"
     className="button2 btn text-white"
    style={{opacity:"0.9"}}
    >Go to live</a>
</div>
</div>



<br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>



<div id="project3" className="container2">
<div className="split2 left2">

</div>
<div className="split2 right2">
<h1>jaunpurbuilders
    <br/><br/>
    <h4 >Is is a ecommerce website</h4>
    <h6>Design on HTML CSS &nbsp;&nbsp;</h6>
    <h6>Used Bootstrap for UI design &nbsp;&nbsp; <img src="bootstrap.png" width="30" alt=""/></h6>
    <h6>PHP used for sever side scripting &nbsp;&nbsp; <img src="php.png" width="30" alt=""/></h6>
    <h6>MYSQL used for database &nbsp;&nbsp; <img src="mysql.png" width="50" alt=""/></h6>
    <h6 style={{opacity:"0.9"}}><a href="#project4" className="text-white text-decoration-none"> Next</a></h6>

    </h1>
    
    <a href="https://github.com/praveen12math/jaunpurbuilders"
                      target="_blank" className="button1 text-white"
    style={{opacity:"0.9"}}
    >Go to code</a>
    
    <a href="http://jaunpurbuilders.rf.gd/" target="_blank" className="button2 btn text-white"
    style={{opacity:"0.9"}}
    >Go to live</a>
</div>
</div>






      <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>



<div id="project4" className="container3">
<div className="split3 left3">

</div>
<div className="split3 right3">
<h1>GitHub Dashboard
    <br/><br/>
    <h4 >It is a GitHub Dashboard App</h4>
    <h6>GitHub API used &nbsp;&nbsp; <img src="github.png" width="30" alt=""/></h6>
    <h6>Design on ReactJs &nbsp;&nbsp; <img src="logo192.png" width="30" alt=""/></h6>
    <h6>Used Bootstrap for UI design &nbsp;&nbsp; <img src="bootstrap.png" width="30" alt=""/></h6>
    <h6>Firebase used for Authentication &nbsp;&nbsp; <img src="firebase.png" width="30" alt=""/></h6>
    <h6 style={{opacity:"0.9"}}><a href="#project5" className="text-white text-decoration-none"> Next</a></h6>

    </h1>
    
    <a href="https://github.com/praveen12math/GitHub-Api"
                      target="_blank" className="button1 text-white"
    style={{opacity:"0.9"}}
    >Go to code</a>
    
    <a href="https://praveen12math.github.io/GitHub-Api/"
                      target="_blank" className="button2 btn text-white"
    style={{opacity:"0.9"}}
    >Go to live</a>
</div>
</div>



<br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>



<div id="project5" className="container4">
<div className="split4 left4">

</div>
<div className="split4 right4">
<h1>Tic Tac Toe Game
    <br/><br/>
    <h4 >It is a Tic Tac Toe game</h4>
    <h6>Design on ReactJs &nbsp;&nbsp; <img src="logo192.png" width="30" alt=""/></h6>
    <h6>Used Bootstrap for UI design &nbsp;&nbsp; <img src="bootstrap.png" width="30" alt=""/></h6>
    <h6 style={{opacity:"0.9"}}><a href="#project6" className="text-white text-decoration-none"> Next</a></h6>

    </h1>
    
    <a href="https://github.com/praveen12math/Tic-Tac-Toe-Game"
                      target="_blank" className="button1 text-white"
    style={{opacity:"0.9"}}
    >Go to code</a>
    
    <a href="https://tictac-game.netlify.app" target="_blank" className="button2 btn text-white"
    style={{opacity:"0.9"}}
    >Go to live</a>
</div>
</div>






<br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>



<div id="project6" className="container5">
<div className="split5 left5">

</div>
<div className="split5 right5">
<h1>Generate Random User
    <br/><br/>
    <h4 >It is generate user based in API</h4>
    <h6>Design on ReactJs &nbsp;&nbsp; <img src="logo192.png" width="30" alt=""/></h6>
    <h6>Used Bootstrap for UI design &nbsp;&nbsp; <img src="bootstrap.png" width="30" alt=""/></h6>

    </h1>
    
    <a href="https://github.com/praveen12math/Generate-Random-User"
                      target="_blank" className="button1 text-white"
    style={{opacity:"0.9"}}
    >Go to code</a>
    
    <a href="http://userrandom.netlify.app" target="_blank" className="button2 btn text-white"
    style={{opacity:"0.9"}}
    >Go to live</a>
</div>
</div>


<br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/>
<Footer/>
</div>
      </>
     );

}
 
export default Project;