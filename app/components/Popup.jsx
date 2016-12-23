import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Welcome to the Quiz App',
            text: 'This is a simple quiz aplication built using ReactJS and can be customized to fit any field by uploading your own data. \n Currently it\'s loaded with CSS questions from W3Scools, but you can easily load any type of questions into it.' ,
            buttonText: 'Start' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart the quiz'
            });
            
            this.props.startQuiz();
        } else {            
            location.reload();// restart the application
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: 'You have completed the quiz. \n You got: ' + this.props.score + ' out of ' +this.props.total +' questions right.'
        })
    }
    
    render() {
       
        let { title, text, buttonText } = this.state;
        
        let { style } = this.props;
        
        let newText = text.split('\n').map((item, i) => <p key={i}>{item}</p> );
        
        return (
            <div className="popup-container" style={style}>
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="popup">
                            <h1>{title}</h1>
                            {newText}
                            <button className="fancy-btn" onClick={this.popupHandle}>{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup