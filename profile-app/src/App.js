import './App.css';
import picture from './assets/Sarah.png';

function App() {
  const subtitle = {
    color: "#0e4870",
    backgroundColor: "#CEE5E4",
  };
  return (
    <div className="App">
      <img src={picture} alt="Sarah"/>
      <header>Sarah Yaw</header>
      <p style={subtitle}>Contact: syaw@emich.edu</p>
    </div>
  );
}

export default App;
