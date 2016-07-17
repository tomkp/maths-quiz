import React from 'react';
import './questions.scss';

import Question from './Question';

import questions from '../questions'

export default () => {
    return (
        <ul className="questions">
            { questions.map((data, index) => <Question key={index} data={data}/> )}
        </ul>
    )
};

