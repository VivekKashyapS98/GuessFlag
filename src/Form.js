import React, { Component } from 'react';
import Shuffle from 'shuffle-array';
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ''
        }
        this.checkAnswer = this.checkAnswer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({answer: e.target.value});
        console.log(e.target.value);
    }

    checkAnswer(e) {
        e.preventDefault();
        console.log(this.state.answer);
        if(this.state.answer === this.props.answer) {
            alert("Right Answer!");
            this.props.newQuestion();
        } else {
            alert("Wrong Answer!");
        }
    }

    render() {
        let options = Shuffle([...this.props.options, this.props.answer]);
        return (
            <form onSubmit={this.checkAnswer}>
                <h2>Question {this.props.q_no}</h2>
                <h3>To which Country does the flag belong to:</h3>
                <img alt="flag" src={this.props.flag}></img><br />
                <ol>
                    <li>
                    <input type="radio" id={options[0]} name="counry" value={options[0]} onClick={this.handleChange} />
                    <label for={options[0]}>{options[0]}</label>
                    </li>
                    <li>
                    <input type="radio" id={options[1]} name="counry" value={options[1]} onClick={this.handleChange} />
                    <label for={options[1]}>{options[1]}</label>
                    </li>
                    <li>
                    <input type="radio" id={options[2]} name="counry" value={options[2]} onClick={this.handleChange} />
                    <label for={options[2]}>{options[2]}</label>
                    </li>
                    <li>
                    <input type="radio" id={options[3]} name="counry" value={options[3]} onClick={this.handleChange} />
                    <label for={options[3]}>{options[3]}</label>
                    </li>
                </ol>
                <input className="check-btn" type="submit" value="check" />
            </form>
        );
    }
}

export default Form;