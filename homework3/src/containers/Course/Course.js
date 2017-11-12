import React, {PureComponent} from 'react';

class Course extends PureComponent {
    state = {
        course: {
            id: null,
            title: null
        }
    }

    componentWillMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        this.loadData();
    }


    loadData() {
        const query = new URLSearchParams(this.props.location.search);
        let title;
        for (let param of query.entries()) {
            title = param[1];
        }
        this.setState({
            id: this.props.match.params.id,
            title: title
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;