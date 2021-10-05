import './App.css';

export const education = () => {
    const subheader = {
        backgroundColor:"#98ABC8",
        padding:"10px", 
    };
    return(
    <div>
        <p style={subheader}>Education</p>
        <table>
            <tr><td>Bachelor of Science in Computer Science</td><td>April 2020, GPA: 3.74</td></tr><tr><td>Eastern Michigan University</td><td>Ypsilanti, Michigan</td></tr>
            <tr><td>Master of Science, Computer Science</td><td>Expected December 2022</td></tr><tr><td>Eastern Michigan University</td><td>Ypsilanti, Michigan</td></tr>
        </table>
    </div>   
    );
}
export const skills = () => {
    const subheader = {
        backgroundColor:"#98ABC8",
        padding:"10px", 
    };
    return(
    <div>
        <p style={subheader}>Programming Proficiencies</p>
        <ul>
            <li>Adobe Photoshop, Illustrator, Indesign, Dreamweaver: 6 years</li>
            <li>Lucidpress: 4 years</li>
            <li>Canva: 4 years</li>
            <li>HTML &amp; CSS: 6 years</li>
            <li>Java: 6 years</li>
            <li>JS: 3 years</li>
            <li>MySQL &amp; NoSql: 1.5 years</li>
            <li>Php: 1.5 years</li>
            <li>Python: 1.5 years</li>
        </ul>
    </div>
    );
}
export const projects = () => {
    const subheader = {
        backgroundColor:"#98ABC8",
        padding:"10px", 
    };
    return(
    <div>
        <p style={subheader}>Past Projects</p>
        <ul>
            <li><a href="https://github.com/SarahYaw/CyberSec-HW2">Develop an application which has the options: RSA, Diffie-Hellman, and Elliptic curve cryptography - In Progress</a></li>
            <li><a href="https://github.com/SarahYaw/592-PKI">Rough PKI built for Cybersecurity class -. In Progress</a></li>
            <li><a href="https://github.com/SarahYaw/PRNG">Here is a program of different PRNG algorithms researched and coded up for an Independent Study</a></li>
            <li><a href="https://github.com/SarahYaw/CommNetProj4">Centralized Routing Via a Routing Matrix (Using Dijkstra)</a></li>
            <li><a href="https://github.com/SarahYaw/OSProj5">Virtual Memory Simulation</a></li>
            <li><a href="https://github.com/SarahYaw/OSProj4">OS simulator with I/O</a></li>
            <li><a href="https://github.com/SarahYaw/CommNetProj3">Multithreaded client-server program with encryption</a></li>
            <li><a href="https://github.com/SarahYaw/OSProj3">Simple scheduler simulator</a></li>
            <li><a href="https://github.com/SarahYaw/CommNetProj2">Multithreaded client server project</a></li>
            <li><a href="https://github.com/SarahYaw/OSProj2">Multithreading and synchronization project for Operating Systems class</a></li>
        </ul>
      </div>
    );
}
export const prevWork = () => {
    const subheader = {
        backgroundColor:"#98ABC8",
        padding:"10px", 
    };
    return(
    <div>
        <p style={subheader}>Previous Work</p>
        <table>
            <tr><td>Rock Solid Logistics</td><td>Brighton, MI</td><td>Web Design Intern</td><td>April, 2021 to August, 2021</td></tr>
            <tr><td>Eastern Michigan University</td><td>Ypsilanti, MI</td><td>Graduate Assistant</td><td>September, 2020 to Present</td></tr>
            <tr><td>Eastern Michigan University</td><td>Ypsilanti, MI</td><td>Teaching Assistant</td><td>January, 2020 to April, 2020</td></tr>
            <tr><td>The Honors College at EMU</td><td>Ypsilanti, MI</td><td>Graphic Design Student Fellow</td><td>September, 2017 to April, 2020</td></tr>
        </table><br/>
      </div>
    );
}
export const intro = () => {
    return(
        <div>
            <p>Hello! My name is Sarah Yaw. This is an intro/CV page made to become more familiar with ReactJS. I have a BS in Applied Computer Science from Eastern Michigan University and I'm a Masters Student and Grad Assistant at EMU currently.</p>
        </div>
    );
}