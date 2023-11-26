import './App.css';
import Header from './components/Header';

import PictureGallery from './components/PictureGallery';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="App">
      <Header/><PictureGallery/><VideoPlayer/>
    </div>
  );
}

export default App;
