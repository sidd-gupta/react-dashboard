import React from 'react';
import '../css/Loader.css';

class Loader extends React.Component {

    onCancel() {
        if (this.props.cancellable && this.props.onCancel) {
            this.props.onCancel();
        }
    }

    render() {
        return (
            <div
                id={this.props.id}
                className="loaderContainer">
                <div className={"loaderWrapper " + (this.props.cancellable ? "cancellable" : "")}>
                    <img
                        src={require('../images/loader.svg')}
                        className="loader"
                        alt="loader"
                    />
                    <div className="loaderInfo">{this.props.action || 'Loading...'}</div>
                    <div
                        className="loaderCancel"
                        onClick={this.onCancel.bind(this)}
                    >
                        Cancel
          </div>
                </div>
            </div>
        );
    }
}

export default Loader;
