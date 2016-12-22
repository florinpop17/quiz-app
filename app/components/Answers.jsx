import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleCheck(e) {
        let selectedLi = e.currentTarget.dataset.id;
        
        this.props.selectedLi(selectedLi);
    }
    
    render() {
        return (
            <div id="answers">
                <ul>
                    <li onClick={this.handleCheck.bind(this)} data-id="1"><span>A</span> <p>{this.props.answers[0]}</p></li>
                    <li onClick={this.handleCheck.bind(this)} data-id="2"><span>B</span> <p>{this.props.answers[1]}</p></li>
                    <li onClick={this.handleCheck.bind(this)} data-id="3"><span>C</span> <p>{this.props.answers[2]}</p></li>
                    <li onClick={this.handleCheck.bind(this)} data-id="4"><span>D</span> <p>{this.props.answers[3]}</p></li>
                </ul>
            </div>
        );
    }
}

export default Answers