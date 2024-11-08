import React, { useState } from 'react';
import questions from '../utils/questions';

const SurveyScreen = ({ onComplete, onResponseChange, responses }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete();
    }
  };
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const handleSkip = () => handleNext();
  const handleResponse = (e) => {
    onResponseChange(currentQuestion.id, e.target.value);
  };

  return (
    <div className="survey-screen">
      <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
      <p>{currentQuestion.question}</p>
      {currentQuestion.type === "rating" && (
        <input
          type="number"
          min="1"
          max={currentQuestion.scale}
          value={responses[currentQuestion.id] || ''}
          onChange={handleResponse}
        />
      )}
      {currentQuestion.type === "text" && (
        <textarea
          value={responses[currentQuestion.id] || ''}
          onChange={handleResponse}
        />
      )}
      <div className="navigation-buttons">
        {currentQuestionIndex > 0 && <button onClick={handlePrevious}>Previous</button>}
        <button onClick={handleSkip}>Skip</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default SurveyScreen;
