import React, {Component} from 'react';
import './application.css';

import Questions from './questions/Questions';
import TextPane from './text-pane/TextPane';

import questions from '../questions'

import {loadState, saveState} from '../localStorage';

class Application extends Component {

    constructor(props) {
        super(props);

        let state = loadState() || questions;
        this.state = {
            questions: state,
            edit: false
        };

        this.update = this.update.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        console.log('toggle');
        this.setState({
            edit: !this.state.edit
        });
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
                <h2 onClick={() => this.toggle()}>🌈 😁  💯 Maths Quiz! 💯  😁 🌈</h2>
                {
                    this.state.edit &&
                    <TextPane questions={this.state.questions} update={this.update} />
                }
                {
                    !this.state.edit &&
                    <Questions questions={this.state.questions} />
                }
            </div>
        )
    }
}

export default Application;
