import React from 'react';
import { render } from 'react-dom';
import '../styles.scss';
import './application.scss';
import Questions from './Questions';


const Application = () => {
    return (
        <div>
            <h2>Maths Quiz</h2>
            <Questions />
        </div>
    )
};

render(<Application />, document.getElementById('root'));
