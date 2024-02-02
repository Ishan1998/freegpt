import React, { useState } from 'react';
import './style.css';
import logo from './logo.png';

function App() {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleButtonClick = async () => {

    const newQuestion = userInput;

    
    const response = await fetch(
      'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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',
        },
        body: JSON.stringify({ inputs: newQuestion }),
      }
    );

    const data = await response.json();
    console.log(data)
    const aiReply = data[0].generated_text; 


    setAiResponse(aiReply);
    console.log(aiReply)
  };

  return (
    <div className="container">
        <h1>WELCOME TO FREE GPT!</h1>
        <p>Developed by Ishan Rathore</p>
        <img className='logo' src={logo} alt="" />
        {aiResponse && (
          <div className="ai-response">
            <p><strong>FreeGPT:</strong> {aiResponse}</p>
          </div>
        )}
        <div className='input'>
        <div className='textarea-container'>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder='Type your question here....'
            rows="3"
            cols="100"
          ></textarea>
          <button type="button" onClick={handleButtonClick}>
            
            
          </button>
        </div>
      </div>
      </div>
  );
}

export default App;
