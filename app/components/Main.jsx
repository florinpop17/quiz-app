import React from 'react';
import data from '../data/data';
import Answers from 'Answers';
import Footer from 'Footer';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            popup: {
                title: 'Welcome to the Quiz App',
                text: 'This application was built using ReactJS.'
            }
        }
        this.nextQuestion = this.nextQuestion.bind(this);
    }
    
    pushData(nr) {        
        this.setState({
            question: data[nr].question,
            answers: [data[nr].answers[0], data[nr].answers[1], data[nr].answers[2], data[nr].answers[3] ],
            correct: data[nr].correct,
            nr: this.state.nr + 1
        });
    }
    
    componentWillMount() {
        let { nr } = this.state;
        this.pushData(nr);
    }
    
    nextQuestion() {
        let { nr, total, score } = this.state;
        
        if(nr === total){
            alert(`You finished the quiz! You scored ${score} out of ${total}`);
        } else {
            this.pushData(nr);
            this.setState({
                showButton: false,
                questionAnswered: false
            });
        }
        
    }
    
    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }
    
    render() {
        let { nr, total, question, answers, correct, showButton, questionAnswered, popup} = this.state;
        
        return (
            <div className="container">
                <div className="popup-container">
                    <div className="container">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="popup">
                                <h1>{popup.title}</h1>
                                <p>{popup.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                        <div id="question">
                            <h4>Question {nr}/{total}</h4>
                            <p>{question}</p>
                        </div>
                        <Answers answers={answers} correct={correct} showButton={this.handleShowButton.bind(this)} isAnswered={questionAnswered}/>
                        <div id="submit">
                            {showButton ? <button onClick={this.nextQuestion} >Next question</button> : null}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default Main