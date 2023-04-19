import logo from './logo.svg';
import './App.css';



function ReactLogo(){
  return(
    <>
     <img src={logo} className="App-logo" alt="logo" />
    </>
  )
}


function ReactBenefits(){
  return(
    <>
     <h1>Benefits of using react...</h1>
     <li>component-based architecture</li>
        <li>virtual Dom for efficient updates</li>
        <li>Rich ecosystem and community</li>
        <li>cross-platform development</li>
        <li>strong community support</li>
    </>
  )
}

function Button(){
  return(
    <button>Get started...</button>
  )
}

function App() {
  return (
    <div className="App">
      



      <ReactLogo/>
      <ReactBenefits/>
      <Button/>
    </div>
  );
}

export default App;
