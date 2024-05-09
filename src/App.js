import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css";
import Intro from './components/Intro';
import Tranding from './components/Trending';
import SuperHero from './components/SuperHero';

function App() {
  return (
    <div>
      {/* intro */}
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>
      {/* end intro */}

      {/* tranding */}
      <div className='trending'>
        <Tranding />
      </div>
      {/* end tranding */}

      {/* superhero */}
      <div className='superhero'>
        <SuperHero />
      </div>
      {/* end superhero */}
    </div >
  );
}

export default App;
