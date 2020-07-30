import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            q_no: 0,
            rand_q: {},
            opts: []
        }
        this.newQuestion = this.newQuestion.bind(this);
    }

    componentDidMount() {
        if(this.state.data === undefined) {
            fetch("http://restcountries.eu/rest/v2/all")
            .then(data => data.json())
            .then(data => this.setState({data: [data.map((val) => ({name: val.name, flag: val.flag}))]}))
            .then(() => console.log(this.state.data));
        }
        this.newQuestion();
    }

    newQuestion() {
        const rand = Math.floor(Math.random() * 200);
        this.setState({rand_q: {name: this.state.data[rand].name, flag: this.state.data[rand].flag}, opts: [this.state[rand-1].name, this.state[rand+1].name, this.state[rand+2].name]});
    }

    render() {
        let view = <h3>Loading...</h3>;
        if(this.state.data !== []) {
            const randomObject = this.state.rand_q;
            console.log(randomObject);
            view = <Form newQuestion={this.newQuestion} q_no={this.state.q_no} flag={randomObject.flag} options={this.state.opts} answer={randomObject.name} />
        } 
        
        return (
            <div className="quiz-board">
                {view}
            </div>
        );
    }
}

export default Quiz;