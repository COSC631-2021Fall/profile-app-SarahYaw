import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import picture from './assets/Sarah.png';
import * as body from './components';

function App() {
  const subtitle = {
    color: "#0e4870",
    backgroundColor: "#CEE5E4",
    paddingBottom:"19px",
    width:"100%",
  };
  const NavBar = {
    backgroundColor:"#0e4870",
    padding:0,
    marginLeft:"-10px",
    width:"102%",
    display:"inline-block",
  };
  const NavLi = {
    display:"inline",
    float:"left",
    paddingRight:"5%",
    paddingLeft:"1%",
    backgroundColor:"#0e4870",
    width:"auto",
  };
  const LinkSty = {
    display:"block",
    padding:"10px",
    backgroundColor:"#0e4870",
    width:"100%",
    color:"#8f9cc6",
  };
  return (
    <div className="App">
      <img src={picture} alt="Sarah"/>
      <br/>
      <header>Sarah Yaw</header>
      <p style={subtitle}>Contact: syaw@emich.edu</p>
      
      <BrowserRouter>
        <ul style={NavBar}>
          <li style={NavLi}><Link to="/education" style={LinkSty}>Education</Link></li>
          <li style={NavLi}><Link to="/skills" style={LinkSty}>Programming Profeciencies</Link></li>
          <li style={NavLi}><Link to="/projects" style={LinkSty}>Past Projects</Link></li>
          <li style={NavLi}><Link to="/prevWork" style={LinkSty}>Previous Work</Link></li>
          <li style={NavLi}><Link to="/all" style={LinkSty}>All</Link></li>
        </ul><br/>

        <Route path="/education" component={body.education} />
        <Route path="/skills" component={body.skills} />
        <Route path="/projects" component={body.projects} />
        <Route path="/prevWork" component={body.prevWork} />
        <Route path="/all"> 
          <body.education/>
          <body.skills/>
          <body.projects/>
          <body.prevWork/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
