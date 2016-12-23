import React from 'react';

class Popup extends React.Component {
    render() {
        return (
            <div className="popup-container">
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="popup">
                            <h1>{popup.title}</h1>
                            <p>{popup.text}</p>
                            <button onClick={this.startQuiz}>{popup.button}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup