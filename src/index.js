import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './style.css';

const DataQuestions = [

  {

    question: 'Comment declarer une variable en PHP ?',
    options: ['$variable=', 'variable'],
    answer: '$variable='

  },


  {

    question: 'Comment afficher ce texte: Hello_Word ?',
    options: [" echo 'Hello_Word'; " , "print('Hello_Word')"  ],
    answer: " echo 'Hello_Word'; "

  }


];

const QuizApp = () => {

  const[CurrentQuestionIndex, SetCurrentQuestionIndex] = useState(0);
  const[Score, SetScore] = useState(0);
  const[ShowScore, SetShowScore] = useState(false);



  const HandleAnswerButton = (SelectedOption) => {

    if(SelectedOption === DataQuestions[CurrentQuestionIndex].answer) {

      SetScore(Score + 1);

    }


  
  const NextQuestionIndex = CurrentQuestionIndex + 1;

  if (NextQuestionIndex < DataQuestions.length) {

    SetCurrentQuestionIndex(NextQuestionIndex);

  }

  else{

    SetShowScore(true);

  }


  }


  const RestartQuiz = () => {

    SetCurrentQuestionIndex(0);
    SetScore(0);
    SetShowScore(false);


  }


  return(

    <div>

      {ShowScore ? (

        <div>

        <h2>Votre Score est de {Score} / {DataQuestions.length} </h2>

        <br/>
        <br/>

        <button onClick={RestartQuiz}>Restart</button>

        </div>

        ):(

          <div>

            <h2>Question {CurrentQuestionIndex + 1} / {DataQuestions.length} </h2>

            <br/>
            

            <div>{DataQuestions[CurrentQuestionIndex].question}</div>

            <br/>
            <br/>

            <div>

              {DataQuestions[CurrentQuestionIndex].options.map((option, index) => (

                <button key={index} className='AnswerButton' onClick={() => HandleAnswerButton(option)}>{option}</button>



              ))}

        
            </div>

    </div>


)}


</div>



  ) 


}


ReactDOM.render(

  <React.StrictMode>

    < QuizApp />

  </React.StrictMode>,

  document.getElementById('root')


)



