import React from 'react';
import './question.scss';


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
        let expected;
        const data = this.props.data;
        if (data[2] === '+') {
            expected = data[0] + data[1];
        } else {
            expected = data[0] - data[1];
        }
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
        const className = ['question'];
        if (this.state.hasFocus) {
            className.push('has-focus');
        }
        const data = this.props.data;
        return (
            <li className={className.join(' ')}>
                <div className="calculation">
                    <div className="number">{data[0]}</div>
                    {data[2]}
                    <div className="number">{data[1]}</div>
                    =
                </div>
                <div className="answer">
                    <input
                        className={this.state.status}
                        onFocus={() => this.onFocus()}
                        onBlur={(e) => {
                            this.offFocus()
                            this.check(e.target.value)
                        }}
                        onKeyUp={(e) => {
                            if (e.keyCode === 13) {
                                this.check(e.target.value)
                                //e.target.(e.target.tabIndex++)
                            }
                        }}
                        />
                </div>
            </li>
        )
    }
}
