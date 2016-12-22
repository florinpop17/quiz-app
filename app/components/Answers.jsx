import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleCheck(e) {
        console.log(e);
    }
    
    render() {
        return (
            <div id="answers">
                <ul>
                    <li onClick={this.handleCheck}><span>A</span> <p>{this.props.answers[0]}</p></li>
                    <li onClick={this.handleCheck}><span>B</span> <p>{this.props.answers[1]}</p></li>
                    <li onClick={this.handleCheck}><span>C</span> <p>{this.props.answers[2]}</p></li>
                    <li onClick={this.handleCheck}><span>D</span> <p>{this.props.answers[3]}</p></li>
                </ul>
            </div>
        );
    }
}

export default Answers