import React, {Component} from 'react';
import './application.css';

import Questions from './questions/Questions';
import TextPane from './text-pane/TextPane';

import questions from '../questions'

import {loadState, saveState} from '../localStorage';

class Application extends Component {

    constructor(props) {
        super(props);

        let state = loadState();
        if (!state) {
            this.state = {
                questions: questions
            };
        } else {
            this.state = {
                questions: state
            };
        }

        this.update = this.update.bind(this);
    }


    update(questions) {
        console.log('update', questions);
        this.setState({
            questions: questions
        });

        saveState(questions);
    }


    render() {
        return (
            <div className="Application">
                <h2>🌈 😁  💯 Maths Quiz! 💯  😁 🌈</h2>
                <TextPane questions={this.state.questions} update={this.update} />
                <Questions questions={this.state.questions} />
            </div>
        )
    }
}

export default Application;
