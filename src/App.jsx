import './App.css';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Article name="Article 1" titles={['title 1', 'title 2', 'title 3']} />
      <br />
      <Article name="Article 2" titles={['title 4', 'title 5', 'title 6']} />
    </div>
  );
}

export default App;
