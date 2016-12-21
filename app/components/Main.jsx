import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: 'Quiz app'}
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                
                <div id="question">
                    <h2>Question 1/10</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima recusandae culpa commodi tempore, qui voluptatibus nisi atque maiores error, quod omnis, autem ipsum quaerat impedit nesciunt id a, excepturi. Hic.</p>
                </div>
                <div id="answers">
                    <ul>
                        <li><span>A</span>Answer A</li>
                        <li><span>B</span>Answer B</li>
                        <li><span>C</span>Answer C</li>
                        <li><span>D</span>Answer D</li>
                    </ul>
                </div>
                <div id="submit">
                    <button>Submit</button>
                </div>
            </div>
        );
    }
};

export default Main