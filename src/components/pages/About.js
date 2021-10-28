import '../styles/Style.css';

function About() {
  return (
    <section class="about">
      <div class="container">
        <div class="row ">
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div class="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div class="content d-flex flex-column justify-content-center">
              <div class="section-title">
                <h2>A Little Bit About Me...</h2>
                <p>
                  I am a dedicated professional currently undertaking Full Stack Web Development Certificate from University of North Carolina along with substantial experience in teaching, operational excellence, production management, and HR administration. I offer a vision-driven approach to decision making, strategic planning, and tactical implementation that I am excited to bring to your team.
                  <br></br><br></br>
                  Throughout my career, I have made it my priority to utilize current technologies and new techniques to drive elegant, creative solutions across a range of projects. Comfortable in both collaborative and independent roles, I offer refined analytical and critical thinking skills, and I can adapt and revise my strategies to meet evolving priorities, shifting needs, and emergent issues. I have proficiency in HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, and Git.
                  <br></br><br></br>
                  When I am not coding, you will find me with an iced coffee in hand, enjoying time with my husband,
                  daughter, and two dogs! If we are not outside soaking up the sun, we are playing games or finding
                  projects around the house to complete.
                </p>
              </div>
              <div class="section-title" id="skills">
                <div class="resume-section-content">
                  <h2>Skills</h2>
                  <div class="subheading mb-3">Programming Languages & Tools</div>
                  <ul class="list-inline dev-icons">
                    <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                    <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                    <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                    {/* <!-- <li class="list-inline-item"><i class="fab fa-angular"></i></li> --> */}
                    <li class="list-inline-item"><i class="fab fa-react"></i></li>
                    <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                    {/* <!-- <li class="list-inline-item"><i class="fab fa-sass"></i></li> --> */}
                    {/* <!-- <li class="list-inline-item"><i class="fab fa-less"></i></li> --> */}
                    {/* <!-- <li class="list-inline-item"><i class="fab fa-wordpress"></i></li> --> */}
                    {/* <!-- <li class="list-inline-item"><i class="fab fa-gulp"></i></li> --> */}
                    {/* <!-- <li class="list-inline-item"><i class="fab fa-grunt"></i></li> --> */}
                    <li class="list-inline-item"><i class="fas fa-database"></i></li>
                    <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                    <li class="list-inline-item"><i class="fab fa-bootstrap"></i></li>
                    <li class="list-inline-item"><i class="fab fa-git"></i></li>
                    <li class="list-inline-item"><i class="fab fa-github"></i></li>
                    <li class="list-inline-item"><i class="fab fa-gitlab"></i></li>

                  </ul>
                  <div class="subheading mb-3">Workflow</div>
                  <ul class="fa-ul">
                    <li>
                      <span class="fa-li"><i class="fas fa-check"></i></span>
                      Mobile-First, Responsive Design
                    </li>
                    <li>
                      <span class="fa-li"><i class="fas fa-check"></i></span>
                      Pair Programming
                    </li>
                    <li>
                      <span class="fa-li"><i class="fas fa-check"></i></span>
                      Cross Functional Teams 
                    </li>
                    <li>
                      <span class="fa-li"><i class="fas fa-check"></i></span>
                      REST APIs
                    </li>
                    <li>
                      <span class="fa-li"><i class="fas fa-check"></i></span>
                      Object-Oriented-Programming, OOP
                  </li>
                  <li>
                      <span class="fa-li"><i class="fas fa-check"></i></span>
                      CRUD Methods, Request Methods
                  </li>
                  <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    Jest, Express, Sequelize, Inquirer
                  </li>
                  <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    Test & Debugging Skills
                </li>
                  <li>
                      <span class="fa-li"><i class="fas fa-check"></i></span>
                      Agile Mindset
                  </li>
                  <li>
                    <span class="fa-li"><i class="fas fa-check"></i></span>
                    Results-Oriented, Ready to Learn
                </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
