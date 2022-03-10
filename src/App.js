import './App.css';
import { useState } from 'react';
import Quiz from './components/Quiz';
import Start from './components/Start';

function App() {
  //startPage : state to show Start page or Quiz page
  const [startPage, setStartPage] = useState(true);

  // toggles startPage state
  const showQuizPage = () => {
    setStartPage((prevValue) => {
      return !prevValue;
    })
  }

  return (
    <div className="App">
      <main>
        {startPage ? <Start showQuizPage={showQuizPage} /> : < Quiz showQuizPage={showQuizPage} />}
      </main>
    </div>
  );
}

export default App;
