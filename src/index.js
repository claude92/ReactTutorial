import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 }
    }
    tick() {
        this.setState(state => { return { seconds: state.seconds + 1 } })
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                Secondi: {this.state.seconds}
            </div>
        )
    }

}
ReactDOM.render(
    <Timer />,
    document.getElementById('root')
);
