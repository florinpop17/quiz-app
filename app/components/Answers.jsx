import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
    }
    
    checkAnswer(e) {
        let { correct } = this.props;
        let answer = Number(e.currentTarget.dataset.id);
        
        if(answer === correct)
            console.log('right')
        else
            console.log('wrong')
    }
    
    render() {
        return (
            <div id="answers">
                <ul>
                    <li onClick={this.checkAnswer.bind(this)} data-id="1"><span>A</span> <p>{this.props.answers[0]}</p></li>
                    <li onClick={this.checkAnswer.bind(this)} data-id="2"><span>B</span> <p>{this.props.answers[1]}</p></li>
                    <li onClick={this.checkAnswer.bind(this)} data-id="3"><span>C</span> <p>{this.props.answers[2]}</p></li>
                    <li onClick={this.checkAnswer.bind(this)} data-id="4"><span>D</span> <p>{this.props.answers[3]}</p></li>
                </ul>
            </div>
        );
    }
}

export default Answers