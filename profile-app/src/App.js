import './App.css';
import picture from './Sarah.png';

function App() {
  const subtitle = {
    color: "#053402",
    backgroundColor: "white",
  };
  return (
    <div className="App">
      <header>Sarah Yaw</header>
      <p style={subtitle}>Contact: syaw@emich.edu</p>
      <img src={picture} alt="Sarah"/>
    </div>
  );
}

export default App;
