import React from 'react';
import './questions.css';

import Question from '../question/Question';


export default ({questions}) => {
    return (
        <div className="Questions">

            <form>
            { questions
                .split('\n')
                .map(q => q.trim())
                .filter(q => q.length > 0)
                .map((data, index) => <Question key={index} index={index} data={data}/> )}
            </form>

        </div>
    )
};

