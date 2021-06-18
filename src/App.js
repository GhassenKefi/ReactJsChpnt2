import './App.css';
import './Style.css';
import imageInSrc from "./imageInSrc.jpg";


function App() {
  return (
    <div className="App">
    <div style={{border:'solid 1px black',maxwidth:'100vw'}}>

        <h1 className="title red">Flowers</h1>

        <br/>

        <img src={imageInSrc} alt="first" />

        <br/>
        <img src="/imageInPublic.jpg" alt="second" />

    </div>
        <video width="320" height="240" controls>
            <source src="myVideo.mp4" type="video/mp4" />
        </video>
  
    </div>
  );
}

export default App;
