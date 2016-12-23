import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            popupStart: {
                title: 'Welcome to the Quiz App',
                text: 'This is a simple quiz aplication that aims to test your skills in a certain field. This application was built using ReactJS and can be customized to fit any field by changing the questions/answers.',
                buttonText: 'Start'
            },
            popupEnd: {
                title: 'Quiz finished!',
                text: 'Result: ',
                buttonText: 'Restart'
            }
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end'
            });
            
            this.props.startQuiz();
        } else {
            this.setState({
                time: 'start'
            })
        }
    }
    
    render() {
       
        let { time } = this.state;
        let popupData = (time === 'start' ? this.state.popupStart : this.state.popupEnd);
        
        let { title, text, buttonText } = popupData;
        
        return (
            <div className="popup-container">
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="popup">
                            <h1>{title}</h1>
                            <p>{text}</p>
                            <button className="fancy-btn" onClick={this.popupHandle}>{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup