import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong!</h1>
                </div>
            );
        } else {
            return this.props.children;
        }

    }
}

export default ErrorBoundary;
