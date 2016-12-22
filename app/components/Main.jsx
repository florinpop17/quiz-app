import React from 'react';
import data from '../data/data';
import Answers from 'Answers';

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
            answers: [data[nr].answers[0], data[nr].answers[1], data[nr].answers[2], data[nr].answers[3] ],
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
            alert("Congratulations! You finished the quiz!");
        } else {
            this.pushData(nr);
        }
        
    }
    
    handleSelectedLi(item) {
        
    }
    
    render() {
        let { nr, total, question, answers } = this.state;
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                        <h1>Quiz application</h1>
                
                        <div id="question">
                            <h4>Question {nr}/{total}</h4>
                            <p>{question}</p>
                        </div>
                        <Answers answers={answers} selectedLi={this.handleSelectedLi}/>
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