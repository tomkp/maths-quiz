import React from 'react';
import './question.css';


export default class Question extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: ''
        }
    }

    onFocus() {
        this.setState({
            hasFocus: true
        })
    }

    offFocus() {
        this.setState({
            hasFocus: false
        })
    }

    check(value) {
        const data = this.props.data;
        const expected = eval(data);
        if (value) {
            const correct = expected === +value;
            this.setState({
                status: correct ? 'correct':'incorrect'
            });
        } else {
            this.setState({
                status: ''
            });
        }
    }

    render() {
        const className = ['Question'];
        if (this.state.hasFocus) {
            className.push('has-focus');
        }
        const tokens = this.props.data.split(' ');
        return (
            <div className={className.join(' ')}>
                <div className="calculation">
                    <div className="number">{tokens[0]}</div>
                    {tokens[1]}
                    <div className="number">{tokens[2]}</div>
                    =
                </div>
                <div className="answer">
                    <input
                        tabIndex={this.props.index + 1}
                        className={this.state.status}
                        onFocus={() => this.onFocus()}
                        onBlur={(e) => {
                            this.offFocus();
                            this.check(e.target.value);
                        }}
                        onKeyUp={(e) => {
                            if (e.keyCode === 13) {
                                this.check(e.target.value);
                            }
                        }}
                        />
                </div>
            </div>
        )
    }
}
