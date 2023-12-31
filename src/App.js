import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    id: 1,
    text: 'React hangi dilde yazılmıştır?',
    options: ['Java', 'JavaScript', 'Python', 'C++'],
    correctAnswer: 'JavaScript',
  },
  {
    id: 2,
    text: 'React hangi şirket tarafından geliştirilmiştir?',
    options: ['Google', 'Microsoft','Facebook', 'Apple'],
    correctAnswer: 'Facebook',
  },
  {
    id: 3,
    text: "React'te state nasıl yönetilir?",
    options: ['useState()', 'useEffect()', 'useContext()', 'useReducer()'],
    correctAnswer: 'useState()',
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(questions.length).fill(null));
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>React Quiz</h1>

      {showResults ? (
        <div>
          <h2>Sonuçlar</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={question.id}>
                {question.text} - Cevabınız: {userAnswers[index] === question.correctAnswer ? 'Doğru' : 'Yanlış'}
              </li>
            ))}
          </ul>
          <button onClick={resetQuiz}>Quiz'i Sıfırla</button>
        </div>
      ) : (
        <div>
          <h2>Soru {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex].text}</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option) => (
              <li key={option} onClick={() => handleAnswerClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p>MADE BY İBRAHİM GÜNDÜZ FOR MEGA;Üretken Akademi in 2023</p>
    </div>
    
  );
}

export default App;
