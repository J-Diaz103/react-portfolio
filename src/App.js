import "bootswatch/dist/lux/bootstrap.min.css";
import Nav from "./components/Nav";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";


function App() {
  return (
    <div className="App">
      <Nav />
      <div className='content'>
        <About />
        <Portfolio />
        <Resume />
      </div>

    </div>
  );
}

export default App;
