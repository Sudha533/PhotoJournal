//import logo from './logo.svg';
import './App.css';
import BannerImage from './Components/BannerImage';
import Album from './Components/Album';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage alt="banner image" bannerImage ="banner.jpg"/>
        
        <div>
         <h1> Welcome to My photo Gallery!</h1>
         <h3>Sudha Subramaniam</h3>
         <Album/>
        </div>
        
      </header>
      
    </div>
  );
}

export default App;
