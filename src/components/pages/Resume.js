import '../styles/Style.css';
import resume from '../../img/docs/SKolb_Resume2021.pdf';

function Resume() {
  return (
    <section id="resume" class="resume section-bg">
      <div class="container">

        <div class="section-title">

          <h2>Resume     <a target='_blank' rel="noreferrer" href={resume} download="sKolb_Resume.pdf"><i class="fa fa-download"></i>
          </a></h2>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Coding: Full Stack Web Development Certificate</h4>
            <h5>2021</h5>
            <p><em>University of North Carolina at Chapel Hill</em></p>
            <p> A rigorous curriculum that ensured proficiency in: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js,
              Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git,
              and more.</p>
          </div>
          <div class="resume-item">
            <h4>Bachelor of Arts in Liberal Studies &amp; Humanities</h4>
            <h5>2009 - 2013</h5>
            <p><em>California State University, San Bernardino, CA</em></p>
            <p>A multidisciplinary degree program designed for students whose needs or interests require a more broadly
              based liberal arts curriculum than is possible through existing disciplines. This program is useful for
              careers requiring a broad educational background and strong communication, computer, research, and critical
              thinking skills.</p>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Middle School Teacher</h4>
            <h5>2018 - Present</h5>
            <p><em>Guilford County Schools, Greensboro, NC </em></p>
            <p>
            Create detailed lesson plans for in class and digital virtual learning. Coach, prepare, and assess over 120 students for proficiency on state standards. Maintain a projected learning growth in all grade 7 ELA classes for two consecutive years. Organize and host grade 7 Grade Level Meetings during in school instruction and digital virtual learning. Create an afterschool mathematics tutoring session for grade 7 students. Use multiple online/digital platforms, including Canvas, Google Docs, Google Classroom, Microsoft Suites, Blackboard, PlayPosit, ClassDojo, and Remind. Provide guidance and advice to students on educational and social matters and on their further education and future careers.
              </p><p>
              <ul>
                <li>Established a positive rapport with all students and parents through close interaction with parents and delivering exceptional coaching to students. </li>
                <li>Taught according to the educational needs, abilities, and achievement of the individual students and groups of students. </li>
                <li>Attained the award Rising Star through the GCS-ACT program.</li>
                <li>Consistently averaged 20% higher than school for state testing and 10% higher than district for the year 2020-2021.</li>
              </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>Co-Facilitator Instructor</h4>
            <h5>2019 - Present</h5>
            <p><em>GCS Alternative Certification Track, Greensboro, NC</em></p>
            <p>
            Performed as a co-facilitator with GCS-ACT for both foundation classes and summer building blocks. Supported teachers from varying subject areas and grade levels as teachers learned new concepts of unit design, using digital resources to further enhance virtual learning.
              </p><p>              <ul>
                <li>Forged strong relationships, provided instructional feedback, and established a virtual learning community during building blocks by using virtual platforms.</li>
                <li>Becoming a master in lesson design that filters over into my classroom and PLCs.</li>
              </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>Human Resource Manager</h4>
            <h5>2016 - 2018</h5>
            <p><em>Target, Manhattan Beach, CA</em></p>
            <p>
            Led all human resources functions for 300 employees. Performed talent management, recruitment, and human resources for multiple store locations.  Allocated payroll throughout the company and evaluated staffing requirements. Developed company policy and procedures applicable to all levels of the company. Organized and managed all local community volunteer events. Designed and allocated donation budgets district wide and build partnerships with local community directors to ensure successful events. Researched and drafted all leave of absence letters and recommended procedures to assure compliance with all applicable federal, state, and local laws. Established and maintained server documents according to state and federal guidelines. Proficient in multiple HRIS systems; Kronos, Paycom, Oracle, Target CW. Oversaw the implementation of all new policy and procedure. Guide key decisions and manage processes related to staffing, training, employee relations, performance management, succession planning, compensation and benefits. Process and handle all employee concerns or inquiries. Enhanced operational performance by coaching employees and handling any code of conduct or policy violations. Facilitated team building and training exercises.              
             </p><p>                 <ul>
                <li>Led store to recognition as a “Golden Contribution Store” after making yearly payroll and sales goals.</li>
                <li>Achieved and maintained the best team member turnover rate in the district.</li>
                <li>Attained a team survey score of 86%; the best in the district.</li>
                <li>Recruited and supported the hiring of over 150 people per season.</li>
              </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>Production Manager</h4>
            <h5>2013 - 2016</h5>
            <p><em>TEN: The Enthusiast Network, El Segundo, CA</em></p>
            <p>
            Designed and controlled production budgets for large events and production shoots. Devised and applied best management practices and executed shows and events within budget parameters. Steered end-to-end shows and event management operations, including the coordination of food, permits, equipment, and signage. Ensured operational excellence, reduced costs, and assured timely availability of material by managing vendor relations, closing supplier accounts, and controlling all stock and inventory manager. 
            </p><p>                             <ul>
                <li>Organized and directed an event of over 3K people and maintained within the budget.</li>
                <li>Increased employee knowledge and performance by developing new training procedures for office assistants and creating a training guide.</li>
                <li>Implemented best analysis and innovative strategies that doubled YouTube views.</li>
                <li>Hired, trained, and guided staff members.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Resume;