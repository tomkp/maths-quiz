import React from 'react';
import { render } from 'react-dom';
import './styles.css';
import './application.css';

import Questions from './components/Questions';


const Application = () => {
    return (
        <div>
            <h2>Maths Quiz</h2>
            <Questions />
        </div>
    )
};

render(<Application />, document.getElementById('root'));
