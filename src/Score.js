import React from 'react';

/* Stateless Functional Component. */

const Score = props => {

  	return (
      <p className="text">
        Your Score: {props.numCorrect}/{props.numQuestions}
      </p>
    );
};

export default Score;