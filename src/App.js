import neko from './neko01.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>MySite</h1>
      <figure>
        <img src={neko} alt="ねこちゃん" />
        <figcaption>Github Pagesのテストです</figcaption>
      </figure>
    </div>
  );
}

export default App;
