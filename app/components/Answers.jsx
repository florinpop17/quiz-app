import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false
        }
    }
    
    checkAnswer(e) {
        let { isAnswered } = this.props;
        
        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct } = this.props;
            let answer = Number(elem.dataset.id);

            if(answer === correct){
                elem.className = 'right';
            }
            else {
                elem.className = 'wrong';
            }

            this.props.showButton();
        }
    }
    
    render() {
        let { answers } = this.props;
        return (
            <div id="answers">
                <ul>
                    <li onClick={this.checkAnswer.bind(this)} data-id="1"><span>A</span> <p>{answers[0]}</p></li>
                    <li onClick={this.checkAnswer.bind(this)} data-id="2"><span>B</span> <p>{answers[1]}</p></li>
                    <li onClick={this.checkAnswer.bind(this)} data-id="3"><span>C</span> <p>{answers[2]}</p></li>
                    <li onClick={this.checkAnswer.bind(this)} data-id="4"><span>D</span> <p>{answers[3]}</p></li>
                </ul>
            </div>
        );
    }
}

export default Answers