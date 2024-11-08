import React, { useState } from 'react';
import axios from 'axios';
import WelcomeScreen from './components/WelcomeScreen';
import SurveyScreen from './components/SurveyScreen';
import ConfirmationDialog from './components/ConfirmationDialog';
import ThankYouScreen from './components/ThankYouScreen';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [stage, setStage] = useState('welcome');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [responses, setResponses] = useState({});
  const [sessionId] = useState(uuidv4());
  const startSurvey = () => setStage('survey');
  const handleResponseChange = (questionId, response) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionId]: response,
    }));
  };

  const handleCompleteSurvey = () => setShowConfirmation(true);
  const handleConfirmSubmit = () => {
    setShowConfirmation(false);

    // Save responses to backend
    axios.post('http://localhost:5000/api/responses', {
      sessionId,
      responses,
      status: "COMPLETED"
    })
    .then(() => {
      setStage('thankYou');
    })
    .catch((error) => {
      console.error("Error submitting survey responses:", error);
    });
  };

  const handleCancelSubmit = () => setShowConfirmation(false);
  const resetSurvey = () => setStage('welcome');
  return (
    <div className="App">
      {stage === 'welcome' && <WelcomeScreen onStart={startSurvey} />}
      {stage === 'survey' && (
        <SurveyScreen 
          onComplete={handleCompleteSurvey} 
          onResponseChange={handleResponseChange} 
          responses={responses}
        />
      )}
      {showConfirmation && (
        <ConfirmationDialog onConfirm={handleConfirmSubmit} onCancel={handleCancelSubmit} />
      )}
      {stage === 'thankYou' && <ThankYouScreen onTimeout={resetSurvey} />}
    </div>
  );
};

export default App;
