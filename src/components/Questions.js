import React from 'react';
import './questions.scss';

import Question from './Question';

import questions from '../questions'

export default () => {
    return (
        <form className="Questions">
            { questions.map((data, index) => <Question key={index} index={index} data={data}/> )}
        </form>
    )
};

