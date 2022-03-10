import './App.css';
import { useState } from 'react';
import Quiz from './components/Quiz';
import Start from './components/Start';

function App() {
  const [startPage, setStartPage] = useState(true);

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
