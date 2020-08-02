import React, { Component } from "react";
import Shuffle from "shuffle-array";
import "./App.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      options: [],
      submit: "check",
      score: 0
    };
  }

  handleChange(e) {
    this.setState({ answer: e.target.value });
  }

  checkAnswer(e) {
    e.preventDefault();
    if (this.state.answer === this.props.answer) {
      alert("Right Answer!");
      this.setState({ score: this.state.score + 1 });
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
        <img alt="flag" src={this.props.flag} />
        <br />
        <ol>
          {options.map(option => (
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
        <br /><br />
        <h3>
          Score: {this.state.score}/{this.props.q_no}
        </h3>
        <input className="check-btn" type="submit" value={this.state.submit} />
      </form>
    );
  }
}

export default Form;
