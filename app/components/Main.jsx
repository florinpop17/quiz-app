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
                        <li>Answer A</li>
                        <li>Answer B</li>
                        <li>Answer C</li>
                        <li>Answer D</li>
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