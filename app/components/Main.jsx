import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: 'Quiz app'}
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                        <h1>{this.state.title}</h1>
                
                        <div id="question">
                            <h4>Question 1/10</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima recusandae culpa commodi tempore, qui voluptatibus nisi atque maiores error.</p>
                        </div>
                        <div id="answers">
                            <ul>
                                <li><span>A</span> <p>Long answer A Long answer A Long answer A</p></li>
                                <li><span>B</span> <p>Answer B</p></li>
                                <li><span>C</span> <p>Long answer C Long answer C Long answer C Long answer C Long answer C Long answer C</p></li>
                                <li><span>D</span> <p>Answer D</p></li>
                            </ul>
                        </div>
                        <div id="submit">
                            <button>Submit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
};

export default Main