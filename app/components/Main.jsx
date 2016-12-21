import React from 'react';
import data from '../data/data';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length
        }
        this.nextQuestion = this.nextQuestion.bind(this);
    }
    
    pushData(nr) {        
        this.setState({
            question: data[nr].question,
            answerA: data[nr].answers[0],
            answerB: data[nr].answers[1],
            answerC: data[nr].answers[2],
            answerD: data[nr].answers[3],
            nr: this.state.nr + 1
        });
    }
    
    componentWillMount() {
        let { nr } = this.state
        this.pushData(nr);
    }
    
    nextQuestion() {
        let { nr, total } = this.state;
        
        if(nr === total){
            alert("You finished the quiz!");
        } else {
            this.pushData(nr);
        }
        
    }
    
    render() {
        let { nr, total, question, answerA, answerB, answerC, answerD } = this.state;
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                        <h1>Quiz application</h1>
                
                        <div id="question">
                            <h4>Question {nr}/{total}</h4>
                            <p>{question}</p>
                        </div>
                        <div id="answers">
                            <ul>
                                <li><span>A</span> <p>{answerA}</p></li>
                                <li><span>B</span> <p>{answerB}</p></li>
                                <li><span>C</span> <p>{answerC}</p></li>
                                <li><span>D</span> <p>{answerD}</p></li>
                            </ul>
                        </div>
                        <div id="submit">
                            <button onClick={this.nextQuestion}>Submit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
};

export default Main