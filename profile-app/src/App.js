import './App.css';

function header() {
  return (
    <div className="App">
      <header style="text-align:center; font-size:75px">Sarah Yaw</header>
      <p style="text-align:center">Contact: syaw@emich.edu</p>
      <img src="" alt="Photo of Sarah"/>
      <hr/>
    </div>
  );
}

function education(){
  return(
    <div>
      <p style="background-color:#1B3737; width:100%; padding:10px; color:#F6F9FF">Education</p>
      <ul>
        <li>Bachelor of Science in Computer Science, April 2020 - GPA: 3.74   <br/>Eastern Michigan University, Ypsilanti, Michigan</li>
        <li>Master of Science, Computer Science - Expected December 2022   <br/>Eastern Michigan University, Ypsilanti, Michigan</li>
      </ul>
    </div>
  );
}
function skills(){
  return(
    <div>
      <p style="background-color:#1B3737; width:100%; padding:10px; color:#F6F9FF">Programming Proficiencies</p>
      <ul>
        <li>Adobe Photoshop, Illustrator, Indesign, Dreamweaver: 6 years</li>
        <li>Lucidpress: 4 years</li>
        <li>Canva: 4 years</li>
        <li>HTML &amp; CSS: 6 years</li>
        <li>Java: 6 years</li>
        <li>JavaScript: 3 years</li>
        <li>MySQL &amp; NoSql: 1.5 years</li>
        <li>Php: 1.5 years</li>
        <li>Python: 1.5 years</li>
      </ul>
    </div>
  );
}
function projects(){
  return(
    <div>
      <p style="background-color:#1B3737; width:100%; padding:10px; color:#F6F9FF">Projects</p>
      <ul>
        <li><a href="https://github.com/SarahYaw/CyberSec-HW2"></a>Develop an application which has the options: RSA, Diffie-Hellman, and Elliptic curve cryptography - In Progress</li>
        <li><a href="https://github.com/SarahYaw/592-PKI"></a>Rough PKI built for Cybersecurity class -. In Progress</li>
        <li><a href="https://github.com/SarahYaw/PRNG"></a>Here is a program of different PRNG algorithms researched and coded up for an Independent Study</li>
        <li><a href="https://github.com/SarahYaw/CommNetProj4"></a>Centralized Routing Via a Routing Matrix (Using Dijkstra)</li>
        <li><a href="https://github.com/SarahYaw/OSProj5"></a>Virtual Memory Simulation</li>
        <li><a href="https://github.com/SarahYaw/OSProj4"></a>OS simulator with I/O</li>
        <li><a href="https://github.com/SarahYaw/CommNetProj3"></a>Multithreaded client-server program with encryption</li>
        <li><a href="https://github.com/SarahYaw/OSProj3"></a>Simple scheduler simulator</li>
        <li><a href="https://github.com/SarahYaw/CommNetProj2"></a>Multithreaded client server project</li>
        <li><a href="https://github.com/SarahYaw/OSProj2">Multithreading and synchronization project for Operating Systems class</a></li>
      </ul>
    </div>
  );
}
function prevWork(){
  return(
    <div>
      <p style="background-color:#1B3737; width:100%; padding:10px; color:#F6F9FF">Previous Work</p>
      <ul>
        <li>Rock Solid Logistics - Brignhton, MI - Web Design Intern - April, 2021 to August, 2021</li>
        <li>Eastern Michigan University - Ypsilanti, MI - Graduate Assistant - September, 2020 to Present</li>
        <li>Eastern Michigan University - Ypsilanti, MI - Teaching Assistant - January, 2020 to April, 2020</li>
        <li>The Honors College at Eastern Michigan University - Ypsilanti, MI - Graphic Design Communications Student Fellow - September, 2017 to April, 2020</li>
      </ul>
    </div>
  );
}
export {header, education, skills, projects, prevWork};
