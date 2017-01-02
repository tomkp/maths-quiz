import React from 'react';
import './questions.css';

import Question from '../question/Question';

import questions from '../questions'

export default () => {
    return (
        <form className="Questions">
            { questions
                .split('\n')
                .map(q => q.trim())
                .filter(q => q.length > 0)
                .map((data, index) => <Question key={index} index={index} data={data}/> )}
        </form>
    )
};

