import React, {Component} from 'react';

/*
const withClassDiv = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};
*/

const withClassDiv = (WrappedComponent, className) => {
    return class extends Component { // Anonymous Class
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>            );
        }
    }
};


export default withClassDiv;