import React from "react";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="logo">
              <img src="../" alt="logo" />
          </div>
          <button className="nav-toggle" aria-label="toggle navigation">
              <span className="home-nav"></span>
          </button>
          <nav className="nav">
              <ul className="nav__list">
                  <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                  <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                  <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
                  <li className="nav__item"><a href="#project" className="nav__link">Projects</a></li>
              </ul>
          </nav>
        </header>

        <section className="intro" id="home">
          <h1 className="section__title section__title--intro">
              Hi, I am <strong>Mario Gallardo</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">full stack dev</p>
          <img src="" alt="Profile Picture" className="intro__img" />
        </section>

        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">

                <div className="service">
                  <h3>Front End Development</h3>
                  <p>I began my journey into coding working through the front-end at
                      first.  Working with technologies such as HTML5, CSS, and JavaScript. 
                      Since beginning my journey I have became very comfortable using this language.
                      Take a look though my work!
                  </p>
                </div>

                <div className="service">
                  <h3>Back End Development</h3>
                  <p>Working through the back-end later in my career has built a new found
                      joy in coding for me!  Using technologies such as Express.js, Node.js, 
                      and MySQL building relational databases has became new found obsession!
                  </p>
                </div>

                <div className="service">
                  <h3>Full Stack Development</h3>
                  <p>Implementing my new found obsession of the back-end to my current knowledge
                      of front-end development has now made it possible for me to build full stack 
                      applications from scratch! Please take a look at my work to judge yourself!
                  </p>
                </div>
            </div>

            <a href="#work" className="btn">My Work</a>
        </section>

        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Full Stack Web Developer based out of Austin, Tx</p>

            <div className="about-me__body">
                <p>Hello all, my name is Mario Gallardo.  I am a full stack Web developer based 
                    out of Austin, Tx.  My current education includes a Bachelor of Science from 
                    Angelo State University in San Angelo, Tx. finishing with a overall GPA of 3.5.
                    I am currently wrapping up the Coding Bootcamp at the University of Texas Austin 
                    and expected to finish with a 4.0 GPA.
                </p>
                <p>When I am not coding some of my interest include.  Spending time with family and 
                    friends as well as my furry friend here!  Going on a nice run/hike/float pretty much 
                    anything involving getting some vitamin D!
                </p>
            </div>

            <img src="./assets/images/Kyro.jpg" alt="My Furry Friend" className="about-me__img" />
        </section>

        <section className="projects" id="project">
            <h2 className="section__title section__title--work">My Work</h2>
            <p className="section__subtitle section__subtitle--work">Recently worked on Projects</p>

            <div className="portfolio">
                <a href="#" className="portfolio__item" >
                    <img src="./assets/images/Penguin Post Snip.png" alt="Login page of Penguin Post" className="portfolio__img" />
                </a>

                <a href="#" className="portfolio__item" className="portfolio__item" >
                    <img src="./assets/images/noteTaker.png" alt="" className="portfolio__img" />
                </a>

                <a href="https://github.com/mgall13/run-buddy.git" className="portfolio__item" className="portfolio__item">
                    <img src="./assets/images/RunBuddy2.png" alt="Run Buddy Homepage" className="portfolio__img" />
                </a>

                <a href="https://github.com/mgall13/employee-tracker.git" className="portfolio__item" className="portfolio__item">
                    <img src="./assets/images/employeetracker.png" alt="" className="portfolio__img" />
                </a>

                <a href="#" className="portfolio__item" className="portfolio__item">
                    <img src="./assets/images/zookeeper.png" alt="" className="portfolio__img" />
                </a>

                <a href="#" className="portfolio__item" className="portfolio__item">
                    <img src="./assets/images/jestanotherRPG.png" alt="" className="portfolio__img" />
                </a>
               
            </div>
        </section>

        <footer className="footer">
            <a href="mailto:mariogallardo1331@yahoo.com" className="footer__link">mariogallardo1331@yahoo.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/mgall13">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/mario-gallardo/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com/G_mario13">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
            </ul>
        </footer>
      </div>
    );
  }
}

export default App;
