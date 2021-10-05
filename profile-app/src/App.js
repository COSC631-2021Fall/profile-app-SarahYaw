import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import picture from './assets/Sarah.png';
import light from './assets/background.png';
import dark from './assets/darkbackground.png';
import React, { useState } from 'react';
import * as body from './components';

var imgThemeID=1;
function changeBodyImg() {
  document.getElementsByClassName("ThemeButton")
  const imgTheme = ["url('"+light+"')","url('"+dark+"')"];  
  document.body.style.backgroundImage=imgTheme[imgThemeID];
  imgThemeID = ((imgThemeID+1)%2);

}

function App() {
  const NavBar = {
    backgroundColor:"#98ABC8",
    padding:0,
    marginLeft:"-4px",
    width:"100.9%",
    display:"inline-block",
  };
  const NavLi = {
    display:"inline",
    float:"left",
    paddingRight:"1%",
    paddingLeft:"1%",
    width:"auto",
  };
  const LinkSty = {
    display:"block",
    padding:"10px",
    color:"#EDE2EE",
    borderRight:"#EDE2EE solid 1px",
  };

  const divThemes = ["#CEE5E4", "#0e4870"];
  const [divThemeID, setdivThemeid] = useState(0);
  const txtThemes = ["#0e4870", "#CEE5E4"];
  const [txtThemeID, settxtThemeid] = useState(0);
  const switchTheme = () => {
    setdivThemeid((id) => (id+1)%2)
    settxtThemeid((id) => (id+1)%2)
    changeBodyImg();
  }
  return (
    <div style={{backgroundColor:divThemes[divThemeID], color:txtThemes[txtThemeID]}}>
      <img src={picture} alt="Sarah"/>
      <br/>
      <header>Sarah Yaw</header>
      <p>Contact: syaw@emich.edu</p>
      
      <BrowserRouter>
        <ul style={NavBar}>
          <li style={NavLi}><Link to="/education" style={LinkSty}>Education</Link></li>
          <li style={NavLi}><Link to="/skills" style={LinkSty}>Programming Profeciencies</Link></li>
          <li style={NavLi}><Link to="/projects" style={LinkSty}>Past Projects</Link></li>
          <li style={NavLi}><Link to="/prevWork" style={LinkSty}>Previous Work</Link></li>
          <li style={NavLi}><Link to="/all" style={LinkSty}>All</Link></li>
          <li style={NavLi}><Link to="/" style={LinkSty}>Bio</Link></li>
          <li style={NavLi}><button className="ThemeButton" onClick={switchTheme}>Toggle Theme</button></li>
        </ul><br/>

        <Route exact path="/" component={body.intro} />
        <Route path="/education" component={body.education} />
        <Route path="/skills" component={body.skills} />
        <Route path="/projects" component={body.projects} />
        <Route path="/prevWork" component={body.prevWork} />
        <Route path="/all"> 
          <body.intro/>
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
