import React, { Component } from "react";
import Form from "./Form";
import "./App.css";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      q_no: 0,
      rand_q: {},
      opts: []
    };
    this.newQuestion = this.newQuestion.bind(this);
  }

  componentDidMount() {
    if (this.state.data === undefined) {
      fetch("https://restcountries.eu/rest/v2/all")
        .then(data => data.json())
        .then(data =>
          this.setState(
            {
              data: data.map(({ name, flag }) => ({ name, flag }))
            },
            this.newQuestion
          )
        );
    }
  }

  newQuestion() {
    const rand = Math.ceil(Math.random() * 250);
    this.setState({
      rand_q: this.state.data[rand],
      opts: [
        this.state.data[rand - 1].name,
        this.state.data[rand + 1].name,
        this.state.data[rand + 2].name
      ],
      q_no: this.state.q_no + 1
    });
  }

  render() {
    let view = <h3>Loading...</h3>;
    if (this.state.data !== []) {
      const { flag, name } = this.state.rand_q;
      view = (
        <Form
          newQuestion={this.newQuestion}
          q_no={this.state.q_no}
          flag={flag}
          options={this.state.opts}
          answer={name}
        />
      );
    }

    return <div className="quiz-board">{view}</div>;
  }
}

export default Quiz;
