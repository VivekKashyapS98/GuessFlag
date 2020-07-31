import React, { Component } from 'react';
import Shuffle from 'shuffle-array';
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            options: []
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
            this.props.newQuestion();
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
                    {
                        options.map((option, ind) => (
                            <li key={ind}>
                                <input 
                                    type="radio"
                                    id={option} 
                                    name="counry" 
                                    value={option} 
                                    onClick={this.handleChange} 
                                />
                                <label htmlFor={option}>{option}</label>
                            </li>
                        ))
                    }
                </ol>
                <input className="check-btn" type="submit" value="check" />
            </form>
        );
    }
}

export default Form;