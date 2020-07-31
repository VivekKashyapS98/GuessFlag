import React, { Component } from 'react';
import Shuffle from 'shuffle-array';
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            options: []
        };
    }

    handleChange(e) {
        this.setState({ answer: e.target.value });
    }

    checkAnswer(e) {
        e.preventDefault();
        if(this.state.answer === this.props.answer) {
            alert("Right Answer!");
            this.props.newQuestion();
        } else {
            alert("Wrong Answer!");
            this.props.newQuestion();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.answer !== prevProps.answer)
            this.setState({
                options: Shuffle([...this.props.options, this.props.answer])
            });
    }

    render() {
        let { options } = this.state;
        return (
            <form onSubmit={e => this.checkAnswer(e)}>
                <h2>Question {this.props.q_no}</h2>
                <h3>To which Country does the flag belong to:</h3>
                <img alt="flag" src={this.props.flag}></img><br />
                <ol>
                    {options.map((option) => (
                        <li key={option}>
                            <input 
                                type="radio"
                                id={option} 
                                name="country" 
                                value={option} 
                                onClick={e => this.handleChange(e)} 
                            />
                            <label htmlFor={option}>{option}</label>
                        </li>
                    ))}
                </ol>
                <input className="check-btn" type="submit" value="check" />
            </form>
        );
    }
}

export default Form;