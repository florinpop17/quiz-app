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
            </div>
        );
    }
};

export default Main