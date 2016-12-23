import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        this.props.showHidePopup();
    }
    
    render() {
        let { title, text, buttonText } = this.props;
        
        return (
            <div className="popup-container">
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="popup">
                            <h1>{title}</h1>
                            <p>{text}</p>
                            <button onClick={this.popupHandle}>{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup